import Image from "next/image";

export const MDXComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="my-4 leading-7">{children}</p>
  ),
  Image: (props: any) => <Image {...props} className="rounded-lg my-8" />,
  // Add more components as needed
};
