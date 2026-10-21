// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://www.samiratravel.co.id',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  build: {
    format: 'directory',
  },

  adapter: cloudflare()
});