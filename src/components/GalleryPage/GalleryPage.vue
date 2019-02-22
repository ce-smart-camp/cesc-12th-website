<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex lg8 md10 xs12>

        <h1 class="header">Last Year</h1>

        <transition-group>
          <div class="image-display" v-for="item in pictures" :key="item.id">
            <v-img
              v-if="currentImage%pictures.length == +item.id"
              :src="item.src"
              :lazy-src="item.src"
              :aspect-ratio="1.833"
              :key="item.id"
              v-touch="{
                left:()=>swipe('left'),
                right:()=>swipe('right')
                }"
            ></v-img>
          </div>
        </transition-group>
      </v-flex>
    </v-layout>
    <v-layout hidden-sm-and-down row wrap lg3 md3>
      <tn-slider class="wrapper" :index="currentImage" :count="6">
        <tn-item v-for="(slider,i) in pictures" :key="i" @on-item-click="select(i)">
          <v-flex class="thumb-list">
            <v-img
              :lazy-src="slider.src"
              :src="slider.src"
              :height="`${ i == currentImage ? 150 : 128 }`"
              :width="`${ i == currentImage ? 275 : 234.62 }`"
              aspect-ratio="1.833"
            ></v-img>
          </v-flex>
        </tn-item>
      </tn-slider>
    </v-layout>
  </v-container>
</template>

<script>
import datas from "./mockdata.json";
import { TnSlider, TnItem } from "thumbnail-slider";

import "thumbnail-slider/dist/thumbnailSlider.css";
export default {
  name: "GalleryPage",
  data() {
    return {
      currentImage: Number,
      pictures: Array,
      delay: null
    };
  },
  mounted() {
    this.pictures = datas;
    this.currentImage = 0;
    setInterval(() => {
      this.currentImage = ++this.currentImage % this.pictures.length;
    }, 5000);
  },
  methods: {
    swipe(swipedir) {
      switch (swipedir) {
        case "left":
          if (this.currentImage % this.pictures.length != 0) {
            this.currentImage = --this.currentImage % this.pictures.length;
          }
          break;
        case "right":
          this.currentImage = ++this.currentImage % this.pictures.length;
          break;
        default:
          break;
      }
    },
    select(i) {
      this.currentImage = i;
    }
  },
  components: {
    "tn-slider": TnSlider,
    "tn-item": TnItem
  }
};
</script>

<style scoped>
.thumb-list {
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 8px;
  padding-bottom: 8px;
}
h1 {
  font-family: "Orbitron", sans-serif;
}
.header{
  padding: 10px;
  text-align: center;
}
</style>
