<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-3xl mx-auto px-margin py-space-xl text-center flex flex-col items-center gap-space-md">
    <span class="px-space-sm py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wide">
      SmartTrip IWT
    </span>
    <h1 class="font-headline-lg text-headline-lg text-on-surface">Hệ Thống Điều Hành Vận Tải Thủy Nội Địa</h1>
    <p class="font-body-lg text-body-lg text-on-surface-variant">
      Khởi tạo chuyến vận tải mới, hệ thống tự động tính toán mớn nước, lịch trình theo con nước và ước tính P&amp;L.
    </p>
    <RouterLink
      to="/tao-chuyen-moi"
      class="px-space-lg py-space-sm rounded bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg font-semibold shadow-sm transition-colors"
    >
      + Tạo Chuyến Mới
    </RouterLink>
  </div>
</template>
