/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   compiler: {
      styledComponents: true,
   },
   serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: "secret",
      secondSecret: process.env.SECOND_SECRET, // Pass through env variables
   },
   publicRuntimeConfig: {
      mySecret: process.env.SECRET_KEY,
      secondSecret: process.env.SECOND_SECRET,
      // Will be available on both server and client
   },
}

module.exports = nextConfig
