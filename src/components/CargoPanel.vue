<script setup>
import { computed } from 'vue'
import { useTripState } from '../store/tripState'

const { state, vessel, CARGO_TYPES, setCargoType, weightNum } = useTripState()

const maxDwt = computed(() => vessel.value?.dwt ?? null)

const loadRatio = computed(() => {
  if (!maxDwt.value || !weightNum.value) return 0
  return Math.min(100, (weightNum.value / maxDwt.value) * 100)
})

const remainingTons = computed(() => {
  if (!maxDwt.value) return null
  return Math.max(0, Math.round((maxDwt.value - weightNum.value) * 10) / 10)
})

const overloaded = computed(() => !!maxDwt.value && weightNum.value > maxDwt.value)
</script>

<template>
  <div class="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
    <div class="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-sm rounded-t-lg">
      <div class="flex items-center gap-space-xs">
        <span class="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm font-semibold">2</span>
        <span class="font-headline-sm text-headline-sm text-on-surface">Thông Tin Hàng Hóa Vận Chuyển</span>
      </div>
      <span
        v-if="state.cargoType"
        class="font-label-sm text-label-sm text-tertiary bg-surface-container-lowest px-2 py-0.5 rounded font-semibold"
      >
        Đã chọn nhóm hàng
      </span>
      <span v-else class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-lowest px-2 py-0.5 rounded font-semibold">
        Chưa chọn nhóm hàng
      </span>
    </div>

    <div class="flex flex-col gap-space-sm">
      <div>
        <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 block">Chọn nhanh nhóm hàng:</label>
        <div class="flex flex-wrap gap-space-xs">
          <button
            v-for="type in CARGO_TYPES"
            :key="type.name"
            type="button"
            :class="[
              'px-space-sm py-1.5 rounded font-label-md text-label-md transition-colors flex items-center gap-1',
              state.cargoType === type.name
                ? 'bg-primary text-on-primary font-medium shadow-sm'
                : 'bg-surface-container-low hover:bg-surface-container text-on-surface',
            ]"
            @click="setCargoType(type.name)"
          >
            <span v-if="state.cargoType === type.name" class="material-symbols-outlined text-[16px]">category</span>
            {{ type.name }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
        <div class="flex flex-col gap-1">
          <span class="font-label-sm text-label-sm text-on-surface-variant">Khối lượng xếp hàng thực tế</span>
          <div class="relative flex items-center">
            <input
              v-model.number="state.weightTons"
              type="number"
              min="0"
              placeholder="Nhập khối lượng"
              class="w-full bg-surface-container-low px-space-md py-space-sm rounded font-headline-sm text-headline-sm text-on-surface font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            <span class="absolute right-space-md font-label-md text-label-md text-on-surface-variant font-medium">TẤN</span>
          </div>
          <div class="flex items-center justify-between text-label-sm font-label-sm pt-1">
            <span v-if="!maxDwt" class="text-on-surface-variant">Chọn phương tiện ở Bước 1 để tính tỷ lệ tải</span>
            <template v-else>
              <span :class="overloaded ? 'text-error font-semibold' : 'text-tertiary font-medium'">
                Tỷ lệ chất tải: {{ loadRatio.toFixed(1) }}% {{ overloaded ? '(Vượt tải!)' : '(An toàn vượt luồng)' }}
              </span>
              <span class="text-on-surface-variant">Dư tải: {{ remainingTons }} Tấn</span>
            </template>
          </div>
          <div v-if="maxDwt" class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
            <div
              :class="overloaded ? 'bg-error' : 'bg-tertiary-container'"
              class="h-full rounded-full transition-all"
              :style="{ width: Math.min(loadRatio, 100) + '%' }"
            ></div>
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <span class="font-label-sm text-label-sm text-on-surface-variant">Đơn giá hợp đồng chốt</span>
          <div class="relative flex items-center">
            <input
              v-model.number="state.unitPrice"
              type="number"
              min="0"
              placeholder="Nhập đơn giá"
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
