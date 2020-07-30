<template>
  <section>
    <h1>Memo</h1>
    <table>
      <tr>
        <th>Title</th>
        <td>
          <input
            type="text"
            name="title"
            size="40"
            :title="title"
            @focus="isSet"
          />
          <button @click="find">find</button>
        </td>
      </tr>
      <tr>
        <th>Memo</th>
        <td>
          <textarea
            name="content"
            cols="50"
            rows="5"
            :content="content"
          ></textarea>
        </td>
      </tr>
      <tr>
        <th></th>
        <td>
          <button @click="insert">save</button>
          <transition name="del">
            <button v-if="isSet != false" @click="remove">delete</button>
          </transition>
        </td>
      </tr>
    </table>
    <hr />
    <ul>
      <li v-for="item in pageItems" :key="item.id">
        <span @click="select(item)">{{ item.title }} {{ item.created }}</span>
      </li>
    </ul>
    <hr />
    <div>
      <span @click="prev">&lt; prev</span>
      <span @click="next">next &gt;</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { memo, article } from '../models/store/memo'

@Component
export default class Memo extends Vue {
  title = ''
  content = ''
  numPerPage = 7
  isFind = false
  isSet = false

  get memo() {
    return this.$store.state.memo.memo
  }

  get pageItems() {
    if (this.isFind) {
      const array: article[] = []
      const data: memo = this.$store.state.memo.memo
      data.forEach((element: article) => {
        if (element.title.toLowerCase().indexOf(this.title.toLowerCase()) > 0) {
          array.push(element)
        }
        return array
      })
    } else if (this.isSet !== false) {
      return [this.isSet]
    } else {
      return this.$store.state.memo.memo.slice(
        this.numPerPage * this.$store.state.memo.page,
        this.numPerPage * (this.$store.state.memo.page + 1)
      )
    }
  }

  get page() {
    return this.$store.state.memo.page
  }

  set page(propPage: number) {
    let page =
      propPage > (this.$store.state.memo.memo.length - 1) / this.numPerPage
        ? Math.ceil(this.$store.state.memo.memo.length - 1) / this.numPerPage -
          1
        : propPage
    page = page < 0 ? 0 : page
    this.$store.commit('memo.SET_PAGE', page)
  }
}
</script>

<style lang="scss"></style>
