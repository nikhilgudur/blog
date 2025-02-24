import { getBlogBySlug, getAllBlogPosts } from "~/utils/mdx";
import { formatDate } from "~/utils/formatDate";
import { notFound } from "next/navigation";
import MDXContent from "~/components/MDXContent";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { meta, content } = await getBlogBySlug(params.slug);

    return (
      <article className="max-w-4xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
          <time className="text-gray-600 dark:text-gray-400">
            {formatDate(meta.date)}
          </time>
        </header>
        <MDXContent source={content} />
      </article>
    );
  } catch (error) {
    notFound();
  }
}
