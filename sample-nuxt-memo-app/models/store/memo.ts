export type memo = string[]
export type article = {
  title: string
  content: string
  created: string
}
export type counter = number
export type page = string

export type state = {
  memo: article[]
  counter: counter
  page: page
}
