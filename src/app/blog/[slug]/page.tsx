import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, getAllSlugs } from "@/lib/blog-data";
import BlogPostClient from "./BlogPostClient";

const siteUrl = "https://ephortech.com";

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
      canonical: `${siteUrl}/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | EphorTech Blog`,
      description: post.excerpt,
      url: `${siteUrl}/blog/${slug}`,
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

function parseTurkishDate(dateStr: string): string {
  const months: Record<string, string> = {
    Oca: "01", Şub: "02", Mar: "03", Nis: "04",
    May: "05", Haz: "06", Tem: "07", Ağu: "08",
    Eyl: "09", Eki: "10", Kas: "11", Ara: "12",
  };
  const parts = dateStr.split(" ");
  const day = parts[0].padStart(2, "0");
  const month = months[parts[1]] || "01";
  const year = parts[2];
  return `${year}-${month}-${day}`;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const isoDate = parseTurkishDate(post.date);
  const wordCount = post.content.join(" ").split(/\s+/).length;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: isoDate,
    dateModified: isoDate,
    wordCount,
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      name: "EphorTech",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "EphorTech",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Ephortech-Logo-v1-1536x309.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
