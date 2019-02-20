<template>
  <div>
    <side-menu/>
    <v-app id="main-pages">
      <main-page/>
    </v-app>
    <v-app id="about-page">
      <about-page/>
    </v-app>
    <v-app id="iot-page">
      <iot-page/>
    </v-app>
    <v-app id="FAQs-page">
      <f-a-qs-page/>
    </v-app>
    <v-app id="contact-page">
      <contact-page/>
    <Footer/> 
    </v-app>
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu";
import MainPage from "./components/MainPage";
import contactPage from "./components/ContactPage";
import IotPage from './components/IotPage/IotPage';
import AboutPage from './components/AboutPage/AboutPage';
import FAQsPage from "./components/FAQsPage";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    MainPage,
    SideMenu,
    FAQsPage,
    contactPage,
    Footer,
    IotPage,
    AboutPage,
  }
};
</script>

<style scoped>
</style>
