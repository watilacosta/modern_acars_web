<template>
  <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" class="map">
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'

const center = ref([-55, -15])
const projection = ref('EPSG:4326')
const zoom = ref(4)
const rotation = ref(0)

const format = inject('ol-format')
const geoJson = new format.GeoJSON()
</script>

<style scoped>
.map {
  width: 100%;
  height: 700px;
}
</style>
