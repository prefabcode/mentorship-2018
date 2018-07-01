<template>
    <div class="container" >
      <div class="row" v-for="idx in rowCount" v-bind:key="idx">
        <div class="offset-1"></div>
        <div class="col-2" v-for="(mediaItem, jdx) in itemCountInRow(idx)" v-bind:key="jdx">
          <media-item :video-url="mediaItem.uri" :video-title="mediaItem.name"></media-item>
        </div>
      </div>
    </div>
</template>

<script>
import MediaItem from '../media-item/MediaItem';
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
        this.mediaItems = response.data.data;
        console.log(response);
      }, (err) => {
        console.log(err);
      });
    },
    itemCountInRow:function(index){
     return this.mediaItems.slice((index - 1) * this.itemsPerRow, index * this.itemsPerRow)
    }
  },
  computed: {
    rowCount() {
      return Math.ceil(this.mediaItems.length / this.itemsPerRow)
    }
  }
};


</script>
