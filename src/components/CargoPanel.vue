<script setup>
import { ref, computed } from 'vue'

const cargoTypes = ['Clinker rời', 'Than cám', 'Cát san lấp / Đá', 'Container rỗng/đầy']
const selectedCargo = ref('Clinker rời')

const weightTons = ref(400)
const maxDwt = 450
const unitPrice = ref('138.000')

const loadRatio = computed(() => ((weightTons.value / maxDwt) * 100).toFixed(1))
const remainingTons = computed(() => maxDwt - weightTons.value)
</script>

<template>
  <div class="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
    <div class="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-sm rounded-t-lg">
      <div class="flex items-center gap-space-xs">
        <span class="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm font-semibold">2</span>
        <span class="font-headline-sm text-headline-sm text-on-surface">Thông Tin Hàng Hóa Vận Chuyển</span>
      </div>
      <span class="font-label-sm text-label-sm text-tertiary bg-surface-container-lowest px-2 py-0.5 rounded font-semibold">
        Đã tải cấu hình giá
      </span>
    </div>

    <div class="flex flex-col gap-space-sm">
      <div>
        <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 block">Chọn nhanh nhóm hàng:</label>
        <div class="flex flex-wrap gap-space-xs">
          <button
            v-for="type in cargoTypes"
            :key="type"
            type="button"
            :class="[
              'px-space-sm py-1.5 rounded font-label-md text-label-md transition-colors flex items-center gap-1',
              selectedCargo === type
                ? 'bg-primary text-on-primary font-medium shadow-sm'
                : 'bg-surface-container-low hover:bg-surface-container text-on-surface',
            ]"
            @click="selectedCargo = type"
          >
            <span v-if="selectedCargo === type" class="material-symbols-outlined text-[16px]">category</span>
            {{ type }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
        <div class="flex flex-col gap-1">
          <span class="font-label-sm text-label-sm text-on-surface-variant">Khối lượng xếp hàng thực tế</span>
          <div class="relative flex items-center">
            <input
              v-model.number="weightTons"
              type="text"
              class="w-full bg-surface-container-low px-space-md py-space-sm rounded font-headline-sm text-headline-sm text-on-surface font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            <span class="absolute right-space-md font-label-md text-label-md text-on-surface-variant font-medium">TẤN</span>
          </div>
          <div class="flex items-center justify-between text-label-sm font-label-sm pt-1">
            <span class="text-tertiary font-medium">Tỷ lệ chất tải: {{ loadRatio }}% (An toàn vượt luồng)</span>
            <span class="text-on-surface-variant">Dư tải: {{ remainingTons }} Tấn</span>
          </div>
          <div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
            <div class="bg-tertiary-container h-full rounded-full" :style="{ width: loadRatio + '%' }"></div>
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <span class="font-label-sm text-label-sm text-on-surface-variant">Đơn giá hợp đồng chốt</span>
          <div class="relative flex items-center">
            <input
              v-model="unitPrice"
              type="text"
              class="w-full bg-surface-container-low px-space-md py-space-sm rounded font-headline-sm text-headline-sm text-on-surface font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            <span class="absolute right-space-md font-label-md text-label-md text-on-surface-variant font-medium">VND / Tấn</span>
          </div>
          <div class="flex items-center justify-between text-label-sm font-label-sm pt-1">
            <span class="text-on-surface-variant">Thanh toán: Tạm ứng 30% tại bến nhận</span>
            <span class="text-secondary font-semibold">Cước ổn định</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
