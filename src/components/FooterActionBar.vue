<script setup>
import { useTripState } from '../store/tripState'

const { state, isReady, currentScenario, resetAll } = useTripState()

function onReset() {
  if (confirm('Xoá toàn bộ dữ liệu đã nhập và bắt đầu lại từ Bước 1?')) {
    resetAll()
  }
}
</script>

<template>
  <section class="sticky bottom-0 z-40 bg-surface-container-lowest shadow-[0_-4px_12px_rgba(0,0,0,0.06)] px-margin py-space-sm">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-sm">
      <div class="flex items-center gap-space-xs text-on-surface-variant">
        <span class="material-symbols-outlined text-primary text-[20px]">verified_user</span>
        <span class="font-body-sm text-body-sm">
          {{ isReady ? 'Đã kiểm tra đủ 4 bước nhập liệu — P&L và An toàn đã được tính' : 'Đang chờ nhập đủ Bước 1-4: Tàu • Hàng • Luồng • Giờ rời bến' }}
        </span>
      </div>
      <div class="flex items-center gap-space-xs w-full sm:w-auto justify-end">
        <button
          type="button"
          class="px-space-md py-space-xs rounded font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container transition-colors"
          @click="onReset"
        >
          Nhập Lại Từ Đầu
        </button>
        <button
          type="button"
          :disabled="!isReady || !currentScenario"
          class="px-space-lg py-space-xs rounded font-label-lg text-label-lg font-semibold shadow-sm transition-colors flex items-center gap-space-xs disabled:opacity-40 disabled:cursor-not-allowed bg-primary-container text-on-primary hover:bg-primary"
        >
          <span>
            {{
              isReady && currentScenario
                ? `Phát Hành Phiếu Điều Hành (Phương Án ${state.scenarioKey})`
                : 'Nhập đủ Bước 1-4 để phát hành'
            }}
          </span>
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  </section>
</template>
