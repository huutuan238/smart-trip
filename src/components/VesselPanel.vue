<script setup>
import { useTripState } from '../store/tripState'
import { useModalState } from '../store/modalState'

const { vessel } = useTripState()
const { openModal } = useModalState()
</script>

<template>
  <div class="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
    <div class="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-sm rounded-t-lg">
      <div class="flex items-center gap-space-xs">
        <span class="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm font-semibold">1</span>
        <span class="font-headline-sm text-headline-sm text-on-surface">Hồ Sơ Phương Tiện Thủy</span>
        <span class="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-medium">VR-SB Khả dụng</span>
      </div>
      <button
        class="px-space-sm py-1 rounded text-primary hover:bg-surface-container transition-colors font-label-sm text-label-sm font-semibold flex items-center gap-1"
        type="button"
        @click="openModal('vessel', 'Chọn phương tiện thủy')"
      >
        <span class="material-symbols-outlined text-[16px]">swap_horiz</span>
        {{ vessel ? 'Đổi phương tiện' : 'Chọn phương tiện' }}
      </button>
    </div>

    <div v-if="vessel" class="grid grid-cols-1 sm:grid-cols-3 gap-space-sm items-center">
      <div class="sm:col-span-1 rounded bg-surface-container-low p-space-xs flex flex-col items-center text-center">
        <img :src="vessel.img" class="w-full h-24 object-cover rounded shadow-inner mb-space-xs" :alt="vessel.name" />
        <span class="font-headline-sm text-headline-sm text-primary tracking-tight">{{ vessel.name }}</span>
        <span class="font-label-sm text-label-sm text-on-surface-variant">{{ vessel.type }}</span>
      </div>
      <div class="sm:col-span-2 grid grid-cols-2 gap-space-xs">
        <div class="bg-surface-container-low p-space-xs rounded">
          <span class="font-label-sm text-label-sm text-on-surface-variant block">Trọng tải toàn phần</span>
          <span class="font-headline-sm text-headline-sm text-on-surface font-semibold">
            {{ vessel.dwt }}
            <span class="font-label-md text-label-md text-on-surface-variant">DWT</span>
          </span>
        </div>
        <div class="bg-surface-container-low p-space-xs rounded">
          <span class="font-label-sm text-label-sm text-on-surface-variant block">Mớn nước đầy tải</span>
          <span class="font-headline-sm text-headline-sm text-on-surface font-semibold">
            {{ vessel.draft.toFixed(2) }}
            <span class="font-label-md text-label-md text-on-surface-variant">m</span>
          </span>
        </div>
        <div class="bg-surface-container-low p-space-xs rounded">
          <span class="font-label-sm text-label-sm text-on-surface-variant block">Chiều cao tĩnh không</span>
          <span class="font-headline-sm text-headline-sm text-on-surface font-semibold">
            {{ vessel.airDraft.toFixed(2) }}
            <span class="font-label-md text-label-md text-on-surface-variant">m</span>
          </span>
        </div>
        <div class="bg-surface-container-low p-space-xs rounded">
          <span class="font-label-sm text-label-sm text-on-surface-variant block">Tốc độ kinh tế</span>
          <span class="font-headline-sm text-headline-sm text-on-surface font-semibold">
            {{ vessel.speed }}
            <span class="font-label-md text-label-md text-on-surface-variant">km/h</span>
          </span>
        </div>
      </div>
    </div>

    <button
      v-else
      type="button"
      class="w-full flex flex-col items-center justify-center gap-1 py-space-md rounded border-2 border-dashed border-outline-variant text-on-surface-variant hover:bg-surface-container-low hover:text-primary hover:border-primary/40 transition-colors"
      @click="openModal('vessel', 'Chọn phương tiện thủy')"
    >
      <span class="material-symbols-outlined text-[28px]">directions_boat</span>
      <span class="font-label-lg text-label-lg font-semibold">Chưa chọn phương tiện — bấm để chọn</span>
    </button>
  </div>
</template>
