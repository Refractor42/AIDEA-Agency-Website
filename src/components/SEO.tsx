import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "AIDEA - Leading AI Automation Solutions",
  description = "Transform your business with enterprise-grade AI automation solutions. Specializing in AI-powered CRM integration, customer support, lead generation, and social media management.",
  keywords = "AI automation, AI agency, AI customer support, AI CRM integration, AI social media, AI sales lead generation, enterprise AI solutions, AI consulting",
  image = "https://aidea.com/og-image.jpg",
  url = "https://aidea.com"
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIDEA",
    "description": description,
    "url": url,
    "logo": image,
    "sameAs": [
      "https://twitter.com/aidea",
      "https://linkedin.com/company/aidea",
      "https://github.com/aidea"
    ],
    "serviceType": [
      "AI Automation",
      "CRM Integration",
      "Customer Support",
      "Lead Generation",
      "Social Media Management"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="AIDEA" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}