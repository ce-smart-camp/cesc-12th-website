<template>
  <div>
    <v-app id="app">
      <side-menu/>
      <main-page/>
    </v-app>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu'
import MainPage from './components/MainPage'

export default {
  name: 'App',
  components: {
    MainPage,
    SideMenu
  }
}
</script>

<style scoped>
.app{
  height: 100vh;
}
</style>
