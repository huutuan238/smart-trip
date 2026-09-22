<script setup>
import { useTripState } from '../store/tripState'

const { state } = useTripState()
</script>

<template>
  <section class="sticky bottom-0 z-40 bg-surface-container-lowest shadow-[0_-4px_12px_rgba(0,0,0,0.06)] px-margin py-space-sm">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-sm">
      <div class="flex items-center gap-space-xs text-on-surface-variant">
        <span class="material-symbols-outlined text-primary text-[20px]">verified_user</span>
        <span class="font-body-sm text-body-sm">
          Đã kiểm tra 6 tiêu chí thông minh: Tàu • Hàng • Luồng • Giờ triều • P&amp;L • Thủy văn
        </span>
      </div>
      <div class="flex items-center gap-space-xs w-full sm:w-auto justify-end">
        <button class="px-space-md py-space-xs rounded font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
          Lưu Nháp
        </button>
        <button class="px-space-md py-space-xs rounded font-label-lg text-label-lg text-on-surface hover:bg-surface-container transition-colors" type="button">
          Quay lại B.2
        </button>
        <button
          class="px-space-lg py-space-xs rounded bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg font-semibold shadow-sm transition-colors flex items-center gap-space-xs"
          type="button"
        >
          <span>Phát Hành Phiếu Điều Hành (Kịch Bản {{ state.scenarioKey }})</span>
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  </section>
</template>
