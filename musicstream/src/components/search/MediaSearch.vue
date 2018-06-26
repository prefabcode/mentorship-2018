<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand ml-sm-3" href="#">MusicStream</a>
            <input class="form-control mr-sm-2 col-4 offset-3"
                type="search"
                placeholder="Search for music or a video"
                aria-label="Search"
                v-model="searchQuery">
            <button class="btn btn-outline-success my-2 my-sm-0" v-on:click="search">Search</button>
    </nav>
</template>

<script>
import EventBus from '../../main.js';

export default {
    data() {
        return {
           searchQuery: '', 
        }
    },
    methods: {
        search() {
            console.log('hit');
            EventBus.$emit('search', this.searchQuery);
        }
    }
};

</script>

