import { Mapping } from './mapping'

type WiremockMappings = {
  mappings: Mapping[]
  meta: {
    total: number
  }
  host: string
}

export type { WiremockMappings }
