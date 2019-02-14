<template>
  <GmapMap
    :center="{ lat: 13.72912977, lng: 100.77560306 }"
    :zoom="16"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GmapMarker
      :key="index"
      :position="{ lat: 13.72912977, lng: 100.77560306 }"
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


