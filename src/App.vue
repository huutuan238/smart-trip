<script setup>
import AppHeader from './components/AppHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import PickerModal from './components/PickerModal.vue'
</script>

<template>
  <AppHeader />

  <main class="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]">
    <RouterView />
  </main>

  <SiteFooter />

  <PickerModal />
</template>
