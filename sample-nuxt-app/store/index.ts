import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module
export default class Index extends VuexModule {
  message: string = 'count number'
  counter: number = 0

  @Mutation
  count(add: number): void {
    this.counter += add
  }

  @Mutation
  say(msg: string) {
    this.message = msg
  }

  @Mutation
  reset(): void {
    this.message = 'reset value'
    this.counter = 0
  }

  @Action
  doIt(): void {
    const number: number = Math.floor(Math.random() * 10)
    this.context.commit('count', number)
    this.context.commit('say', `say ${number} !`)
  }
}
