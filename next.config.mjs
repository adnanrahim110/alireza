/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: false,
  distDir: 'out',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
