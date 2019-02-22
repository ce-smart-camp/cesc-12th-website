<template>
  <v-container fluid fill-height grid-list-xd content-bg>
    <v-layout justify-center row wrap fill-height pt-5>
      <v-flex  v-for="i in 2" :key="`6${i}`" xs12 md5>
        <contact-content v-if="i==1"/>
        <google-map v-if="i==2"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import googleMap from "./GoogleMap.vue";
import contactContent from "./ContactContent.vue";
export default {
  name: "contactPage",
  components: {
    googleMap,
    contactContent
  }
};
</script>

<style scoped>
</style>


