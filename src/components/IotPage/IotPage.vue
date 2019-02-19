<template>
  <v-container fluid grid-list-lg content-bg>
    <h1 class="header">IoT : Internet of "Things"</h1>
    <v-layout row wrap data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">
      <v-flex
        v-for="items in informations"
        :key="items.src"
        align-center
        justify-center
        d-flex
        xs12
        sm6
        md4
      >
        <v-card class="info-card-box">
          <v-img :lazy-src="items.src" :src="items.src" aspect-ratio="1.33">
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
          <v-divider light/>
          <v-card-text>{{items.description}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import info from "./fact.json";
export default {
  name: "IoTFact",
  data: function() {
    return { informations: Array };
  },
  mounted: function() {
    this.informations = info;
  }
};
</script>

<style scoped>
h1 {
  font-family: "Orbitron", sans-serif;
}
.info-card-box {
  border-radius: 10px;
  margin: 20px;
}
.header{
  padding: 30px;
  text-align: center;
}
</style>
