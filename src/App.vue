<template>
  <div>
    <v-app id="app">
      <side-menu/>
      <main-page/>
    </v-app>
    <v-app id="FAQs">
      <f-a-qs-page/>
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
import FAQsPage from "./components/FAQsPage";
export default {
  name: "App",
  components: {
    MainPage,
    SideMenu,
    FAQsPage,
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
