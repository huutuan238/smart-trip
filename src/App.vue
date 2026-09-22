<script setup>
import AppHeader from './components/AppHeader.vue'
import ProgressStepper from './components/ProgressStepper.vue'
import VesselPanel from './components/VesselPanel.vue'
import CargoPanel from './components/CargoPanel.vue'
import RoutePanel from './components/RoutePanel.vue'
import SchedulePanel from './components/SchedulePanel.vue'
import PnlPanel from './components/PnlPanel.vue'
import SafetyPanel from './components/SafetyPanel.vue'
import ScenarioPanel from './components/ScenarioPanel.vue'
import FooterActionBar from './components/FooterActionBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import PickerModal from './components/PickerModal.vue'
</script>

<template>
  <AppHeader />

  <main class="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]">
    <div class="flex flex-col w-full">
      <ProgressStepper />

      <main class="w-full px-margin pb-space-xl">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <!-- LEFT COLUMN: Action Steps 1 to 4 -->
          <div class="lg:col-span-7 flex flex-col gap-space-md">
            <VesselPanel />
            <CargoPanel />
            <RoutePanel />
            <SchedulePanel />
          </div>

          <!-- RIGHT COLUMN: Step 5, 6, 7 Intelligence Engine -->
          <div class="lg:col-span-5 flex flex-col gap-space-md">
            <PnlPanel />
            <SafetyPanel />
            <ScenarioPanel />
          </div>
        </div>
      </main>

      <FooterActionBar />
    </div>
  </main>

  <SiteFooter />

  <PickerModal />
</template>
