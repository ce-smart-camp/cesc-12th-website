<template>
  <v-container fluid fill-height grid-list-xd>
    <v-layout row justify-center fill-height wrap pt-5>
      <v-flex v-for="i in 2" :key="`6${i}`" xs12 md5>
        <contac-content v-if="i==1"/>
        <google-map v-if="i==2"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import googleMap from "./GoogleMap.vue";
import contacContent from "./ContactContent.vue";
export default {
  name: "contactPage",
  components: {
    googleMap,
    contacContent
  }
};
</script>

<style scoped>
</style>


