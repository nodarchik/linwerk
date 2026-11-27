import type { NextConfig } from "next";

// Every route is static. Cache Components is left off on purpose: with it, an unknown /careers/<slug> or
// /blog/<slug> is answered from a prerendered shell with status 200 before notFound() runs; without it,
// `dynamicParams = false` makes those a real 404.
const nextConfig: NextConfig = {
  // The dev server is published on another port, so the browser's host is not the one Next expects.
  ...(process.env.DOCKER === "1"
    ? {
        allowedDevOrigins: ["127.0.0.1", "localhost"],
        webpack: (config, { dev }) => {
          if (dev) {
            // Bind-mount events do not reach Webpack's native watcher, but mtimes do.
            config.watchOptions = {
              poll: 1000,
              aggregateTimeout: 300,
            };
          }
          return config;
        },
      }
    : {}),
};

export default nextConfig;
