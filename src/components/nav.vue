<template>
  <div class="Nav">
    <img class="log" src="../assets/spot.png">
    <p id="text_logo">STATS</p>
    <button class="button use-code" v-on:click="pop">Use Code</button>
  </div>
</template>

<script>
import mix from "../mixins/methods.js"

export default {
  name: 'navi',
  data() {
    return {

    }
  },
  mixins: [mix],
}
</script>

<style scoped lang="less">

@red: red;
@margin: 20px;
@weight: 500;

.Nav {
  display: flex;
  position: relative;
  background: #ffffff;
  .log {
    max-width: 150px;
    height: auto;
    width: auto;
    margin: @margin;
  }

  #text_logo {
    position: relative;
    top: 27px;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }

  .use-code {
    position: absolute;
    right: 0;
    margin: @margin;
    background-color: #1DB954;
    color: #191414;
    font-weight: @weight;
  }
}
</style>
