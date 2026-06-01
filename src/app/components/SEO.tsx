import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
}

export function SEO({
  title = "B2B Vertriebsautomatisierung mit KI | Novastream.ai",
  description = "Steigern Sie Ihre Sales-Performance mit maßgeschneiderten KI-Agenten für den B2B Vertrieb. 24/7 Lead-Qualifizierung & nahtlose CRM-Integration.",
  keywords = "KI Agenten für B2B Vertrieb, B2B Vertriebsautomatisierung mit KI, KI Leadgenerierung, Künstliche Intelligenz Beratung für Unternehmen, Prozessautomatisierung durch KI, Novastream KI",
  url = "https://novastream.ai"
}: SEOProps) {
  
  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Novastream.ai",
    "url": url,
    "logo": `${url}/logo.png`, // Update this with actual logo URL when available
    "description": description,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": "German"
    }
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
