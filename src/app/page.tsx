import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts } from "~/utils/mdx";
import { formatDate } from "~/utils/formatDate";

export default async function Home() {
  const latestPosts = await getAllBlogPosts();
  const recentPosts = latestPosts.slice(0, 3); // Show only 3 most recent posts

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Explore the latest articles and insights
          </p>
        </div>

        <section className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent Posts</h2>
            <Link
              href="/blog"
              className="text-sm hover:underline text-gray-600 dark:text-gray-400"
            >
              View all posts →
            </Link>
          </div>

          <div className="grid gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 rounded-lg border hover:border-foreground transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">
                  {post.title as string}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {formatDate(post.date as string)}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {post.description as string}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
