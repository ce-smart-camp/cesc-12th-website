<template>
  <v-container>
    <h1>Map</h1>

    <GmapMap
      :center="{ lat: 13.72912977, lng: 100.77560306 }"
      :zoom="16"
      map-type-id="terrain"
      style="max-width:100%;height:400px;"
    >
      <GmapMarker
        :key="index"
        :position="{ lat: 13.72912977, lng: 100.77560306 }"
        :clickable="true"
        :draggable="true"
        @click="center = m.position;"
      />
    </GmapMap>
  </v-container>
</template>

<script>
export default {
  name: "googleMap"
};
</script>

<style scoped>
h1 {
  font-family: "Gotham-Black", sans-serif;
  font-size: 36px;
  margin-bottom: 10px;
}
</style>


