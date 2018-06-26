<template>
  <div id="app">
    <media-search />
    <video-grid />
  </div>
</template>

<script>
import MediaSearch from './components/search/MediaSearch';
import VideoGrid from './components/videogrid/VideoGrid';

export default {
  name: 'app',
  components: {
    MediaSearch,
    VideoGrid,
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
