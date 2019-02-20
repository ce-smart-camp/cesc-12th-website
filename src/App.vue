<template>
  <div>
    <side-menu/>
    <v-app id="main-page">
      <main-page/>
    </v-app>
    <v-app id="contact-page">
    <contact-page/>  
    </v-app>   
    <v-app id="iot-page">
      <iot-page/>
    </v-app>
    <v-app id="gallery-page">
      <gallery-page/>
    </v-app>
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu";
import MainPage from "./components/MainPage";
import contactPage from "./components/ContactPage";
import IotPage from './components/IotPage/IotPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
export default {
  name: "App",
  components: {
    MainPage,
    SideMenu,
    contactPage,
    IotPage,
    GalleryPage
  }
};
</script>

<style scoped>
</style>
