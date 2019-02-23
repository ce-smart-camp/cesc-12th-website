<template>
  <div>
  <v-speed-dial v-if="toggleSideMenu" fixed right bottom mode="out-in">
    <v-btn slot="activator" class="blue darken-2" dark fab hover v-model="fab">
      <v-icon>fas fa-bars</v-icon>
    </v-btn>

    <v-tooltip left value="true" disabled="true" content-class="blue">
      <v-btn slot="activator" fab dark small class="blue" href="#main-page" v-smooth-scroll>
        <v-icon>fas fa-home</v-icon>
      </v-btn>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;Home</span>
    </v-tooltip>

    <v-tooltip left value="true" disabled="true" content-class="blue">
      <v-btn slot="activator" fab dark small class="blue" href="#about-page" v-smooth-scroll>
        <v-icon>fas fa-info-circle</v-icon>
      </v-btn>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;About</span>
    </v-tooltip>

    <v-tooltip left value="true" disabled="true" content-class="blue">
      <v-btn slot="activator" fab dark small class="blue" href="#iot-page" v-smooth-scroll>
        <v-icon>fas fa-robot</v-icon>
      </v-btn>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IOT</span>
    </v-tooltip>  

    <v-tooltip left value="true" disabled="true" content-class="blue">
      <v-btn slot="activator" fab dark small class="blue" href="#gallery-page" v-smooth-scroll>
        <v-icon>fas fa-images</v-icon>
      </v-btn>
      <span>&nbsp;&nbsp;Gallery</span>
    </v-tooltip>

    <v-tooltip left value="true" disabled="true" content-class="blue text">
      <v-btn slot="activator" fab dark small class="blue" href="#FAQs-page" v-smooth-scroll>
        <v-icon>fas fa-question-circle</v-icon>
      </v-btn>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAQs</span>
    </v-tooltip>

    <v-tooltip left value="true" disabled="true" content-class="blue">
      <v-btn slot="activator" fab dark small class="blue" href="#contact-page" v-smooth-scroll>
        <v-icon>fas fa-map-marker-alt</v-icon>
      </v-btn>
      <span>Location</span>
    </v-tooltip>

    <v-tooltip left value="true" disabled="true" content-class="red">
      <v-btn slot="activator" fab dark small class="red" v-smooth-scroll @click.stop="dialog=true">
        <v-icon>fas fa-user-plus</v-icon>
      </v-btn>
      <span>&nbsp;Register</span>
    </v-tooltip>
  </v-speed-dial>
  <v-speed-dial v-else fixed right bottom mode="out-in">
    <v-btn slot="activator" class="blue darken-2" dark fab hover v-model="fab">
      <v-icon>fas fa-bars</v-icon>
    </v-btn>
  </v-speed-dial>

  <v-dialog v-model="dialog">
     <v-card>
        <v-card-title class="headline"><span class="dialog">ประกาศ</span></v-card-title>
        <v-card-text>
          <span class="dialog">รอกันหน่อยนะจ๊ะเด็กๆ ค่ายยังไม่เปิดรับสมัคร</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
  </div>
</template>

<script>

export default {
  name: "SideMenu",
  
  props:{
    parentRefs:Object
  },
  data() {
    return {
      toggleSideMenu: true,
      dialog:false
    };
  },
  methods: {
    handleScroll: function() {
      this.toggleSideMenu = false;
    },
    handleStill: function() {
      this.toggleSideMenu = true;
    }
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("mousedown", this.handleStill);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("mousedown", this.handleStill);
  }
};
</script>

<style scoped>
span {
  font-family: "Orbitron", sans-serif;
}
.dialog{
  font-family: "Kanit", sans-serif;
  color: red;
  font-size: 22px;
}
</style>

