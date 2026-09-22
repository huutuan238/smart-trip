<script setup>
import { useTripState, fmtVnd } from '../store/tripState'

const { scenario, marginText } = useTripState()
</script>

<template>
  <div class="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
    <div class="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-sm rounded-t-lg">
      <div class="flex items-center gap-space-xs">
        <span class="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm font-semibold">5</span>
        <span class="font-headline-sm text-headline-sm text-on-surface">Ước Tính Chuyến P&amp;L</span>
      </div>
      <span class="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold">
        Biên lãi: {{ marginText }}
      </span>
    </div>

    <!-- Financial 3 Key Figures -->
    <div class="grid grid-cols-1 gap-space-xs">
      <div class="p-space-sm rounded bg-surface-container-low flex items-center justify-between">
        <div>
          <span class="font-label-sm text-label-sm text-on-surface-variant block">Ước tính doanh thu (400T × 138k)</span>
          <span class="font-headline-md text-headline-md text-primary font-bold">
            {{ fmtVnd(scenario.revenue) }}
            <span class="font-label-md text-label-md font-normal text-on-surface-variant">đ</span>
          </span>
        </div>
        <span class="material-symbols-outlined text-primary text-[28px]">payments</span>
      </div>

      <div class="p-space-sm rounded bg-surface-container-low flex items-center justify-between">
        <div>
          <span class="font-label-sm text-label-sm text-on-surface-variant block">Tổng chi phí dự kiến</span>
          <span class="font-headline-md text-headline-md text-error font-bold">
            {{ fmtVnd(scenario.cost) }}
            <span class="font-label-md text-label-md font-normal text-on-surface-variant">đ</span>
          </span>
        </div>
        <span class="material-symbols-outlined text-error text-[28px]">receipt_long</span>
      </div>

      <div class="p-space-sm rounded bg-surface-container-high flex items-center justify-between">
        <div>
          <span class="font-label-sm text-label-sm text-tertiary block font-semibold">LỢI NHUẬN RÒNG DỰ KIẾN</span>
          <span class="font-headline-md text-headline-md text-tertiary font-bold">
            +{{ fmtVnd(scenario.profitValue) }}
            <span class="font-label-md text-label-md font-normal text-on-surface-variant">đ</span>
          </span>
        </div>
        <span class="px-space-xs py-1 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm font-semibold">
          {{ marginText }}
        </span>
      </div>
    </div>

    <!-- Cost Breakdown Horizontal Bar -->
    <div class="mt-space-sm pt-space-xs flex flex-col gap-1">
      <div class="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
        <span>Cơ cấu cấu thành chi phí:</span>
        <span class="font-medium text-on-surface">{{ fmtVnd(scenario.cost) }} đ</span>
      </div>
      <div class="w-full h-3 rounded-full flex overflow-hidden">
        <div class="bg-primary h-full" style="width: 49%" title="Nhiên liệu 49%"></div>
        <div class="bg-secondary-container h-full" style="width: 22%" title="Cảng bến 22%"></div>
        <div class="bg-tertiary-fixed-dim h-full" style="width: 15%" title="Lương thuyền viên 15%"></div>
        <div class="bg-outline-variant h-full" style="width: 14%" title="Dự phòng 14%"></div>
      </div>
      <div class="grid grid-cols-2 gap-x-space-sm gap-y-1 pt-space-xs font-label-sm text-label-sm">
        <div class="flex items-center justify-between text-on-surface-variant">
          <span class="flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-primary"></span>
            Dầu ({{ scenario.fuelLiters }}L)
          </span>
          <strong class="text-on-surface font-semibold">{{ scenario.fuelCost }}</strong>
        </div>
        <div class="flex items-center justify-between text-on-surface-variant">
          <span class="flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-secondary-container"></span>
            Cảng &amp; bến
          </span>
          <strong class="text-on-surface font-semibold">7.85tr</strong>
        </div>
        <div class="flex items-center justify-between text-on-surface-variant">
          <span class="flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
            Lương kíp lái
          </span>
          <strong class="text-on-surface font-semibold">5.50tr</strong>
        </div>
        <div class="flex items-center justify-between text-on-surface-variant">
          <span class="flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-outline-variant"></span>
            Phí &amp; Dự phòng
          </span>
          <strong class="text-on-surface font-semibold">4.82tr</strong>
        </div>
      </div>
    </div>
  </div>
</template>
