<template>
  <v-container id='main-page' bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-container>
        <v-flex xs12>
        <img src="../assets/logo.png"/>
        </v-flex>
        <Countdown deadline="May 23, 2019"></Countdown>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import Countdown from './Countdown.vue'

export default {
  name: 'MainPage',
  components: {
    Countdown
  }
}
</script>

<style scoped>
p {
  font-family: "orbitron", sans-serif;
  font-size: 32px;
}
</style>
