import { type FastifyRequest } from 'fastify'
import { type WiremockMappings } from './wiremock-mappings/wiremock-mappings'

interface MappingsRequest extends FastifyRequest {
  body: WiremockMappings
}

export type { MappingsRequest }
