<template>
  <div>
    <side-menu/>
    <v-app id="main-page">
      <main-page/>
    </v-app>
      <Footer/>
      <contact-page/>
    </v-app>
    <v-app id="contact">
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu";
import MainPage from "./components/MainPage";
import contactPage from "./components/ContactPage";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    MainPage,
    SideMenu,
    contactPage,
    Footer
  }
};
</script>

<style scoped>
</style>
