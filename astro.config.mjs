import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  srcDir: './',
  output: "server",
  adapter: cloudflare({
    runtime: {
      mode: "local",
    },
  }),
})
