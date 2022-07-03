<script setup>
import { onMounted } from 'vue'
import { useAppStateStore } from './stores/appStateStore'

const appState = useAppStateStore()

function onResize() {
  let ww = window.innerWidth;
  appState.ww = ww;
  if (ww < 767) {
    appState.xs = true
  } else if ((ww > 767) && (ww < 960)) {
    appState.unsetAll()
    appState.sm = true
  } else if ((ww > 960) && (ww < 1264)) {
    appState.unsetAll()
    appState.md = true
  }
}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
</script>

<template>
  <router-view />
</template>

<style>
</style>
