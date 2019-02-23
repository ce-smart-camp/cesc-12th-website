<template>
  <v-container fluid >
      <v-layout row wrap align-center justify-center>
          <v-flex md12 style="text-align: center;">
              <h1>Timeline</h1>
          </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center>
          <v-flex md3 xs12 style="text-align: center;">
            <apply-icon style="width:8em;height:8em;"></apply-icon>
            <p>20 มีนาคม - 10 เมษายน</p>
            <p>เปิดรับสมัตร</p>
          </v-flex>
          <v-flex md2 xs12 style="text-align: center;">
            <apply-icon style="width:8em;height:8em;"></apply-icon>
            <p>10 - 20 เมษายน</p>
            <p>แก้ไขคำตอบเพิ่มเติม</p>
          </v-flex>
          <v-flex md2 xs12 style="text-align: center;">
            <announce-icon style="width:8em;height:8em;"></announce-icon>
            <p>30 เมษายน</p>
            <p>ประกาศ</p>
          </v-flex>
          <v-flex md2 xs12 style="text-align: center;">
            <confirm-icon style="width:8em;height:8em;"></confirm-icon>
            <p>1 - 3 พฤษภาคม</p>
            <p>ยืนยันสิทธิ์</p>
          </v-flex>
          <v-flex md3 xs12 style="text-align: center;">
            <camp-icon style="width:8em;height:8em;"></camp-icon>
            <p>31 พฤษภาคม-5 มิถุนายน</p>
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
        font-family: "Orbitron", sans-serif;
        font-size: 36px;
        margin-bottom: 10px;
    }
    p {
        font-family: "Kanit", sans-serif;
        font-size: 18px;
    }
</style>
