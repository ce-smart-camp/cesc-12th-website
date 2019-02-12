<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-container>
        <img src="../assets/logo.png" width="450" height="450">
        <Countdown date="August 15, 2016"></Countdown>
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
