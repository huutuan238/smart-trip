<script setup>
import { computed } from 'vue'
import { useTripState, fmtVnd } from '../store/tripState'

const { currentScenario, isReady } = useTripState()

const pcts = computed(() => {
  if (!currentScenario.value) return null
  const s = currentScenario.value
  const total = s.cost || 1
  return {
    fuel: (s.fuelCost / total) * 100,
    port: (s.portFee / total) * 100,
    crew: (s.crewCost / total) * 100,
    contingency: (s.contingency / total) * 100,
  }
})

function trM(n) {
  return (n / 1e6).toFixed(2) + 'tr'
}
</script>

<template>
  <div class="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
    <div class="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-sm rounded-t-lg">
      <div class="flex items-center gap-space-xs">
        <span class="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm font-semibold">5</span>
        <span class="font-headline-sm text-headline-sm text-on-surface">Ước Tính Chuyến P&amp;L</span>
      </div>
      <span
        v-if="currentScenario"
        class="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold"
      >
        Biên lãi: {{ currentScenario.profitPct.toFixed(1) }}%
      </span>
    </div>

    <template v-if="isReady && currentScenario">
      <!-- Financial 3 Key Figures -->
      <div class="grid grid-cols-1 gap-space-xs">
        <div class="p-space-sm rounded bg-surface-container-low flex items-center justify-between">
          <div>
            <span class="font-label-sm text-label-sm text-on-surface-variant block">
              Ước tính doanh thu ({{ currentScenario.weight.toFixed(0) }}T × giá hợp đồng)
            </span>
            <span class="font-headline-md text-headline-md text-primary font-bold">
              {{ fmtVnd(currentScenario.revenue) }}
              <span class="font-label-md text-label-md font-normal text-on-surface-variant">đ</span>
            </span>
          </div>
          <span class="material-symbols-outlined text-primary text-[28px]">payments</span>
        </div>

        <div class="p-space-sm rounded bg-surface-container-low flex items-center justify-between">
          <div>
            <span class="font-label-sm text-label-sm text-on-surface-variant block">Tổng chi phí dự kiến</span>
            <span class="font-headline-md text-headline-md text-error font-bold">
              {{ fmtVnd(currentScenario.cost) }}
              <span class="font-label-md text-label-md font-normal text-on-surface-variant">đ</span>
            </span>
          </div>
          <span class="material-symbols-outlined text-error text-[28px]">receipt_long</span>
        </div>

        <div class="p-space-sm rounded bg-surface-container-high flex items-center justify-between">
          <div>
            <span class="font-label-sm text-label-sm text-tertiary block font-semibold">LỢI NHUẬN RÒNG DỰ KIẾN</span>
            <span
              class="font-headline-md text-headline-md font-bold"
              :class="currentScenario.profit >= 0 ? 'text-tertiary' : 'text-error'"
            >
              {{ currentScenario.profit >= 0 ? '+' : '' }}{{ fmtVnd(currentScenario.profit) }}
              <span class="font-label-md text-label-md font-normal text-on-surface-variant">đ</span>
            </span>
          </div>
          <span
            class="px-space-xs py-1 rounded font-label-sm text-label-sm font-semibold"
            :class="currentScenario.profit >= 0 ? 'bg-tertiary text-on-tertiary' : 'bg-error text-on-error'"
          >
            {{ currentScenario.profitPct >= 0 ? '+' : '' }}{{ currentScenario.profitPct.toFixed(1) }}%
          </span>
        </div>
      </div>

      <!-- Cost Breakdown Horizontal Bar -->
      <div class="mt-space-sm pt-space-xs flex flex-col gap-1">
        <div class="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
          <span>Cơ cấu cấu thành chi phí:</span>
          <span class="font-medium text-on-surface">{{ fmtVnd(currentScenario.cost) }} đ</span>
        </div>
        <div class="w-full h-3 rounded-full flex overflow-hidden">
          <div class="bg-primary h-full" :style="{ width: pcts.fuel + '%' }" :title="`Nhiên liệu ${pcts.fuel.toFixed(0)}%`"></div>
          <div class="bg-secondary-container h-full" :style="{ width: pcts.port + '%' }" :title="`Cảng bến ${pcts.port.toFixed(0)}%`"></div>
          <div class="bg-tertiary-fixed-dim h-full" :style="{ width: pcts.crew + '%' }" :title="`Lương thuyền viên ${pcts.crew.toFixed(0)}%`"></div>
          <div class="bg-outline-variant h-full" :style="{ width: pcts.contingency + '%' }" :title="`Dự phòng ${pcts.contingency.toFixed(0)}%`"></div>
        </div>
        <div class="grid grid-cols-2 gap-x-space-sm gap-y-1 pt-space-xs font-label-sm text-label-sm">
          <div class="flex items-center justify-between text-on-surface-variant">
            <span class="flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
              Dầu ({{ currentScenario.fuelLiters.toFixed(0) }}L)
            </span>
            <strong class="text-on-surface font-semibold">{{ trM(currentScenario.fuelCost) }}</strong>
          </div>
          <div class="flex items-center justify-between text-on-surface-variant">
            <span class="flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-secondary-container"></span>
              Cảng &amp; bến
            </span>
            <strong class="text-on-surface font-semibold">{{ trM(currentScenario.portFee) }}</strong>
          </div>
          <div class="flex items-center justify-between text-on-surface-variant">
            <span class="flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              Lương kíp lái
            </span>
            <strong class="text-on-surface font-semibold">{{ trM(currentScenario.crewCost) }}</strong>
          </div>
          <div class="flex items-center justify-between text-on-surface-variant">
            <span class="flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-outline-variant"></span>
              Phí &amp; Dự phòng
            </span>
            <strong class="text-on-surface font-semibold">{{ trM(currentScenario.contingency) }}</strong>
          </div>
        </div>
      </div>
    </template>

    <div v-else class="rounded border-2 border-dashed border-outline-variant p-space-md text-center text-on-surface-variant font-label-md text-label-md">
      Hoàn thành Bước 1-4 (tàu, hàng hoá, tuyến luồng, giờ rời bến) để hệ thống tính doanh thu, chi phí và lợi nhuận.
    </div>
  </div>
</template>
