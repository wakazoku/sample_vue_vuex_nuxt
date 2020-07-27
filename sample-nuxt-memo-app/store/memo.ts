import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { memo, counter, article, page, state } from '../models/store/memo'

@Module
export default class Memo extends VuexModule {
  memo: memo = []
  counter: counter = 0

  @Mutation
  INSERT(state: state, article: article) {
    const date = new Date()
    const format = `${date.getFullYear()} - ${
      date.getMonth() + 1
    } - ${date.getDate()} ${date.getHours()} : ${date.getMinutes()}`
    state.memo.unshift({
      title: article.title,
      content: article.content,
      created: format,
    })
  }

  @Mutation
  SET_PAGE(state: state, page: page): void {
    state.page = page
  }

  @Mutation
  REMOVE(state: state, article: article): void {
    for (let i = 0; i < state.memo.length; i++) {
      const ob = state.memo[i]
      if (
        ob.title === article.title &&
        ob.content === article.content &&
        ob.created === article.created
      ) {
        alert(`remove it! -- ${ob.title}`)
        state.memo.splice(i, 1)
        return
      }
    }
  }

  // @Mutation
  // reset(state: state): void {
  //   state.counter = 0
  //   state.message = 'reset now .'
  // }
}
