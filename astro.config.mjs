import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import vercel from '@astrojs/vercel'

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],

  output: 'server',
  adapter: vercel(),

})