import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, getAllSlugs } from "@/lib/blog-data";
import BlogPostClient from "./BlogPostClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://ephortech.com/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | EphorTech Blog`,
      description: post.excerpt,
      url: `https://ephortech.com/blog/${slug}`,
      type: "article",
      locale: "tr_TR",
      siteName: "EphorTech",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
