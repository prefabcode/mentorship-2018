<template>
    <div class="container" >
      <div class="row" v-for="row in rowCount" v-bind:key="row">
        <div class="offset-1"></div>
        <div class="col-2" v-for="(mediaItem, jdx) in mediaItemsInRow(row)" v-bind:key="jdx">
          <media-item :video-url="mediaItem.uri" :video-title="mediaItem.name"></media-item>
        </div>
      </div>
    </div>
</template>

<script>
import MediaItem from '../media-item/MediaItem.vue';
import EventBus from '../../main';
import vimeoService from '../../services/vimeo.service';

export default {
  data() {
    return {
      itemsPerRow: 5,
      mediaItems: [],
    };
  },
  components: {
    MediaItem,
  },
  mounted() {
    EventBus.$on('search', (query) => {
      this.search(query);
    });
  },
  methods: {
    search(query) {
      vimeoService.searchVimeo(query).then((response) => {
        this.mediaItems = response.data.data;
        console.log(response);
      }, (err) => {
        console.log(err);
      });
    },
    mediaItemsInRow(row) {
      return this.mediaItems.slice((row - 1) * this.itemsPerRow, row * this.itemsPerRow);
    },
  },
  computed: {
    rowCount() {
      return Math.ceil(this.mediaItems.length / this.itemsPerRow);
    },
  },
};


</script>
