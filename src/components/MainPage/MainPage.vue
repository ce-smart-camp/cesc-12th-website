<template>
  <v-container id='main-page' fill-height grid-list-md text-xs-center content-bg>
    <v-layout row wrap align-center justify-center>
      
        <v-flex lg4 md6 xs12>
        <v-img :src="require('../../assets/logo.png')" :lazy-src="require('../../assets/logo.png')" />
        </v-flex>
        <v-flex xs12>
        <Countdown deadline="May 23, 2019"></Countdown>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Countdown from './Countdown'

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
