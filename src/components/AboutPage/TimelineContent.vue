<template>
  <v-container fluid >
      <v-layout row wrap align-center justify-center>
          <v-flex md12 style="text-align: center;">
              <h1>Timeline</h1>
          </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center>
          <v-flex md3 xs12 style="text-align: center;">
            <apply-icon style="width:10em;height:10em;"></apply-icon>
            <p>20 มีนาคม - 25 เมษายน</p>
            <p>รับสมัคร</p>
          </v-flex>
          <v-flex md3 xs12 style="text-align: center;">
            <announce-icon style="width:10em;height:10em;"></announce-icon>
            <p>30 เมษายน</p>
            <p>ประกาศผล</p>
          </v-flex>
          <v-flex md3 xs12 style="text-align: center;">
            <confirm-icon style="width:10em;height:10em;"></confirm-icon>
            <p>1 พฤษภาคม - 3 พฤษภาคม</p>
            <p>ยืนยันสิทธิ์</p>
          </v-flex>
          <v-flex md3 xs12 style="text-align: center;">
            <camp-icon style="width:10em;height:10em;"></camp-icon>
            <p>29 พฤษภาคม-3 มิถุนายน</p>
            <p>วันค่าย</p>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import applyIcon from '../../../src/assets/icons/icon_apply.svg'
import announceIcon from '../../../src/assets/icons/icon_announce.svg'
import confirmIcon from '../../../src/assets/icons/icon_confirm_2.svg'
import campIcon from '../../../src/assets/icons/icon_camp.svg'
export default {
  name: "TimelineContent",
  data: function() {
    
  },
  components:{
      applyIcon,
      announceIcon,
      confirmIcon,
      campIcon
  }
};
</script>

<style scoped>
    h1 {
        font-family: "Gotham-Black", sans-serif;
        font-size: 36px;
        margin-bottom: 10px;
    }
    p {
        font-family: "FC Active Regular", sans-serif;
        font-size: 18px;
    }
</style>
