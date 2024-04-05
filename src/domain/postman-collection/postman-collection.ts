type PostmanCollection = {
  info: {
    name: string
    schema: string
  }
  item: Array<{
    name: string
    request: {
      method: string
      header: Array<{
        key: string
        value: string
      }>
      body: {
        mode: string
        raw: string
      }
      url: {
        raw: string
        protocol: string
        host: string[]
        query: Array<{
          key: string
          value: string
        }>
      }
    }
  }>
}

export { PostmanCollection }
