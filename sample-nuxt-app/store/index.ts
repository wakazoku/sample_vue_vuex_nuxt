import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module
export default class Index extends VuexModule {
  message = 'count number'
  counter = 0

  @Mutation
  count(obj: { message: string; add: number }): void {
    this.message = obj.message
    this.counter += obj.add
  }

  @Mutation
  reset(): void {
    this.message = 'reset value'
    this.counter = 0
  }
}
