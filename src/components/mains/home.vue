<template>
  <div class="home" data-rellax-speed="-6">
    <p class="text">Type in the code from the bot<i class="period">.</i></p>
    <button class="button use">Use Code</button>
  </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #1DB954;
  padding-bottom: 300px;;
  min-height: 100%;
  height: 100%;
}
.text {
  text-align: left;
  font-weight: 900;
  padding-top: 10%;
  padding-left: 10%;
  font-size: 40px;
  transition: letter-spacing 2s;
}
.period {
  font-style: normal;
  color: red;
}

.use {
  padding: 10px;
  margin-left: 10%;
  margin-top: 60px;
  font-weight: 900;
  position: relative;
  z-index: 1;
  overflow: hidden;
}


.use::after {
  content: "";
  position: absolute;
  width: 100%;
  background: green;
  height: 100%;
  z-index: -1;
  left: -100%;
  right: 100%;
  top: 0;
  bottom: 0;
  transition: transform 1s, height 1s, left 1s;
}

.use:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.text:hover {
  letter-spacing: 10px;
}
</style>