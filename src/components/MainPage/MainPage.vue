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
        <Countdown deadline="March 20, 2019"></Countdown>
      </v-flex>
      <v-btn
        color="success"
        round
      >
      <v-icon left dark>fas fa-bullhorn</v-icon>
      <span>ANNOUNCE</span>
      </v-btn>
      <v-btn round color="error" dark  @click.stop="dialog=true">
        <v-icon left dark>fas fa-pencil-alt</v-icon>
        <span>REGISTER</span>
      </v-btn>
    </v-layout>

  <v-dialog v-model="dialog">
     <v-card>
        <v-card-title class="headline"><span class="dialog">ประกาศ</span></v-card-title>
        <v-card-text>
          <span class="dialog">รอกันหน่อยนะจ๊ะเด็กๆ ค่ายยังไม่เปิดรับสมัคร</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>

  </v-container>
</template>

<script>
import Countdown from "./Countdown";

export default {
  name: "MainPage",
  data(){
    return {
      dialog:false
    }
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
.dialog{
  font-family: "Kanit", sans-serif;
  font-size:22px;
  color: red;
}
</style>
