<script setup>
import { computed } from 'vue'
import { useTripState } from '../store/tripState'

const { vessel, origin, destination, scenario } = useTripState()

const routeLabel = computed(() => `${origin.value.short} - ${destination.value.short}`)
const pnlLabel = computed(() => `${scenario.value.profit} (+${scenario.value.profitPctValue.toFixed(0)}%)`)
const safetyLabel = computed(() => `${scenario.value.safetyScore} Điểm an toàn`)
const scenarioLabel = computed(() => `Kịch bản ${scenario.value.key} đã chọn`)

const doneSteps = computed(() => [
  { code: 'B.1', label: 'Đã chọn', value: `Tàu ${vessel.value.name}` },
  { code: 'B.2', label: 'Xác nhận', value: 'Clinker 400T' },
  { code: 'B.3', label: 'Tuyến luồng', value: routeLabel.value },
  { code: 'B.4', label: 'Giờ triều', value: '09:00 - 15/03' },
  { code: 'B.5', label: 'P&L', value: pnlLabel.value },
  { code: 'B.6', label: 'Kiểm tra', value: safetyLabel.value },
])
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
          v-for="step in doneSteps"
          :key="step.code"
          class="flex items-center gap-space-xs p-space-xs rounded bg-surface-container-low transition-colors"
        >
          <div class="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[16px]">check</span>
          </div>
          <div class="min-w-0">
            <div class="font-label-sm text-label-sm text-tertiary uppercase leading-none font-semibold">
              {{ step.code }} {{ step.label }}
            </div>
            <div class="font-label-md text-label-md text-on-surface truncate font-medium">
              {{ step.value }}
            </div>
          </div>
        </div>

        <!-- Step 7: current, active step -->
        <div class="flex items-center gap-space-xs p-space-xs rounded bg-surface-container-high shadow-sm ring-1 ring-primary/30">
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
