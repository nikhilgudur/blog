import Link from "next/link";
import { getAllBlogPosts } from "~/utils/mdx";
import { formatDate } from "~/utils/formatDate";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 rounded-lg border hover:border-foreground transition-colors"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {formatDate(post.date)}
            </p>
            <p>{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
