import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

export function generateMetadata({
  title = "Echo Solutions - We Build, Design, Secure, and Optimize Tech for Impact",
  description = "A dynamic team of 20+ young tech enthusiasts specializing in AI/ML, cybersecurity, full-stack development, and social impact technology solutions.",
  keywords = "tech startup, AI, machine learning, cybersecurity, web development, social impact, technology consulting, Rwanda, Africa",
  image = "/thumbnail.png",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Echo Solutions Team",
  section,
  tags = [],
  structuredData,
}: SEOProps): Metadata {
  const fullImageUrl = image.startsWith("http")
    ? image
    : `https://echosolutions.rw${image}`;

  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: url || "https://echosolutions.rw",
      siteName: "Echo Solutions",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@echosolutions",
      site: "@echosolutions",
    },
    alternates: {
      canonical: url || "https://echosolutions.rw",
    },
  };

  // Add optional metadata only if values exist
  const otherMeta: Record<string, string> = {};

  if (publishedTime) {
    otherMeta["article:published_time"] = publishedTime;
  }

  if (modifiedTime) {
    otherMeta["article:modified_time"] = modifiedTime;
  }

  if (author) {
    otherMeta["article:author"] = author;
  }

  if (section) {
    otherMeta["article:section"] = section;
  }

  if (tags.length > 0) {
    otherMeta["article:tag"] = tags.join(", ");
  }

  if (Object.keys(otherMeta).length > 0) {
    metadata.other = otherMeta;
  }

  return metadata;
}

// For pages that need structured data
export function generateStructuredData(data?: object) {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Echo Solutions",
    url: "https://echosolutions.rw",
    logo: "https://echosolutions.rw/white.svg",
    description: "We Build, Design, Secure, and Optimize Tech for Impact",
    address: {
      "@type": "PostalAddress",
      addressCountry: "RW",
      addressRegion: "Kigali",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@echosolutions.rw",
    },
    sameAs: [
      "https://linkedin.com/company/echhosolutions",
      "https://github.com/EchoSols",
    ],
  };

  return data || defaultStructuredData;
}
