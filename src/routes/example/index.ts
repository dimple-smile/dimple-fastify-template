import type { FastifyInstance } from 'fastify'
import { models } from './inject'

export default async (app: FastifyInstance) => {
  app.get('/example', { config: { name: 'get example' } }, async (request, reply) => {
    return await models.Template.find()
  })
}