/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGODB_URI: "mongodb+srv://shazaniyu:gbadamosi2@cluster0.xc55a4a.mongodb.net/school-management?retryWrites=true&w=majority",
    SMNK_BLOG: "http://localhost:3000/"
  }
}

module.exports = nextConfig
