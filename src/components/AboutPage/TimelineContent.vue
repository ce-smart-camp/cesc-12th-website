<template>
  <v-container fluid >
      <v-layout row wrap align-center justify-center>
          <v-flex md12 style="text-align: center;">
              <h1>Timeline</h1>
          </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center>
          <v-flex md3 xs12 style="text-align: center;">
            <img src="../../../src/assets/icons/icon1.png" style="width:9em;height:9em;"/>
            <p>20 มีนาคม - 10 เมษายน</p>
            <p>เปิดรับสมัตร</p>
          </v-flex>
          <v-flex md2 xs12 style="text-align: center;">
             <img src="../../../src/assets/icons/icon1.png" style="width:9em;height:9em;"/>
            <p>10 - 20 เมษายน</p>
            <p>แก้ไขคำตอบเพิ่มเติม</p>
          </v-flex>
          <v-flex md2 xs12 style="text-align: center;">
            <img src="../../../src/assets/icons/icon2.png" style="width:9em;height:9em;"/>
            <p>30 เมษายน</p>
            <p>ประกาศ</p>
          </v-flex>
          <v-flex md2 xs12 style="text-align: center;">
            <img src="../../../src/assets/icons/icon3.png" style="width:9em;height:9em;"/>
            <p>1 - 3 พฤษภาคม</p>
            <p>ยืนยันสิทธิ์</p>
          </v-flex>
          <v-flex md3 xs12 style="text-align: center;">
             <img src="../../../src/assets/icons/icon4.png" style="width:9em;height:9em;"/>
            <p>31 พฤษภาคม-5 มิถุนายน</p>
            <p>วันค่าย</p>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "TimelineContent",
  data: function() {
    
  },
  components:{
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
