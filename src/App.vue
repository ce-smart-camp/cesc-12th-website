<template>
  <div>
    <v-app id="app">
      <side-menu/>
      <main-page/>
    </v-app>
    <v-app id="FAQs">
      <newFAQs/>
    </v-app>
    <v-app id="contact">
      <contact-page/>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu";
import MainPage from "./components/MainPage";
import contactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import newFAQs from "./components/newFAQsPage";
export default {
  name: "App",
  components: {
    MainPage,
    SideMenu,
    newFAQs,
    contactPage,
    Footer
  }
};
</script>

<style scoped>
.app {
  height: 100vh;
}
</style>
