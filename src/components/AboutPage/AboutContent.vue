<template>
  <v-container fluid>
      <v-layout row wrap align-center justify-center>
          <v-flex md12 xs12 style="padding-left:20px;">
              <h1 align="center">About</h1>
              <p><span style="margin-left:2em;"></span>ค่าย CE SMART CAMP 11 จัดโดยคณะวิศวกรรมศาสตร์ ภาควิชาวิศวกรรมคอมพิวเตอร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง จัดขึ้นระหว่างวันที่ 31 พฤษภาคม-5 มิถุนายน 2561 (ค่ายพักค้างคืน 6 วัน 5 คืน)</p>
              <p><span style="margin-left:2em;"></span>ภายในค่ายจะมีการจัดอบรมเชิงปฏิบัติการเพื่อเสริมสร้างความรู้ ให้แก่น้องๆนักเรียนในระดับชั้นมัธยมศึกษาตอนปลาย และแนะนำแนวทางในภาควิชาวิศวกรรมคอมพิวเตอร์ พร้อมกิจกรรมสนุกสนานจากพี่ๆ โดยจัดอบรมเป็น 2 ส่วนคือ Internet of Things(IoT) และ Micro Robot Development(Robot)</p>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "AboutContent",
  data: () => ({
  })
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
