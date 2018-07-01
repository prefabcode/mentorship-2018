<template>
    <div>Videos go here.</div>
</template>

<script>
import EventBus from '../../main';
import vimeoService from '../../services/vimeo.service';

export default {
  mounted() {
    EventBus.$on('search', (query) => {
      this.search(query);
    });
  },
  methods: {
    search(query) {
      vimeoService.searchVimeo(query).then((response) => {
        console.log(response);
      }, (err) => {
        console.log(err);
      });
    },
  },
};


</script>
