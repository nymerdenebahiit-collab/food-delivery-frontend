/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    // Disable case-sensitive paths
    config.resolve.symlinks = false;
    
    // Make webpack case-insensitive
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Ignore case sensitivity warnings
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      /only differ in casing/,
      /postcss-url-parser/,
    ];

    return config;
  },
};

export default nextConfig;