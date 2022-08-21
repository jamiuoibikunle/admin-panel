/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'blog.alvastack.com.ng'],
  }
}

module.exports = nextConfig
