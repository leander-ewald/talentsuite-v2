/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO: Trailing Slashes für konsistente URLs
  trailingSlash: false,
// Build trotz ESLint-Warnings erlauben
eslint: {
  ignoreDuringBuilds: true,
},
  // Performance: Bilder von externen Domains optimieren
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cre8ify.fra1.cdn.digitaloceanspaces.com",
        pathname: "/talentsuite/**",
      },
    ],
  },

  // SEO: Redirects für alte/fehlerhafte URLs
  async redirects() {
    return [
      // Fix: Tippfehler eComerce -> ecommerce
      {
        source: "/services/eComerce",
        destination: "/services/ecommerce",
        permanent: true,
      },
      // Redirect englische URLs auf deutsche
      {
        source: "/privacyPolicy",
        destination: "/datenschutz",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/agb",
        permanent: true,
      },
      // Redirect alte Impressum-URL
      {
        source: "/imprint",
        destination: "/impressum",
        permanent: true,
      },
    ];
  },

  // Security Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
