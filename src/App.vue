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
  <a-layout-footer
    :style="{ display: appState.xs ? 'block' : 'none', position: 'fixed', bottom: 0, zIndex: 1, width: '100%' }">
    <a-row style="display: flex; justify-content: space-between" class="mr-16 ml-16">
      <a-col>
        <span class="mdi mdi-home-outline"></span>
      </a-col>
      <a-col>
        <span class="mdi mdi-plus-circle-outline"></span>
      </a-col>
      <a-col>
        <span class="mdi mdi-image-outline"></span>
      </a-col>
      <a-col>
        <span class="mdi mdi-forum-outline"></span>
      </a-col>
      <a-col>
        <span class="mdi mdi-account-outline"></span>
      </a-col>
    </a-row>
  </a-layout-footer>
</template>

<style scoped>
footer {
  padding: 0 !important;
  font-size: 33px;
}
</style>
