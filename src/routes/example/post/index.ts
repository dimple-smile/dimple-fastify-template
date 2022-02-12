import type { FastifyInstance } from 'fastify'
import { models } from '../inject'

export default async (app: FastifyInstance) => {
  app.post('/example', { config: { name: 'post example' } }, async (request, reply) => {
    return await models.Template.create([{ name: +new Date() }])
  })
}