<script setup>
import { useTripState } from '../store/tripState'

const { state, scenarioOptions, isReady, setScenario } = useTripState()
</script>

<template>
  <div class="bg-surface-container-lowest rounded-lg p-space-md shadow-sm ring-1 ring-primary/20">
    <div class="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-sm rounded-t-lg">
      <div class="flex items-center gap-space-xs">
        <span class="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm font-semibold">7</span>
        <span class="font-headline-sm text-headline-sm text-on-surface">Đề Xuất Phương Án Điều Hành</span>
      </div>
      <span class="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-medium flex items-center gap-1">
        <span class="material-symbols-outlined text-[14px]">auto_awesome</span>
        AI Phân Tích
      </span>
    </div>

    <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
      Hệ thống tự động mô phỏng 3 phương án vận hành dựa trên dữ liệu bạn đã nhập ở Bước 1-4 (tàu, hàng hoá, tuyến, giờ rời bến).
    </p>

    <div v-if="!isReady" class="rounded border-2 border-dashed border-outline-variant p-space-md text-center text-on-surface-variant font-label-md text-label-md">
      Hoàn thành Bước 1-4 để xem và áp dụng các phương án.
    </div>

    <div v-else class="flex flex-col gap-space-sm">
      <div
        v-for="opt in scenarioOptions"
        :key="opt.key"
        :class="[
          'p-space-sm rounded-lg border-2 transition-colors relative',
          opt.key === state.scenarioKey
            ? 'border-secondary bg-surface-container-low/60 shadow-sm'
            : 'border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low',
        ]"
      >
        <div class="flex items-start justify-between gap-space-xs mb-1">
          <div class="flex items-center gap-space-xs">
            <span
              :class="[
                'w-4 h-4 rounded-full shrink-0',
                opt.key === state.scenarioKey
                  ? 'border-4 border-secondary bg-surface-container-lowest'
                  : 'border border-outline-variant bg-surface-container-lowest',
              ]"
            ></span>
            <span
              :class="[
                'font-headline-sm text-[16px]',
                opt.key === state.scenarioKey ? 'text-primary font-bold' : 'text-on-surface font-semibold',
              ]"
            >
              {{ opt.title }}
            </span>
          </div>
          <span :class="[opt.tagClass, 'px-2 py-0.5 rounded-full font-label-sm text-[10px] font-bold uppercase tracking-wider shrink-0']">
            {{ opt.tag }}
          </span>
        </div>

        <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-xs pl-6">{{ opt.desc }}</p>

        <div v-if="opt.metrics" class="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pl-6 py-space-xs">
          <div :class="[opt.key === state.scenarioKey ? 'bg-surface-container-lowest' : 'bg-surface-container-low', 'p-space-xs rounded']">
            <span class="font-label-sm text-[10px] text-on-surface-variant block uppercase">Lợi nhuận</span>
            <span
              :class="[opt.metrics.profit >= 0 ? (opt.key === state.scenarioKey ? 'text-tertiary' : 'text-primary') : 'text-error', 'font-headline-sm text-[15px] font-bold']"
            >
              {{ opt.metrics.profit >= 0 ? '+' : '' }}{{ (opt.metrics.profit / 1e6).toFixed(1) }}tr
              <span class="text-[11px] font-semibold">({{ opt.metrics.profitPct >= 0 ? '+' : '' }}{{ opt.metrics.profitPct.toFixed(0) }}%)</span>
            </span>
          </div>
          <div :class="[opt.key === state.scenarioKey ? 'bg-surface-container-lowest' : 'bg-surface-container-low', 'p-space-xs rounded']">
            <span class="font-label-sm text-[10px] text-on-surface-variant block uppercase">Thời gian chạy</span>
            <span class="font-headline-sm text-[15px] text-on-surface font-semibold">{{ opt.metrics.durationHours.toFixed(1) }}h</span>
          </div>
          <div :class="[opt.key === state.scenarioKey ? 'bg-surface-container-lowest' : 'bg-surface-container-low', 'p-space-xs rounded']">
            <span class="font-label-sm text-[10px] text-on-surface-variant block uppercase">Mức an toàn</span>
            <span :class="[opt.metrics.safetyScore >= 90 ? 'text-tertiary font-bold' : 'text-on-surface font-bold', 'font-headline-sm text-[15px]']">
              {{ opt.metrics.safetyScore }}/100
            </span>
          </div>
          <div :class="[opt.key === state.scenarioKey ? 'bg-surface-container-lowest' : 'bg-surface-container-low', 'p-space-xs rounded']">
            <span class="font-label-sm text-[10px] text-on-surface-variant block uppercase">Nhiên liệu</span>
            <span :class="[opt.key === 'C' ? 'text-error' : 'text-on-surface', 'font-headline-sm text-[15px] font-semibold']">
              {{ opt.metrics.fuelLiters.toFixed(0) }}L
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between pl-6 pt-space-xs mt-1">
          <span
            :class="[
              opt.key === state.scenarioKey ? 'text-secondary font-semibold flex items-center gap-1' : 'text-on-surface-variant',
              'font-label-sm text-label-sm',
            ]"
          >
            <span v-if="opt.key === state.scenarioKey" class="material-symbols-outlined text-[16px]">check_circle</span>
            {{ opt.footNote }}
          </span>
          <button
            type="button"
            :disabled="opt.key === state.scenarioKey"
            :class="[
              opt.key === state.scenarioKey
                ? 'px-space-sm py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold shadow-sm'
                : 'px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold transition-colors',
            ]"
            @click="setScenario(opt.key)"
          >
            {{ opt.key === state.scenarioKey ? 'Đã chọn' : 'Áp dụng phương án' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
