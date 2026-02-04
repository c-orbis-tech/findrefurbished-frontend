import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Gebruik expliciet /serverless

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  image: {
    domains: ['img.findrefurbished.com'],
    remotePatterns: [{ protocol: 'https' }],
  },
});
