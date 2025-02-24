import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface BlogMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export interface BlogPost {
  meta: BlogMeta;
  content: MDXRemoteSerializeResult;
}

export interface MDXSource {
  compiledSource: string;
  scope?: Record<string, unknown>;
}
