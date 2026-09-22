<script setup>
import { computed } from 'vue'
import { useTripState } from '../store/tripState'

const {
  vessel,
  origin,
  destination,
  state,
  isVesselDone,
  isCargoDone,
  isRouteDone,
  isScheduleDone,
  currentScenario,
} = useTripState()

const steps = computed(() => [
  {
    code: 'B.1',
    title: 'Phương tiện',
    done: isVesselDone.value,
    value: isVesselDone.value ? `Tàu ${vessel.value.name}` : 'Chưa chọn',
  },
  {
    code: 'B.2',
    title: 'Hàng hoá',
    done: isCargoDone.value,
    value: isCargoDone.value ? `${state.cargoType} • ${state.weightTons}T` : 'Chưa nhập',
  },
  {
    code: 'B.3',
    title: 'Tuyến luồng',
    done: isRouteDone.value,
    value: isRouteDone.value ? `${origin.value.short} - ${destination.value.short}` : 'Chưa chọn',
  },
  {
    code: 'B.4',
    title: 'Giờ rời bến',
    done: isScheduleDone.value,
    value: isScheduleDone.value ? `${state.etdTime}${state.etdDate ? ' - ' + state.etdDate : ''}` : 'Chưa nhập',
  },
  {
    code: 'B.5',
    title: 'P&L',
    done: !!currentScenario.value,
    value: currentScenario.value
      ? `${currentScenario.value.profit >= 0 ? '+' : ''}${(currentScenario.value.profit / 1e6).toFixed(1)}tr`
      : 'Chưa có dữ liệu',
  },
  {
    code: 'B.6',
    title: 'An toàn',
    done: !!currentScenario.value,
    value: currentScenario.value ? `${currentScenario.value.safetyScore} Điểm an toàn` : 'Chưa kiểm tra',
  },
])

const scenarioLabel = computed(() =>
  currentScenario.value ? `Kịch bản ${state.scenarioKey} đã chọn` : 'Chưa đủ dữ liệu'
)
</script>

<template>
  <section class="w-full px-margin py-space-md bg-surface-container-lowest shadow-sm mb-space-md">
    <div class="max-w-7xl mx-auto flex flex-col gap-space-sm">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-space-xs">
        <div class="flex items-center gap-space-sm flex-wrap">
          <span class="px-space-sm py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wide">
            Quy trình thông minh
          </span>
          <h1 class="font-headline-md text-headline-md text-on-surface">Khởi Tạo Chuyến Vận Tải Mới</h1>
          <span class="px-space-sm py-0.5 rounded font-label-md text-label-md bg-surface-container text-primary font-semibold">
            Mã: ST-2025-095
          </span>
        </div>
        <div class="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
          <span class="w-2 h-2 rounded-full bg-tertiary"></span>
          <span>Hệ thống trợ lý luồng: Tự động tính toán mớn nước &amp; P&amp;L</span>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-space-xs pt-space-xs">
        <div
          v-for="step in steps"
          :key="step.code"
          :class="[
            'flex items-center gap-space-xs p-space-xs rounded transition-colors',
            step.done ? 'bg-surface-container-low' : 'bg-surface-container-low/50',
          ]"
        >
          <div
            :class="[
              'w-6 h-6 rounded-full flex items-center justify-center shrink-0',
              step.done ? 'bg-tertiary text-on-tertiary' : 'bg-surface-container-high text-on-surface-variant',
            ]"
          >
            <span class="material-symbols-outlined text-[16px]">{{ step.done ? 'check' : 'radio_button_unchecked' }}</span>
          </div>
          <div class="min-w-0">
            <div
              :class="[
                'font-label-sm text-label-sm uppercase leading-none font-semibold',
                step.done ? 'text-tertiary' : 'text-on-surface-variant',
              ]"
            >
              {{ step.code }} {{ step.title }}
            </div>
            <div class="font-label-md text-label-md text-on-surface truncate font-medium">
              {{ step.value }}
            </div>
          </div>
        </div>

        <!-- Step 7: current, active step -->
        <div
          :class="[
            'flex items-center gap-space-xs p-space-xs rounded shadow-sm ring-1',
            currentScenario ? 'bg-surface-container-high ring-primary/30' : 'bg-surface-container-low/50 ring-transparent',
          ]"
        >
          <div class="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 animate-pulse">
            <span class="material-symbols-outlined text-[16px]">tune</span>
          </div>
          <div class="min-w-0">
            <div class="font-label-sm text-label-sm text-primary uppercase leading-none font-semibold">B.7 Đề Xuất</div>
            <div class="font-label-md text-label-md text-primary truncate font-bold">{{ scenarioLabel }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
