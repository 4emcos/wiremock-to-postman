import { PostmanCollection } from '../domain/postman-collection/postman-collection'
import { WiremockMappings } from '../domain/wiremock-mappings/wiremock-mappings'
import {
  mapBodyPatterns,
  mapHeaders,
  mapQueryParameters,
  parseStringToJson
} from './utils'

const parseToPostmanCollection = (
  data: WiremockMappings,
  host: string
): PostmanCollection => {
  const collection = {
    info: {
      name: 'Wiremock Mappings',
      schema:
        'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: data.mappings.map(mapping => ({
      name: mapping.scenarioName ? mapping.scenarioName : mapping.request.url,
      request: {
        method: mapping.request.method,
        header: mapping.request.headers
          ? mapHeaders(mapping.request.headers)
          : [],
        body: {
          mode: 'raw',
          raw: mapping.request.bodyPatterns
            ? parseStringToJson(
                mapBodyPatterns(mapping.request.bodyPatterns)
              ) || ''
            : ''
        },
        url: {
          raw: mapping.request.url,
          protocol: 'http',
          host: [
            host + mapping.request.url ?? host + mapping.request.urlPathPattern
          ],
          query: mapping.request.queryParameters
            ? mapQueryParameters(mapping.request.queryParameters)
            : []
        }
      }
    }))
  }

  return collection
}

export default parseToPostmanCollection
