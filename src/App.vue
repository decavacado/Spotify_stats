<template>
  <div id="app" v-rellax="rellax">
    <navi v-rellax="rellax"></navi>
    <home v-rellax="{speed: 3}"></home>
    <foot></foot>
  </div>
</template>

<script>
import navi from './components/nav.vue'
import a from "./mixins/index.js"
import foot from "./components/footer.vue"
import home from "./components/mains/home.vue"

export default {
  name: 'App',
  components: {
    navi,
    foot,
    home
  },
  mixins: [a],
  mounted: function() {
    document.addEventListener("scroll", () => {
      console.log(window.scrollY)
      if(window.scrollY > 360) {
        let app = document.getElementById("app")
        app.style.paddingLeft = "0px"
        app.style.paddingRight = "0px"
      }else {
        var ratio = window.devicePixelRatio || 1;
        var w = screen.width * ratio;

        console.log(w)
        if(w <= 1080) {
          let app = document.getElementById("app")
          app.style.paddingLeft = "5px"
          app.style.paddingRight = "5px"
        }else if(w <= 1242) {
          let app = document.getElementById("app")
          app.style.paddingLeft = "20px"
          app.style.paddingRight = "20px"
        } else {
          let app = document.getElementById("app")
          app.style.paddingLeft = "60px"
          app.style.paddingRight = "60px"
        }
      }
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-attachment: fixed;
  padding-left: 60px;
  padding-right: 60px;
  transition: padding 0.6s;
  background-color: #191414;
}

body {
  margin: 0;
  height: 100%;
}

html {
  height: 100%;
  background-attachment: fixed;
}

@media screen and (max-width: 414px) {
  #app {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media screen and (max-width: 360px) {
  #app {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
