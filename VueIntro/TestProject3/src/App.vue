<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button v-click="myFunc">Press this</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    myFunc() {
      console.log('hello');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
