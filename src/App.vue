<template>
  <div>
    <v-app id="app">
      <side-menu/>
      <main-page/>
    </v-app>
    <v-app id="contact">
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
.app {
  height: 100vh;
}
</style>
