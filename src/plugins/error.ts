import fp from 'fastify-plugin'
const localize_zh = require('ajv-i18n/localize/zh')

// 本地化参数校验文本
export default fp(async (fastify, opts) => {
  fastify.setErrorHandler((error, request, reply) => {
    if (error.validation) {
      localize_zh(error.validation)
      reply.status(400).send({ code: 400, message: '参数校验失败', validation: error.validation })
      return
    }
    reply.send(error)
  })
})
