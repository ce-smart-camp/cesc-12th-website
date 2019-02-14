<template>
  <GmapMap
    :center="{ lat: 10, lng: 10 }"
    :zoom="7"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GmapMarker
      :key="index"
      :position="{ lat: 10, lng: 10 }"
      :clickable="true"
      :draggable="true"
      @click="center = m.position;"
    />
  </GmapMap>
</template>

<script>
export default {
  name: "googleMap"
};
</script>

<style scoped>
</style>


