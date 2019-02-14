<template>
  <v-container fluid fill-height grid-list-md text-xs-center>
    <v-layout row wrap>
     <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-flex v-if="i==2"><google-map/></v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import googleMap from "./GoogleMap.vue";
export default {
  name: "contactPage",
  components: {
    googleMap
  }
};
</script>

<style scoped>
</style>


