module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "linco-site.s3.amazonaws.com",
      },
    ],
  },
  output: "standalone",
  redirects: async () => {
    return [
      {
        source: "/contactUs",
        destination: "/contact-us",
        permanent: false,
      },
      {
        source: "/aboutUs",
        destination: "/about-us",
        permanent: false,
      },
      {
        source: "/imageRequest",
        destination: "/image-request",
        permanent: false,
      },
      {
        source: "/privateLabel",
        destination: "/private-label",
        permanent: false,
      },
    ];
  },
};
