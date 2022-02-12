import fp from 'fastify-plugin'
import { connect, connection } from 'mongoose'

// const MONGODB_URL = process.env.MONGODB_URL || ''
const MONGODB_URL = ''

// MongoDB连接插件
export default fp(async (fastify, opts) => {
  fastify.addHook('onReady', () => {
    if(!MONGODB_URL) return
    connect(MONGODB_URL)
    connection.on('error', console.error.bind(console, 'mongodb 连接失败:'))
    connection.once('open', () => console.log('mongodb 连接成功'))
  })
})
