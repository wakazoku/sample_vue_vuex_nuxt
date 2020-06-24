<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p>{{ $store.state.count.message }}</p>
    <hr />
    <div
      class="link"
      @click.exact="$store.dispatch('count/doIt')"
      @click.alt="$store.commit('count/count', 3)"
      @click.shift="$store.commit('count/reset')"
    >
      <a> clicked: {{ $store.state.count.counter }} </a>
    </div>
    <router-link to="/other">Go to Other</router-link>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class VuexPage extends Vue {
  title = 'Hello'
  message = 'this is message.'
}
</script>

<style>
.container {
  padding: 5px 10px;
}

h1 {
  padding-top: 5px;
  font-size: 60px;
}

p {
  padding-top: 5px;
  font-size: 20pt;
}
a {
  font-size: 16pt;
}

.link {
  background-color: #ddeeff;
  padding: 10px;
}

hr {
  margin: 10px 0px;
}
</style>
