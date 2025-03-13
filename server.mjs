// server.mjs
// import { createServer } from 'https'
import { createServer } from 'http'
import { createApp, toNodeListener } from 'h3'
import { loadNuxt } from '@nuxt/kit'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function start() {
  console.log('Starting Nuxt...');
  const nuxt = await loadNuxt({
    rootDir: __dirname,
    dev: true,
    ready: false
  });

  console.log('Nuxt loaded, calling ready...');
  await nuxt.ready();

  console.log('Creating app...');
  const app = createApp();

  console.log('Adding Nuxt handler...');
  app.use(nuxt.server.app);

  console.log('Creating HTTPS server...');
  // const server = createServer({
  //   key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
  //   cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
  // }, toNodeListener(app));

  const server = createServer(toNodeListener(app))  // Remove HTTPS options

  console.log('Starting server...');
  server.listen(3000, (err) => {
    if (err) {
      console.error('Server error:', err);
      process.exit(1);
    }
    console.log('Server listening on https://localhost:3000');
  });
}

start().catch((error) => {
  console.error(error)
  process.exit(1)
})