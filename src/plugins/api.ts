import type { RouteOptions } from 'fastify'
import fp from 'fastify-plugin'
import { resolve } from 'path'
import { writeFileSync } from 'fs'
const apiPath = resolve(__dirname, '../../static/api.json')

// 简易api接口文档生成插件
export default fp(async (fastify, opts) => {
  let apis: any[] = []
  fastify.addHook('onRoute', (apiItem: RouteOptions) => {
    apis.push(apiItem)
  })
  fastify.addHook('onReady', () => {
    writeFileSync(apiPath, JSON.stringify(apis, null, 2), { encoding: 'utf8' })
  })
})
