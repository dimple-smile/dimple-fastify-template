import type { FastifyInstance } from 'fastify'
import { models } from '../inject'

export default async (app: FastifyInstance) => {
  app.delete('/example', { config: { name: 'delete example' } }, async (request, reply) => {
    return await models.Template.findOne().remove()
  })
}