<template>
  <div>
      <h1 class="blue">Composant de test</h1>
          <b-avatar :src="require('../assets/xavier.png')" size="6rem"></b-avatar>
      <h2 v-for="post in posts" v-bind:key="post.id">{{ post.title }}</h2>
      <button class="btn btn-outline-secondary">Boo</button>
      <button class="btn btn-primary"></button>
      <input type="text" v-model="text">
      J'aime manger du : {{text}}
      <div>
        <b-spinner type="grow" label="Loading..."></b-spinner>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      text: ''
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  mounted () {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style scoped>
.blue {
    color: blue;
}
</style>
