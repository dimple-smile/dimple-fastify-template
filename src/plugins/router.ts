import fp from 'fastify-plugin'
import { resolve } from 'path'
import AutoLoad from 'fastify-autoload'
import type { AppOptions } from '../app'

// 用于自动读取路由文件夹已经加载路由的插件
export default fp(async (fastify, options: AppOptions) => {
  fastify.register(AutoLoad, { dir: resolve(__dirname, '../routes'), options, dirNameRoutePrefix: false })
})
