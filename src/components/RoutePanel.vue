<script setup>
import { useTripState } from '../store/tripState'
import { useModalState } from '../store/modalState'

const { origin, destination, DISTANCE_KM } = useTripState()
const { openModal } = useModalState()
</script>

<template>
  <div class="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
    <div class="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-sm rounded-t-lg">
      <div class="flex items-center gap-space-xs">
        <span class="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm font-semibold">3</span>
        <span class="font-headline-sm text-headline-sm text-on-surface">Tuyến Luồng Điểm Đi - Điểm Đến</span>
      </div>
      <span class="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
        Tổng cự ly: {{ DISTANCE_KM }} Km
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-space-sm mb-space-sm">
      <button
        type="button"
        class="text-left p-space-sm rounded bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-start gap-space-sm ring-1 ring-transparent hover:ring-primary/40"
        @click="openModal('origin', 'Chọn điểm xuất phát (cảng bốc)')"
      >
        <span class="material-symbols-outlined text-primary text-[24px] mt-0.5">anchor</span>
        <div class="min-w-0 flex-1">
          <span class="font-label-sm text-label-sm text-on-surface-variant uppercase block">Điểm xuất phát (Cảng bốc)</span>
          <span class="font-label-lg text-label-lg font-semibold text-on-surface block truncate">{{ origin.name }}</span>
          <span class="font-body-sm text-body-sm text-on-surface-variant">{{ origin.sub }}</span>
        </div>
        <span class="material-symbols-outlined text-outline text-[18px] shrink-0">edit</span>
      </button>

      <button
        type="button"
        class="text-left p-space-sm rounded bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-start gap-space-sm ring-1 ring-transparent hover:ring-secondary/40"
        @click="openModal('destination', 'Chọn điểm dỡ hàng (đích)')"
      >
        <span class="material-symbols-outlined text-secondary text-[24px] mt-0.5">location_on</span>
        <div class="min-w-0 flex-1">
          <span class="font-label-sm text-label-sm text-on-surface-variant uppercase block">Điểm dỡ hàng (Đích)</span>
          <span class="font-label-lg text-label-lg font-semibold text-on-surface block truncate">{{ destination.name }}</span>
          <span class="font-body-sm text-body-sm text-on-surface-variant">{{ destination.sub }}</span>
        </div>
        <span class="material-symbols-outlined text-outline text-[18px] shrink-0">edit</span>
      </button>
    </div>

    <!-- Mini Waypoint Vector Route Graphic -->
    <div class="rounded bg-surface-container-low p-space-sm flex flex-col gap-space-xs">
      <div class="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant pb-1">
        <span>Sơ đồ trạm luồng hành trình</span>
        <span class="text-primary font-medium">Hành lang đường thủy phía Bắc số 1</span>
      </div>
      <div class="relative py-space-sm">
        <div class="absolute top-1/2 left-4 right-4 h-1 bg-surface-container-highest -translate-y-1/2"></div>
        <div class="absolute top-1/2 left-4 w-1/2 h-1 bg-primary -translate-y-1/2"></div>
        <div class="relative flex justify-between items-center text-center">
          <div class="flex flex-col items-center">
            <div class="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm font-semibold shadow-sm ring-4 ring-surface-container-lowest">
              00
            </div>
            <span class="font-label-sm text-label-sm text-on-surface font-medium mt-1">{{ origin.short }}</span>
            <span class="font-label-sm text-[10px] text-on-surface-variant">Km 0</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm font-semibold ring-2 ring-surface-container-lowest">
              24
            </div>
            <span class="font-label-sm text-label-sm text-on-surface font-medium mt-1">Cửa Ruột</span>
            <span class="font-label-sm text-[10px] text-on-surface-variant">Km 24.5</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm font-semibold ring-2 ring-surface-container-lowest">
              45
            </div>
            <span class="font-label-sm text-label-sm text-on-surface font-medium mt-1">Cầu Phú Lương</span>
            <span class="font-label-sm text-[10px] text-on-surface-variant">Km 45.2</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm font-semibold shadow-sm ring-4 ring-surface-container-lowest">
              68
            </div>
            <span class="font-label-sm text-label-sm text-on-surface font-semibold mt-1">{{ destination.short }}</span>
            <span class="font-label-sm text-[10px] text-on-surface-variant">Km 68.4</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
