import { join } from 'path'

import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload'
import { FastifyPluginAsync } from 'fastify'

export type AppOptions = {} & Partial<AutoloadPluginOptions>
const app: FastifyPluginAsync<AppOptions> = async (fastify, options): Promise<void> => {
  fastify.register(AutoLoad, { dir: join(__dirname, 'plugins'), options })
}

export default app
export { app }
