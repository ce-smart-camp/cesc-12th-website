<template>
  <v-container fluid>
      <v-layout row wrap align-center justify-center>
          <v-flex md6 xs12 style="text-align: center;">
             
                <v-img
                  :src="`https://picsum.photos/500/300?image=15`"
                  :lazy-src="`https://picsum.photos/10/6?image=15`"
                  
                  class="grey lighten-2"
                  height = "40vh"
                >
                  <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
          </v-flex>
          <v-flex md6 xs12 style="padding-left:20px;">
              <h1 align="center">About</h1>
              <p><span style="margin-left:2em;"></span>ค่าย CE SMART CAMP 11 จัดโดยคณะวิศวกรรมศาสตร์ <br /> ภาควิชาวิศวกรรมคอมพิวเตอร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง จัดขึ้นระหว่างวันที่ 29 พฤษภาคม – 3 มิถุนายน 2561 (ค่ายพักค้างคืน 6 วัน 5 คืน)</p>
              <p><span style="margin-left:2em;"></span>ภายในค่ายจะมีการจัดอบรมเชิงปฏิบัติการเพื่อเสริมสร้างความรู้ <br />ให้แก่ น้องๆนักเรียนในระดับชั้นมัธยมศึกษาตอนปลาย และแนะนำแนวทางในภาควิชาวิศวกรรมคอมพิวเตอร์ พร้อมกิจกรรมสนุกสนานจากพี่ๆ โดยจัดอบรมเป็น 2 ส่วนคือ Internet of Things(IoT) และ Micro Robot Development(Robot)</p>
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
  font-family: "Gotham-Black", sans-serif;
  font-size: 36px;
  margin-bottom: 10px;
}
p {
  font-family: "FC Active Regular", sans-serif;
  font-size: 18px;
}
</style>
