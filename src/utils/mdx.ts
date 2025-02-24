import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { BlogPost, BlogMeta } from "~/types/blog";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const rootDirectory = path.join(process.cwd(), "src/content/blogs");

interface LineElement {
  type: string;
  children: Array<{
    type: string;
    value: string;
  }>;
  properties: {
    className?: string[];
  };
}

interface PrettyCodeOptions {
  theme: string;
  onVisitLine: (node: LineElement) => void;
  onVisitHighlightedLine: (node: LineElement) => void;
  onVisitHighlightedWord: (node: LineElement) => void;
}

const prettyCodeOptions: PrettyCodeOptions = {
  theme: "github-dark",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className?.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

export async function getBlogBySlug(slug: string): Promise<{
  meta: BlogMeta;
  content: MDXRemoteSerializeResult;
}> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { data, content } = matter(fileContent);
  const blogData = data as BlogMeta;
  const serializedContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions], rehypeSlug],
    },
    parseFrontmatter: true,
  });

  return {
    meta: {
      ...blogData,
      slug: realSlug,
    },
    content: serializedContent,
  };
}

export async function getAllBlogPosts(): Promise<BlogMeta[]> {
  const files = fs.readdirSync(rootDirectory);
  const posts: BlogMeta[] = [];

  for (const file of files) {
    const { meta } = await getBlogBySlug(file);
    posts.push(meta);
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
