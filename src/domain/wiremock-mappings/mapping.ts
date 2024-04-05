type Mapping = {
  id: string
  request: {
    method: string
    url: string
    urlPathPattern: string
    headers: Record<string, string>
    bodyPatterns: Array<{
      equalToJson: string
      matchesJsonPath:
        | {
            expression: string
            equalToJson: string
            equalTo: string
          }
        | string
      matches: string
    }>
    queryParameters: Record<string, string>
  }
  response: {
    status: number
    jsonBody: string
    headers: Record<string, string>
  }
  scenarioName: string
  uuid: string
}

export { Mapping }
