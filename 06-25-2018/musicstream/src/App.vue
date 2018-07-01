<template>
  <div id="app">
    <media-search />
    <media-grid />
  </div>
</template>

<script>
import MediaSearch from './components/search/MediaSearch.vue';
import MediaGrid from './components/media-grid/MediaGrid.vue';

export default {
  name: 'app',
  components: {
    MediaSearch,
    MediaGrid,
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
}
</style>
