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

export default {
  props: {
    videoUrl: String,
    videoTitle: String,
  },
};
</script>
