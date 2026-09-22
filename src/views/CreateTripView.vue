<script setup>
import ProgressStepper from '../components/ProgressStepper.vue'
import VesselPanel from '../components/VesselPanel.vue'
import CargoPanel from '../components/CargoPanel.vue'
import RoutePanel from '../components/RoutePanel.vue'
import SchedulePanel from '../components/SchedulePanel.vue'
import PnlPanel from '../components/PnlPanel.vue'
import SafetyPanel from '../components/SafetyPanel.vue'
import ScenarioPanel from '../components/ScenarioPanel.vue'
import FooterActionBar from '../components/FooterActionBar.vue'
</script>

<template>
  <div class="flex flex-col w-full">
    <ProgressStepper />

    <main class="w-full px-margin pb-space-xl">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div class="lg:col-span-7 flex flex-col gap-space-md">
          <VesselPanel />
          <CargoPanel />
          <RoutePanel />
          <SchedulePanel />
        </div>
        <div class="lg:col-span-5 flex flex-col gap-space-md">
          <PnlPanel />
          <SafetyPanel />
          <ScenarioPanel />
        </div>
      </div>
    </main>

    <FooterActionBar />
  </div>
</template>
