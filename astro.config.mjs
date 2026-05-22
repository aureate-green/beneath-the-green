import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://beneath-the-green.example',
  markdown: {
    shikiConfig: { theme: 'css-variables' }
  }
});
