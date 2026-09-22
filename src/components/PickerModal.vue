<script setup>
import { computed } from 'vue'
import { useTripState } from '../store/tripState'
import { useModalState } from '../store/modalState'

const { state, VESSELS, PORTS, setVessel, setOrigin, setDestination } = useTripState()
const { modal, closeModal } = useModalState()

const isVessel = computed(() => modal.type === 'vessel')
const isOrigin = computed(() => modal.type === 'origin')
const isDestination = computed(() => modal.type === 'destination')

// For port picker: disable whichever port is already selected on the other side
const otherPortId = computed(() => (isOrigin.value ? state.destinationId : state.originId))
const currentPortId = computed(() => (isOrigin.value ? state.originId : state.destinationId))

function pickVessel(id) {
  setVessel(id)
  closeModal()
}

function pickPort(id) {
  if (isOrigin.value) setOrigin(id)
  else setDestination(id)
  closeModal()
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) closeModal()
}
</script>

<template>
  <div
    v-if="modal.isOpen"
    class="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(11,28,48,0.45)] p-space-md"
    @click="onBackdropClick"
  >
    <div class="w-full max-w-lg max-h-[85vh] overflow-y-auto bg-surface-container-lowest rounded-lg shadow-xl p-space-md flex flex-col gap-space-sm">
      <div class="flex items-center justify-between">
        <h2 class="font-headline-sm text-headline-sm text-on-surface">{{ modal.title }}</h2>
        <button type="button" class="p-1 rounded hover:bg-surface-container text-on-surface-variant" @click="closeModal">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div class="flex flex-col gap-space-xs">
        <!-- Vessel picker -->
        <template v-if="isVessel">
          <button
            v-for="v in VESSELS"
            :key="v.id"
            type="button"
            :class="[
              'text-left flex items-center gap-space-sm p-space-sm rounded transition-colors',
              v.id === state.vesselId
                ? 'bg-primary-container/20 ring-1 ring-primary'
                : 'bg-surface-container-low hover:bg-surface-container-high',
            ]"
            @click="pickVessel(v.id)"
          >
            <img :src="v.img" class="w-16 h-12 object-cover rounded shrink-0" />
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-space-xs">
                <span class="font-label-lg text-label-lg font-semibold text-on-surface">{{ v.name }}</span>
                <span
                  v-if="v.id === state.vesselId"
                  class="px-1.5 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-[10px] font-bold"
                >
                  ĐANG DÙNG
                </span>
              </div>
              <span class="font-body-sm text-body-sm text-on-surface-variant block truncate">{{ v.type }}</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">
                {{ v.dwt }} DWT • Mớn {{ v.draft.toFixed(2) }}m • Tĩnh không {{ v.airDraft.toFixed(2) }}m • {{ v.speed }} km/h
              </span>
            </div>
          </button>
        </template>

        <!-- Port picker (origin / destination) -->
        <template v-else-if="isOrigin || isDestination">
          <button
            v-for="p in PORTS"
            :key="p.id"
            type="button"
            :disabled="p.id === otherPortId"
            :class="[
              'text-left flex items-start gap-space-sm p-space-sm rounded transition-colors',
              p.id === currentPortId
                ? 'bg-primary-container/20 ring-1 ring-primary'
                : p.id === otherPortId
                ? 'opacity-40 cursor-not-allowed bg-surface-container-low'
                : 'bg-surface-container-low hover:bg-surface-container-high',
            ]"
            @click="p.id !== otherPortId && pickPort(p.id)"
          >
            <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">location_on</span>
            <div class="min-w-0 flex-1">
              <span class="font-label-lg text-label-lg font-semibold text-on-surface block">{{ p.name }}</span>
              <span class="font-body-sm text-body-sm text-on-surface-variant">{{ p.sub }}</span>
            </div>
            <span
              v-if="p.id === currentPortId"
              class="px-1.5 py-0.5 h-fit rounded-full bg-primary text-on-primary font-label-sm text-[10px] font-bold shrink-0"
            >
              ĐANG CHỌN
            </span>
            <span v-else-if="p.id === otherPortId" class="font-label-sm text-[10px] text-on-surface-variant shrink-0">
              Đã là điểm kia
            </span>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
