import type { NextConfig } from "next";

// Every route is static. Cache Components is left off on purpose: with it, an unknown /careers/<slug> or
// /blog/<slug> is answered from a prerendered shell with status 200 before notFound() runs; without it,
// `dynamicParams = false` makes those a real 404.
const nextConfig: NextConfig = {};

export default nextConfig;
