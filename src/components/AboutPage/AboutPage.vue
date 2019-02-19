<template>
  <v-container content-bg>
    <about-content />
    <timeline-content />
  </v-container>
</template>

<script>
import AboutContent from "./AboutContent";
import TimelineContent from "./TimelineContent";
export default {
  name: "AboutPage",
  data: function() {
    
  },
  components: {
    AboutContent,
    TimelineContent,
  }
};
</script>

<style scoped>

</style>
