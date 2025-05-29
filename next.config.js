/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...existing code...
  
  images: {
    domains: [
      'img.freepik.com',
      'images.yourstory.com',
      'www.datasciencecentral.com',
      'moneybrain-homepage.s3.ap-northeast-2.amazonaws.com',
      'renew.deepbrainai.io',
      'assets.vercel.com',
      'images.unsplash.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
};

module.exports = nextConfig;