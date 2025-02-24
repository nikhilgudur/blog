# Next.js Blog with MDX

A modern blog application built with Next.js, TypeScript, and MDX support.

## Features

- MDX-based blog posts with frontmatter support
- Syntax highlighting with rehype-pretty-code
- Dark/Light theme toggle
- Responsive design with Tailwind CSS
- TypeScript support
- Custom font optimization with Geist fonts

## Getting Started

First, install the dependencies:

```bash
npm install
```

or

```bash
bun install
```

Then, run the development server:

```bash
npm run dev
```

or

```bash
bun run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/content/blogs/` - MDX blog post files
- `/src/components/` - React components
- `/src/app/` - Next.js app router pages
- `/src/utils/` - Utility functions
- `/src/types/` - TypeScript type definitions

## Writing Blog Posts

Create new blog posts by adding `.mdx` files to the `/src/content/blogs/` directory. Each post should include frontmatter with the following fields:

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
description: "Brief description of the post"
---
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [MDX](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [rehype-pretty-code](https://rehype-pretty-code.netlify.app/)
- [gray-matter](https://github.com/jonschlinkert/gray-matter)

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX with Next.js](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
