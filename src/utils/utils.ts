const parseStringToJson = (stringBody: string): string => {
  const regex = /\$\.[a-zA-Z.]+[0-9]+/g
  const matches = stringBody.match(regex)

  if (!matches) {
    return null
  }

  const result = {}

  matches.forEach(match => {
    const [key, value] = match.split(/\$(\.[a-zA-Z.]+)([0-9]+)/).slice(1)
    let newKey = key.slice(1)
    if (key.slice(1).includes('.')) {
      newKey = key.slice(1).split('.')[1]
    }
    result[newKey] = value
  })
  return JSON.stringify(result)
}

const mapHeaders = (headers: any) =>
  Object.entries(headers).map(([key, value]) => ({
    key,
    value: Object.values(value).join('')
  }))

const mapBodyPatterns = (bodyPatterns: any) =>
  bodyPatterns
    .map(({ matches, equalToJson, matchesJsonPath }: any) => {
      switch (true) {
        case Boolean(matches):
          return matches
        case Boolean(equalToJson):
          return equalToJson
        case Boolean(matchesJsonPath):
          return Object.values(matchesJsonPath).join('')
        default:
          return ''
      }
    })
    .join('')
    .replace('${', '{')

const mapQueryParameters = (queryParameters: any) =>
  Object.entries(queryParameters).map(([key, value]) => ({
    key,
    value: Object.values(value).join('')
  }))

export { mapBodyPatterns, mapHeaders, mapQueryParameters, parseStringToJson }
