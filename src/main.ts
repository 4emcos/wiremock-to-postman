import fastify, { type FastifyInstance } from 'fastify'
import { type IncomingMessage, type Server, type ServerResponse } from 'http'
import { type MappingsRequest } from './domain/mappings-request'
import parseToPostmanCollection from './utils/parse-postman-collection'

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({ logger: true })

async function router(fastify: FastifyInstance): Promise<void> {
  fastify.route({
    method: 'POST',
    url: '/',
    handler: async (req: MappingsRequest, reply) => {
      return await reply.send(parseToPostmanCollection(req.body, req.body.host))
    }
  })
}

void server.register(router)

server.listen({ port: 8080, host: '0.0.0.0' }, () => {
  console.log('running on port 8080')
})
