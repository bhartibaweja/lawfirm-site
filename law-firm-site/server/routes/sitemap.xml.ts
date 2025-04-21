import { createClient } from '@sanity/client'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const client = createClient({
    projectId: 'your_project_id',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-01'
  })

  const posts = await client.fetch(`*[_type == "post"]{slug}`)
  const routes = posts.map(post => `<url><loc>https://yourdomain.com/blog/${post.slug.current}</loc></url>`).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://yourdomain.com/</loc></url>
    <url><loc>https://yourdomain.com/#services</loc></url>
    <url><loc>https://yourdomain.com/#about</loc></url>
    <url><loc>https://yourdomain.com/#blog</loc></url>
    <url><loc>https://yourdomain.com/#contact</loc></url>
    ${routes}
  </urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  event.node.res.end(sitemap)
})
