<script setup lang="ts">
import MapComponent from '@/components/MapComponent.vue'
</script>

<template>
  <RouterView />
  <MapComponent />
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
