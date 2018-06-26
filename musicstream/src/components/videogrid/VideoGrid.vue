<template>
    <div>Videos go here.</div>
</template>

<script>
    import EventBus from '../../main.js';
    import vimeoService from '../../services/vimeo.service';
    
    export default {
        mounted() {
            EventBus.$on('search', query => {
                console.log('made it to VideoGrid');
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
            }
        }
    }

    
</script>