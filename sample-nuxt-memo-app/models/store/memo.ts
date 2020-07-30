export type memo = article[]
export type article = {
  id: number
  title: string
  content: string
  created: string
}
export type counter = number
export type page = number

export type state = {
  memo: memo
  counter: counter
  page: page
}
