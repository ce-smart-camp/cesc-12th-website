<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-container>
        <side-menu/>
        <img src="../assets/logo.svg" width="430" height="430">
        <Countdown passed_date="December 15, 2019"></Countdown>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import SideMenu from './SideMenu.vue'
import Countdown from './Countdown.vue'

export default {
  name: 'MainPage',
  components: {
    Countdown,
    SideMenu
  }
}
</script>

<style scoped>
p {
  font-family: "orbitron", sans-serif;
  font-size: 32px;
}
</style>
