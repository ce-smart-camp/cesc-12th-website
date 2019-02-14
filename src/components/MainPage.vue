<template>
  <v-container id='main-page' bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-container>
        <img src="../assets/logo.png" width="500" height="500" />
        <Countdown passed_date="December 15, 2019"></Countdown>
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
.main-page{
  height: 100%;
}
</style>
