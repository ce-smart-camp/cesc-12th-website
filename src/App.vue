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
    <v-app id="gallery-page">
      <gallery-page/>
    </v-app>
    <v-app id="FAQs">
      <newFAQs/>
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
import IotPage from "./components/IotPage/IotPage";
import FAQsPage from "./components/FAQsPage";
import AboutPage from './components/AboutPage/AboutPage';
import Footer from "./components/Footer";
import GalleryPage from './components/GalleryPage/GalleryPage';
import newFAQs from "./components/newFAQsPage";
export default {
  name: "App",
  components: {
    MainPage,
    SideMenu,
    newFAQs,
    contactPage,
    Footer,
    IotPage,
    AboutPage,
    GalleryPage
  }
};
</script>

<style scoped>
</style>
