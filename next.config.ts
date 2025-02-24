import createMDX from "@next/mdx";

const withMDX = createMDX({
  // MDX options if needed
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Enable experimental features if needed
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(nextConfig);
