<template>
  <v-speed-dial v-if="toggleSideMenu" fixed right bottom mode="out-in">
    <v-btn slot="activator" class="blue darken-2" dark fab hover v-model="fab">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-tooltip left value="true" disabled="true" content-class="blue">
      <v-btn slot="activator" fab dark small class="blue">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;Home</span>
    </v-tooltip>

    <v-tooltip left value="true" disabled="true" content-class="blue">
      <v-btn slot="activator" fab dark small class="blue">
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;About</span>
    </v-tooltip>

    <v-tooltip left value="true" disabled="true" content-class="blue">
      <v-btn slot="activator" fab dark small class="blue">
        <v-icon>mdi-robot</v-icon>
      </v-btn>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IOT</span>
    </v-tooltip>

    <v-tooltip left value="true" disabled="true" content-class="blue text">
      <v-btn slot="activator" fab dark small class="blue">
        <v-icon>mdi-chat-alert</v-icon>
      </v-btn>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAQs</span>
    </v-tooltip>

    <v-tooltip left value="true" disabled="true" content-class="blue">
      <v-btn slot="activator" fab dark small class="blue">
        <v-icon>mdi-image-multiple</v-icon>
      </v-btn>
      <span>&nbsp;&nbsp;Gallery</span>
    </v-tooltip>

    <v-tooltip left value="true" disabled="true" content-class="blue">
      <v-btn slot="activator" fab dark small class="blue">
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      <span>Location</span>
    </v-tooltip>

    <v-tooltip left value="true" disabled="true" content-class="red">
      <v-btn slot="activator" fab dark small class="red">
        <v-icon>mdi-script-text</v-icon>
      </v-btn>
      <span>&nbsp;Register</span>
    </v-tooltip>
  </v-speed-dial>
  <v-speed-dial v-else fixed right bottom mode="out-in">
    <v-btn slot="activator" class="blue darken-2" dark fab hover v-model="fab">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      toggleSideMenu: true
    };
  },
  methods: {
    handleScroll: function(event) {
      this.toggleSideMenu = false;
    },
    handleStill: function(event) {
      this.toggleSideMenu = true;
    }
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("mousedown",this.handleStill);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("mousedown",this.handleStill);
  }
};
</script>

<style scoped>
span {
  font-family: "Orbitron", sans-serif;
}
</style>

