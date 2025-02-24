"use client";

import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "./MDXComponents";

export default function MDXContent({ source }: { source: any }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote {...source} components={MDXComponents} />
    </div>
  );
}
