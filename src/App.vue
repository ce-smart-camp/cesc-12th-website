<template>
  <div>
    <side-menu/>
    <v-app id="main-page">
      <main-page/>
    </v-app>
    <v-app id="contact-page">
    <contact-page/>  
    </v-app>   
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu";
import MainPage from "./components/MainPage";
import contactPage from "./components/ContactPage";
export default {
  name: "App",
  components: {
    MainPage,
    SideMenu,
    contactPage
  }
};
</script>

<style scoped>
</style>
