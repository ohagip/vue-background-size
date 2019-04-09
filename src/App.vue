<template>
  <div id="app">
    <img class="img" src="./assets/img/img.jpg" width="1980" height="1485" v-background-size="type">
    <button class="btn" @click="onClickToggleBtn">toggle</button>
    <!-- test -->
    <!--<img class="img" src="./assets/img/img.jpg" width="1980" height="1485" v-background-size="type" v-for="l in list">-->
    <!--<button class="btn" style="top: 150px;" @click="onClickAdd">add</button>-->
    <!--<button class="btn" style="top: 250px;" @click="onClickRemove">remove</button>-->
  </div>
</template>

<script>

export default {
  name: 'app',

  data() {
    return {
      // list: [''], // test
      type: 'cover' // or `contain`
    }
  },

  methods: {
    onClickToggleBtn() {
      this.type = (this.type === 'cover')  ? 'contain' : 'cover';
    },

    // test
    onClickAdd() { this.list.push(''); },
    onClickRemove() { this.list.shift(); }
  }
}
</script>

<style>
body {
  margin: 0;
}
  
#app {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #b8c5cc;
}

.img {
  position: absolute;
  z-index: 1;
}

.btn {
  position: absolute;
  z-index: 10;
  left: 50px;
  top: 50px;
  width: 80px;
  height: 80px;
  font-size: 16px;
  line-height: 60px;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  transition: all .2s ease;
}

.btn:hover {
  background-color: #333;
}
</style>
