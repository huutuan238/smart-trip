<script setup>
import { computed } from 'vue'
import { useTripState } from '../store/tripState'

const { currentScenario, isReady, CONSTANTS } = useTripState()

const dashArray = computed(() => (currentScenario.value ? `${currentScenario.value.safetyScore}, 100` : '0, 100'))

const checklist = computed(() => {
  if (!currentScenario.value) return []
  const s = currentScenario.value
  return [
    {
      label: 'Thủy triều Trạm Hòn Dấu',
      detail: `Đỉnh triều tham chiếu lúc ${CONSTANTS.TIDE_PEAK_TIME} — ETD ${s.etd}, ETA ${s.eta}`,
      ok: true,
      tag: 'Tham khảo',
    },
    {
      label: 'Tỷ lệ chất tải so với DWT',
      detail: `Khối lượng chở ${s.weight.toFixed(0)}T / trọng tải cho phép, tỷ lệ ${(s.loadRatio * 100).toFixed(1)}%`,
      ok: s.loadRatio <= 0.95,
      tag: s.loadRatio <= 0.95 ? 'Đạt chuẩn' : 'Vượt tải',
    },
    {
      label: `Mớn nước tại điểm cạn tham chiếu (${CONSTANTS.CHANNEL_DEPTH_M}m)`,
      detail: `Mớn nước ước tính ${s.draftUsed.toFixed(2)}m, dư ${s.channelMargin.toFixed(2)}m so với độ sâu khả dụng`,
      ok: s.channelMargin >= 0.3,
      tag: s.channelMargin >= 0.3 ? `Hở +${s.channelMargin.toFixed(2)}m` : 'Cần kiểm tra',
    },
    {
      label: `Tĩnh không cầu tham chiếu (${CONSTANTS.BRIDGE_CLEARANCE_M}m)`,
      detail: `Chiều cao tĩnh không tàu ${(CONSTANTS.BRIDGE_CLEARANCE_M - s.bridgeMargin).toFixed(2)}m, dư ${s.bridgeMargin.toFixed(2)}m`,
      ok: s.bridgeMargin >= 0,
      tag: s.bridgeMargin >= 0 ? `Hở +${s.bridgeMargin.toFixed(2)}m` : 'Không đạt',
    },
  ]
})
</script>

<template>
  <div class="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
    <div class="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-sm rounded-t-lg">
      <div class="flex items-center gap-space-xs">
        <span class="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-sm font-semibold">6</span>
        <span class="font-headline-sm text-headline-sm text-on-surface">SMARTTRIP CHECK</span>
      </div>
      <span
        v-if="currentScenario"
        class="px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold"
        :class="currentScenario.safetyScore >= 80 ? 'bg-surface-container-high text-tertiary' : 'bg-error-container text-on-error-container'"
      >
        {{ currentScenario.safetyScore >= 80 ? 'AN TOÀN XUẤT BẾN' : 'CẦN XEM XÉT LẠI' }}
      </span>
    </div>

    <template v-if="isReady && currentScenario">
      <!-- Radar Metric Header -->
      <div class="p-space-sm rounded bg-surface-container-low flex items-center gap-space-md mb-space-sm">
        <div class="relative w-16 h-16 shrink-0 flex items-center justify-center">
          <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              class="text-surface-container-highest"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              stroke-width="3.5"
            />
            <path
              class="text-tertiary"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              :stroke-dasharray="dashArray"
              stroke-linecap="round"
              stroke-width="3.5"
            />
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="font-headline-sm text-headline-sm text-tertiary font-bold leading-none">{{ currentScenario.safetyScore }}</span>
            <span class="font-label-sm text-[9px] text-on-surface-variant">ĐIỂM</span>
          </div>
        </div>
        <div class="min-w-0">
          <span class="font-label-md text-label-md font-semibold text-on-surface block">Chỉ Số Thủy Văn &amp; An Toàn Luồng Tuyến</span>
          <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            Điểm an toàn tính từ tỷ lệ chất tải, mớn nước so với độ sâu khả dụng và tốc độ chạy tàu của phương án đang chọn.
          </p>
        </div>
      </div>

      <!-- Hydrology Checklist Items -->
      <div class="flex flex-col gap-space-xs">
        <div
          v-for="item in checklist"
          :key="item.label"
          class="p-space-xs rounded bg-surface-container-low flex items-center justify-between gap-space-xs"
        >
          <div class="flex items-center gap-space-xs">
            <span class="w-2 h-2 rounded-full shrink-0" :class="item.ok ? 'bg-tertiary' : 'bg-error'"></span>
            <div>
              <span class="font-label-md text-label-md text-on-surface font-medium block">{{ item.label }}</span>
              <span class="font-body-sm text-body-sm text-on-surface-variant">{{ item.detail }}</span>
            </div>
          </div>
          <span
            class="px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold shrink-0"
            :class="item.ok ? 'bg-surface-container-highest text-tertiary' : 'bg-error-container text-on-error-container'"
          >
            {{ item.tag }}
          </span>
        </div>
      </div>

      <div class="mt-space-sm pt-space-xs text-center">
        <span class="font-label-sm text-label-sm text-on-surface-variant">
          Chỉ số tham khảo, tính toán tự động theo dữ liệu Bước 1-4. Không thay thế thông báo hàng hải chính thức.
        </span>
      </div>
    </template>

    <div v-else class="rounded border-2 border-dashed border-outline-variant p-space-md text-center text-on-surface-variant font-label-md text-label-md">
      Hoàn thành Bước 1-4 để hệ thống kiểm tra an toàn thủy văn cho chuyến đi.
    </div>
  </div>
</template>
