<template>
  <v-container id="main-page" fill-height grid-list-md text-xs-center content-bg>
    <v-layout row wrap align-center justify-center>
      <v-flex lg4 md6 xs12>
        <v-img
          :src="require('../../assets/logo.png')"
          :lazy-src="require('../../assets/logo.png')"
        />
      </v-flex>
      <v-flex xs12>
        <Countdown class="clock" deadline="April 11, 2019"></Countdown>
      </v-flex>
      <v-btn color="success" round @click.stop="announce=true">
        <v-icon left dark>fas fa-bullhorn</v-icon>
        <span>ANNOUNCE</span>
      </v-btn>
      <a href="https://reg.cesc.kmi.tl/">
        <v-btn round color="error" dark >
          <v-icon left dark>fas fa-pencil-alt</v-icon>
          <span>REGISTER</span>
        </v-btn>
      </a>
    </v-layout>

    <v-dialog v-model="announce" :max-width="600">
      <v-card>
        <v-card-title>
          <v-button @click.stop="announce=false">
            <v-icon>fas fa-window-close</v-icon>
          </v-button>
        </v-card-title>
        <v-card-media>
          <v-img
            :src="require('../../assets/poster.png')"
            :lazy-src="require('../../assets/poster.png')"
          ></v-img>
        </v-card-media>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Countdown from "./Countdown";

export default {
  name: "MainPage",
  data() {
    return {
      dialog: false,
      announce: false
    };
  },
  components: {
    Countdown
  }
};
</script>

<style scoped>
p {
  font-family: "orbitron", sans-serif;
  font-size: 32px;
}
span {
  font-family: "orbitron", sans-serif;
  font-size: 22px;
}
.dialog {
  font-family: "Kanit", sans-serif;
  font-size: 22px;
  color: red;
}
.clock {
  z-index: -1;
}
</style>
