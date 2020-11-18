<template>
  <div class="hero">
    <div>
      <h1 class="display-3">Hello World</h1>
      <p class="lead">{{ post }}</p>
      <v-layout>
        <v-data-table :headers="headers" :items="logs">
        </v-data-table>
      </v-layout>
    </div>
  </div>
</template>
<style>
  .hero {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 1.5rem;
  }
</style>
<script>
export default {
    async asyncData ({ $axios, params }) {
      const  post  = await $axios.$get(`http://localhost:3333/projects`)
      return { post }
    }
}
</script>