import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './src/utils/readTime';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-demo-wknd.vercel.app/",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  integrations: [
    tailwind(),
    vue({
      include: ['.src/components/vue/*'],
      template: true
    }),
    react({
      include: ['.src/components/react/*'],
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        experimentalThemes: {
          light: 'vitesse-light',
          dark: 'material-theme-palenight',
        },
        wrap: true
      },
      drafts: true
    })]
});
