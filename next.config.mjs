/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Staff mini-bios were removed (Nov 7 relayed decision); staff appear as photos on About.
  async redirects() {
    return [{ source: "/staff", destination: "/about#team", permanent: false }]
  },
}

export default nextConfig
