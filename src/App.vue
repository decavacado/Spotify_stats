<template>
  <div id="app">
    <navi></navi>
    <home></home>
    <foot></foot>
  </div>
</template>

<script>
import navi from './components/nav.vue'
import a from "./mixins/index.js"
import foot from "./components/footer.vue"
import home from "./components/mains/home.vue"

console.log(a)

export default {
  name: 'App',
  components: {
    navi,
    foot,
    home
  },
  mixins: [a]
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
