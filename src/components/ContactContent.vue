<template>
  <v-container>
    <h1>Contact us</h1>
    <p>{{ lorem }}</p>
    <v-layout pt-4 align-center justify-space-around>
      <v-icon large>fab fa-line</v-icon>
      <v-icon large>fab fa-facebook</v-icon>
      <v-icon large>fab fa-instagram</v-icon>
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
  font-family: "Gotham-Black", sans-serif;
  font-size: 36px;
  margin-bottom: 10px;
}
p {
  font-family: "FC Active Regular", sans-serif;
  font-size: 22px;
}
</style>


