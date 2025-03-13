// server/middleware/stripe-webhook.js
import { defineEventHandler, readRawBody } from 'h3'

export default defineEventHandler(async (event) => {
  if (event.node.req.url === '/api/stripe-webhook') {
    const rawBody = await readRawBody(event)
    event.context.rawBody = rawBody
  }
})