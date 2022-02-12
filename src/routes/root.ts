import type { FastifyInstance } from 'fastify'

export default async (app: FastifyInstance) =>
  app.get('/', { config: { name: 'root' } }, async (request, reply) => {
    return 'hello fastify!'
  })
