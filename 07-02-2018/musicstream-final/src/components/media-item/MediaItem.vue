<template>
    <div>
        <b-card
            :title="videoTitle">
            <b-card-body>
                {{videoUrl}}
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
/*
    What props does this component need? 
    videoURL and VideoTitle
*/
export default {    
    props: {
        videoUrl: String,
        videoTitle: String,
    },
};
</script>
