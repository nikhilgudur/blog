import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const rootDirectory = path.join(process.cwd(), "src/content/blogs");

const prettyCodeOptions = {
  theme: "github-dark",
  onVisitLine(node: any) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ["word"];
  },
};

export interface BlogPost {
  meta: {
    title: string;
    date: string;
    description: string;
    slug: string;
  };
  content: any; // MDX serialized content
}

export async function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { data, content } = matter(fileContent);
  const serializedContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
    },
    parseFrontmatter: true,
  });

  return {
    meta: {
      ...data,
      slug: realSlug,
    },
    content: serializedContent,
  };
}

export async function getAllBlogPosts() {
  const files = fs.readdirSync(rootDirectory);
  const posts = [];

  for (const file of files) {
    const { meta } = await getBlogBySlug(file);
    posts.push(meta);
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
