<script setup>
import { useTripState } from '../store/tripState'

const { scenario, runSpeedKmh } = useTripState()
</script>

<template>
  <div class="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
    <div class="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-sm rounded-t-lg">
      <div class="flex items-center gap-space-xs">
        <span class="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm font-semibold">4</span>
        <span class="font-headline-sm text-headline-sm text-on-surface">Lịch Trình Vận Hành &amp; Giờ Xuất Bến</span>
      </div>
      <span class="font-label-sm text-label-sm text-on-surface-variant">Tính toán theo con nước</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
      <div class="flex flex-col gap-1 p-space-sm rounded bg-surface-container-low">
        <span class="font-label-sm text-label-sm text-on-surface-variant">Giờ rời bến dự kiến (ETD)</span>
        <div class="flex items-center gap-space-xs">
          <span class="material-symbols-outlined text-primary">schedule</span>
          <span class="font-headline-md text-headline-md text-on-surface">{{ scenario.etd }}</span>
          <span class="font-label-md text-label-md text-on-surface-variant ml-auto">15/03/2025</span>
        </div>
        <div class="mt-1 p-space-xs rounded bg-surface-container-highest flex items-center gap-1 text-primary font-label-sm text-label-sm">
          <span class="material-symbols-outlined text-[16px]">waves</span>
          <span>{{ scenario.etdNote }}</span>
        </div>
      </div>

      <div class="flex flex-col gap-1 p-space-sm rounded bg-surface-container-low">
        <span class="font-label-sm text-label-sm text-on-surface-variant">Giờ cập bến đích dự kiến (ETA)</span>
        <div class="flex items-center gap-space-xs">
          <span class="material-symbols-outlined text-secondary">flag</span>
          <span class="font-headline-md text-headline-md text-secondary">{{ scenario.eta }}</span>
          <span class="font-label-md text-label-md text-on-surface-variant ml-auto">15/03/2025</span>
        </div>
        <div class="mt-1 flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant pt-1">
          <span>Tổng thời gian chạy: <strong class="text-on-surface">{{ scenario.durationRaw }}</strong></span>
          <span>Tốc độ TB: <strong class="text-on-surface">{{ runSpeedKmh }} km/h</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>
