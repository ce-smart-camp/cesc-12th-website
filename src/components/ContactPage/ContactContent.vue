<template>
  <v-container>
    <h1>Contact us</h1>
    <p>{{ lorem }}</p>
    <v-layout pt-4 align-center justify-space-around>
      <v-btn flat>
        <v-icon large>fab fa-line</v-icon>
      </v-btn>
      <v-btn flat href="https://www.facebook.com/cesckmitl/" target="_blank">
        <v-icon large>fab fa-facebook</v-icon>
      </v-btn>
      <v-btn flat>
        <v-icon large>fab fa-instagram</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "contactContent",
  data: () => ({
    lorem: `อาคารปฏิบัติการรวม คณะวิศวกรรมศาสตร์ 2 (ECC) ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เลขที่ 1 ซอยฉลองกรุง 1 ถนนฉลองกรุง เขตลาดกระบัง กรุงเทพฯ 10520`
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
  font-size: 22px;
}
</style>


