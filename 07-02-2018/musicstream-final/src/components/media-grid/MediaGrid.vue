<template>
    <media-item v-if="mediaItem" :video-url="mediaItem.uri" :video-title="mediaItem.name"></media-item>
</template>

<script>
import MediaItem from '../media-item/MediaItem';
import EventBus from '../../main';
import vimeoService from '../../services/vimeo.service';

export default {
  data() {
    return {
      mediaItem: {},
    };
  },
  components: {
    MediaItem
  },
  mounted() {
    EventBus.$on('search', (query) => {
      this.search(query);
    });
  },
  methods: {
    search(query) {
      vimeoService.searchVimeo(query).then((response) => {
        this.mediaItem = response.data.data[0];
        console.log(response);
      }, (err) => {
        console.log(err);
      });
    },
  },
};


</script>
