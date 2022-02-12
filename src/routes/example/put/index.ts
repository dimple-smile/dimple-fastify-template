import type { FastifyInstance } from 'fastify'
import { models } from '../inject'

export default async (app: FastifyInstance) => {
  app.put('/example', { config: { name: 'put example' } }, async (request, reply) => {
    return await models.Template.updateOne([{ name: +new Date() }])
  })
}