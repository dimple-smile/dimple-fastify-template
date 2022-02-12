import fp from 'fastify-plugin'
import cors from 'fastify-cors'

// 接口跨域插件
export default fp((fastify) => fastify.register(cors))
