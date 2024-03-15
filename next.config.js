/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// module.exports = {
//     images: {
//       unoptimized: true,
//     },
//   }

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tekpill.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tekpill-brands.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
