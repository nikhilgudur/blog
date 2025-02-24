import Image from "next/image";
import type { ImageProps } from "next/image";

interface HeadingProps {
  children: React.ReactNode;
}

interface CustomImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
}

export const MDXComponents = {
  h1: ({ children }: HeadingProps) => (
    <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: HeadingProps) => (
    <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
  ),
  p: ({ children }: HeadingProps) => (
    <p className="my-4 leading-7">{children}</p>
  ),
  Image: (props: CustomImageProps) => (
    <Image {...props} className="rounded-lg my-8" />
  ),
  // Add more components as needed
};
