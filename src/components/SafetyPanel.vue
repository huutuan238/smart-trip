<script setup>
import { computed } from 'vue'
import { useTripState } from '../store/tripState'

const { scenario } = useTripState()

const dashArray = computed(() => `${scenario.value.safetyScore}, 100`)

const checklist = [
  {
    label: 'Thủy triều Trạm Hòn Dấu',
    detail: 'Dự báo đỉnh: +2.10m lúc 10:15 (Đang dâng)',
    tag: 'Lý tưởng',
  },
  {
    label: 'Điểm cạn Sông Kinh Thầy (Km 24)',
    detail: 'Độ sâu khả dụng 2.85m • Mớn dư +40cm lúc 11:45',
    tag: 'Đạt chuẩn',
  },
  {
    label: 'Tĩnh không Cầu Phú Lương (Km 45.2)',
    detail: 'Khoảng tĩnh không thực tế 7.20m (Tàu yêu cầu 6.80m)',
    tag: 'Hở +40cm',
  },
  {
    label: 'Thông báo hàng hải luồng ĐTNĐ',
    detail: 'Luồng thông suốt, không công trình thi công chắn luồng',
    tag: 'Thông suốt',
  },
]
</script>

<template>
  <div class="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
    <div class="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-sm rounded-t-lg">
      <div class="flex items-center gap-space-xs">
        <span class="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-sm font-semibold">6</span>
        <span class="font-headline-sm text-headline-sm text-on-surface">SMARTTRIP CHECK</span>
      </div>
      <span class="px-2 py-0.5 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm font-bold">
        AN TOÀN XUẤT BẾN
      </span>
    </div>

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
          <span class="font-headline-sm text-headline-sm text-tertiary font-bold leading-none">{{ scenario.safetyScore }}</span>
          <span class="font-label-sm text-[9px] text-on-surface-variant">ĐIỂM</span>
        </div>
      </div>
      <div class="min-w-0">
        <span class="font-label-md text-label-md font-semibold text-on-surface block">Chỉ Số Thủy Văn &amp; An Toàn Luồng Tuyến</span>
        <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
          Điều kiện mớn nước, con nước triều và tĩnh không cầu bảo đảm cho sà lan 450T lưu thông an toàn toàn trình.
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
          <span class="w-2 h-2 rounded-full bg-tertiary shrink-0"></span>
          <div>
            <span class="font-label-md text-label-md text-on-surface font-medium block">{{ item.label }}</span>
            <span class="font-body-sm text-body-sm text-on-surface-variant">{{ item.detail }}</span>
          </div>
        </div>
        <span class="px-space-xs py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-semibold shrink-0">
          {{ item.tag }}
        </span>
      </div>
    </div>

    <div class="mt-space-sm pt-space-xs text-center">
      <span class="font-label-sm text-label-sm text-on-surface-variant">
        Dữ liệu quan trắc đồng bộ thời gian thực từ Cục Đường Thủy Nội Địa Việt Nam
      </span>
    </div>
  </div>
</template>
