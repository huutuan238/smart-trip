<template>
  <main
    class="flex flex-col relative w-full pt-20 pb-24 px-margin-mobile bg-surface min-h-screen"
  >
    <div class="flex flex-col w-full gap-space-sm pb-space-lg select-none">
      <!-- Minimal Operational Trip Header Card -->
      <div
        class="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm"
      >
        <div class="flex items-start justify-between">
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span
                class="font-headline-sm text-headline-sm text-primary uppercase font-bold tracking-tight"
                >{{ trip.name }}</span
              >
              <span
                class="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold"
                >{{ trip.tonnage }} • {{ trip.cargo }}</span
              >
            </div>
            <div class="flex items-center gap-1 mt-0.5">
              <span
                class="font-label-md text-label-md text-on-surface-variant font-medium"
                >Chuyến: {{ trip.code }}</span
              >
              <span class="text-outline-variant">•</span>
              <span
                class="font-label-md text-label-md text-on-surface font-semibold"
                >{{ trip.captain }}</span
              >
            </div>
          </div>
          <div
            class="flex items-center gap-1 bg-tertiary-container/10 px-2 py-1 rounded-full"
          >
            <span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span
              class="font-label-sm text-label-sm text-tertiary font-bold uppercase"
              >Máy chính: {{ trip.engineHours }}</span
            >
          </div>
        </div>

        <!-- Route indicator banner -->
        <div
          class="bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between"
        >
          <div class="flex items-center gap-2 min-w-0">
            <span class="material-symbols-outlined text-secondary text-[20px] shrink-0"
              >anchor</span
            >
            <div class="truncate">
              <span
                class="font-label-sm text-label-sm uppercase text-on-surface-variant block leading-none"
                >Hành trình {{ trip.distanceKm }} km</span
              >
              <span
                class="font-label-lg text-label-lg font-bold text-on-surface truncate block"
                >{{ trip.route }}</span
              >
            </div>
          </div>
          <span
            class="bg-surface-container text-primary font-label-sm text-label-sm font-bold px-2 py-1 rounded-full shrink-0"
            >ETA {{ trip.eta }}</span
          >
        </div>

        <!-- Live Telemetry Grid -->
        <div class="grid grid-cols-3 gap-2">
          <div
            class="bg-surface-container-low rounded-lg p-2 flex flex-col items-center justify-center text-center"
          >
            <span
              class="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium"
              >Vận tốc</span
            >
            <div class="flex items-baseline gap-0.5 mt-0.5">
              <span class="font-headline-sm text-headline-sm font-bold text-on-surface"
                >{{ telemetry.speed }}</span
              >
              <span class="font-label-sm text-label-sm text-on-surface-variant font-semibold"
                >km/h</span
              >
            </div>
          </div>
          <div
            class="bg-surface-container-low rounded-lg p-2 flex flex-col items-center justify-center text-center"
          >
            <span
              class="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium"
              >Đã chạy</span
            >
            <div class="flex items-baseline gap-0.5 mt-0.5">
              <span class="font-headline-sm text-headline-sm font-bold text-primary"
                >{{ telemetry.distanceRun }}</span
              >
              <span class="font-label-sm text-label-sm text-on-surface-variant font-semibold"
                >km</span
              >
            </div>
          </div>
          <div
            class="bg-surface-container-low rounded-lg p-2 flex flex-col items-center justify-center text-center"
          >
            <span
              class="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium"
              >Tiến độ</span
            >
            <div class="flex items-baseline gap-0.5 mt-0.5">
              <span class="font-headline-sm text-headline-sm font-bold text-tertiary"
                >{{ telemetry.progress }}</span
              >
              <span class="font-label-sm text-label-sm text-tertiary font-bold">%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Operational Mode Notification Toast (Interactive Feedback) -->
      <div
        v-show="toast.visible"
        class="w-full bg-surface-container-highest rounded-lg px-space-md py-2 flex items-center justify-between shadow-sm"
      >
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[20px] text-primary">{{
            toast.icon
          }}</span>
          <span class="font-label-md text-label-md text-on-surface font-semibold">{{
            toast.message
          }}</span>
        </div>
        <span class="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase"
          >Vừa xong</span
        >
      </div>

      <!-- 5 HIGH-CONTRAST 1-TOUCH THUMB ACTIONS -->
      <div class="flex flex-col gap-space-sm mt-1">
        <!-- BUTTON 1: XUẤT BẾN (Completed / Active state) -->
        <button
          type="button"
          class="w-full text-left bg-tertiary text-on-tertiary rounded-xl p-space-md shadow-md active:scale-[0.99] transition-transform flex items-center justify-between relative overflow-hidden"
          style="min-height: 80px"
        >
          <div class="flex items-center gap-space-md">
            <div
              class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0"
            >
              <span
                class="material-symbols-outlined text-white text-[28px]"
                style="font-variation-settings: 'FILL' 1"
                >check_circle</span
              >
            </div>
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <span
                  class="font-headline-sm text-headline-sm font-bold tracking-tight text-white uppercase"
                  >1. XUẤT BẾN</span
                >
                <span
                  class="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold"
                  >XONG</span
                >
              </div>
              <span class="font-body-sm text-body-sm text-white/90 leading-tight mt-0.5"
                >Bắt đầu tính giờ &amp; dầu • Ghi nhận {{ departureTime }}</span
              >
            </div>
          </div>
          <span class="material-symbols-outlined text-white/60 text-[24px]">done_all</span>
        </button>

        <!-- BUTTON 2: ĐẾN MỐC KIỂM SOÁT -->
        <div
          class="w-full bg-primary-container text-on-primary rounded-xl shadow-lg p-space-md flex flex-col gap-space-sm relative overflow-hidden"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-space-md">
              <div
                class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 animate-bounce"
              >
                <span class="material-symbols-outlined text-white text-[28px]">pin_drop</span>
              </div>
              <div class="flex flex-col">
                <span
                  class="font-headline-sm text-headline-sm font-bold tracking-tight text-white uppercase"
                  >2. ĐẾN MỐC KIỂM SOÁT</span
                >
                <span class="font-body-sm text-body-sm text-on-primary-container leading-tight mt-0.5"
                  >Xác nhận qua trạm kiểm soát luồng / ngã 3 sông</span
                >
              </div>
            </div>
            <span
              class="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-1 rounded-full font-bold uppercase shrink-0"
              >Km 42</span
            >
          </div>
          <button
            type="button"
            class="w-full h-14 bg-surface-container-lowest text-primary rounded-lg font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-2 shadow active:bg-surface-container-low transition-colors"
            @click="confirmMilestone"
          >
            <span class="material-symbols-outlined text-[24px]">done</span>
            <span>XÁC NHẬN QUA: CẦU PHÚ LƯƠNG</span>
          </button>
        </div>

        <!-- BUTTON 3: ĐANG CHỜ -->
        <button
          type="button"
          class="w-full text-left bg-surface-container-lowest text-on-surface rounded-xl p-space-md shadow-sm active:bg-surface-container transition-colors flex items-center justify-between cursor-pointer"
          style="min-height: 80px"
          @click="openWaitingModal"
        >
          <div class="flex items-center gap-space-md">
            <div
              class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0"
            >
              <span class="material-symbols-outlined text-on-surface-variant text-[28px]"
                >pause_circle</span
              >
            </div>
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <span
                  class="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface uppercase"
                  >3. ĐANG CHỜ</span
                >
                <span
                  :class="[
                    'font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold',
                    waitingStatus.confirmed
                      ? 'bg-secondary text-on-secondary'
                      : 'bg-surface-container-highest text-on-surface-variant',
                  ]"
                  >{{ waitingBadgeText }}</span
                >
              </div>
              <span class="font-body-sm text-body-sm text-on-surface-variant leading-tight mt-0.5">{{
                waitingDescText
              }}</span>
            </div>
          </div>
          <div
            class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0"
          >
            <span class="material-symbols-outlined text-on-surface-variant text-[22px]"
              >touch_app</span
            >
          </div>
        </button>

        <!-- BUTTON 4: BÁO CÁO SỰ CỐ KHẨN CẤP -->
        <button
          type="button"
          class="w-full text-left bg-error text-on-error rounded-xl p-space-md shadow-md active:opacity-90 transition-opacity flex items-center justify-between cursor-pointer"
          style="min-height: 84px"
          @click="openEmergencyModal"
        >
          <div class="flex items-center gap-space-md">
            <div
              class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0"
            >
              <span class="material-symbols-outlined text-white text-[32px] animate-pulse"
                >warning</span
              >
            </div>
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <span
                  class="font-headline-sm text-headline-sm font-bold tracking-tight text-white uppercase"
                  >4. BÁO CÁO SỰ CỐ KHẨN CẤP</span
                >
                <span
                  v-if="emergencyStatus.confirmed"
                  class="bg-white/20 text-white font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold uppercase"
                  >ĐÃ BÁO ĐỘNG</span
                >
              </div>
              <span class="font-body-sm text-body-sm text-white/90 leading-tight mt-0.5">{{
                emergencyDescText
              }}</span>
            </div>
          </div>
          <span class="material-symbols-outlined text-white text-[28px]"
            >notification_important</span
          >
        </button>

        <!-- BUTTON 5: HOÀN THÀNH CHUYẾN -->
        <div
          class="w-full bg-surface-container-highest text-on-surface rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-space-md">
              <div
                class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0"
              >
                <span class="material-symbols-outlined text-primary text-[28px]">flag</span>
              </div>
              <div class="flex flex-col">
                <span class="font-headline-sm text-headline-sm font-bold tracking-tight uppercase"
                  >5. HOÀN THÀNH CHUYẾN</span
                >
                <span class="font-body-sm text-body-sm text-on-surface-variant leading-tight mt-0.5"
                  >Cập bến Phả Lại an toàn • Chốt tiêu hao D.O</span
                >
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 pt-1">
            <div
              class="flex-1 bg-surface-container-lowest rounded-lg px-3 py-2 flex items-center justify-between shadow-sm"
            >
              <div class="flex flex-col">
                <span
                  class="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium"
                  >Dầu D.O thực tế</span
                >
                <input
                  ref="fuelInput"
                  v-model="fuelValue"
                  type="number"
                  placeholder="VD: 780"
                  class="bg-transparent font-headline-sm text-headline-sm font-bold text-on-surface outline-none w-full placeholder:text-outline-variant p-0"
                />
              </div>
              <span class="font-label-md text-label-md text-on-surface-variant font-bold">LÍT</span>
            </div>
            <button
              type="button"
              class="h-14 px-5 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg font-bold uppercase shrink-0 shadow active:bg-primary-container transition-colors flex items-center justify-center gap-1"
              @click="completeTrip"
            >
              <span>CHỐT</span>
              <span class="material-symbols-outlined text-[18px]">task_alt</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Dispatch & Comms Bar -->
      <div class="w-full grid grid-cols-2 gap-2 mt-2">
        <a
          :href="`tel:${dispatchPhone}`"
          class="h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center gap-2 shadow-sm active:bg-surface-container transition-colors"
        >
          <span class="material-symbols-outlined text-primary text-[20px]">phone_in_talk</span>
          <span class="font-label-md text-label-md font-bold text-on-surface">ĐIỀU HÀNH CA TRỰC</span>
        </a>
        <a
          href="tel:16"
          class="h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center gap-2 shadow-sm active:bg-surface-container transition-colors"
        >
          <span class="material-symbols-outlined text-secondary text-[20px]">radio</span>
          <span class="font-label-md text-label-md font-bold text-on-surface">VHF KÊNH 16</span>
        </a>
      </div>

      <!-- Status Sync Footer -->
      <div class="flex items-center justify-center gap-2 py-1">
        <span class="w-2 h-2 rounded-full bg-tertiary"></span>
        <span class="font-label-sm text-label-sm text-on-surface-variant"
          >GPS Trực tuyến • Đồng bộ đám mây 5s trước (AIS V1.4)</span
        >
      </div>
    </div>

    <!-- ================= MODAL 1: ĐANG CHỜ ================= -->
    <div
      class="fixed inset-0 z-50 transition-opacity duration-300"
      :class="waitingModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <div class="absolute inset-0 bg-on-surface/50 backdrop-blur-sm" @click="closeWaitingModal"></div>
      <div
        class="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-surface rounded-t-2xl shadow-2xl p-space-md flex flex-col gap-space-md transform transition-transform duration-300 ease-out"
        :class="waitingModalOpen ? 'translate-y-0' : 'translate-y-full'"
      >
        <div class="flex flex-col items-center gap-2">
          <div class="w-12 h-1.5 bg-outline-variant/60 rounded-full"></div>
          <div class="flex items-center justify-between w-full mt-1">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-secondary text-[26px]">pause_circle</span>
              <div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">
                  Khai Báo Trạng Thái: Đang Chờ
                </h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  Chọn lý do để gửi báo cáo tức thì về điều hành luồng
                </p>
              </div>
            </div>
            <button
              type="button"
              class="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant active:bg-surface-container-highest cursor-pointer"
              @click="closeWaitingModal"
            >
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        <div
          class="bg-surface-container-low border border-surface-container-high rounded-xl p-3 flex items-center justify-between"
        >
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[20px]">my_location</span>
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium"
                >Tọa độ GPS Luồng</span
              >
              <span class="font-label-md text-label-md font-bold text-on-surface"
                >Km 38.2 Luồng Kinh Thầy (20°58'N - 106°22'E)</span
              >
            </div>
          </div>
          <div class="flex flex-col items-end">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium"
              >Tem thời gian</span
            >
            <span class="font-label-md text-label-md font-bold text-primary">{{ waitingModalTime }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-2.5">
          <button
            v-for="opt in waitingOptions"
            :key="opt.id"
            type="button"
            class="w-full text-left border-2 rounded-xl p-3.5 shadow-sm transition-all flex items-center justify-between cursor-pointer"
            :class="
              selectedWaitingOption?.id === opt.id
                ? 'bg-surface-container-high border-primary'
                : 'bg-surface-container-lowest border-transparent active:bg-surface-container-low'
            "
            @click="selectWaitingOption(opt)"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center font-headline-sm font-bold shrink-0"
              >
                {{ opt.id }}
              </div>
              <div class="flex flex-col">
                <span class="font-label-lg text-label-lg font-bold text-on-surface">{{ opt.title }}</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">{{ opt.sub }}</span>
              </div>
            </div>
            <div
              class="w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors"
              :class="
                selectedWaitingOption?.id === opt.id
                  ? 'border-primary bg-primary text-on-primary'
                  : 'border-outline-variant text-transparent'
              "
            >
              <span class="material-symbols-outlined text-[18px]">check</span>
            </div>
          </button>
        </div>

        <div class="flex items-center gap-2 pt-1 pb-safe">
          <button
            type="button"
            class="w-1/3 h-12 bg-surface-container-high text-on-surface rounded-xl font-label-lg text-label-lg font-bold uppercase transition-colors active:bg-surface-container-highest cursor-pointer"
            @click="closeWaitingModal"
          >
            Đóng
          </button>
          <button
            type="button"
            class="flex-1 h-12 bg-primary text-on-primary rounded-xl font-label-lg text-label-lg font-bold uppercase shadow flex items-center justify-center gap-1.5 transition-colors active:bg-primary-container cursor-pointer"
            @click="confirmWaitingSelection"
          >
            <span class="material-symbols-outlined text-[20px]">send</span>
            <span>Xác Nhận &amp; Gửi VTS</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ================= MODAL 2: BÁO CÁO SỰ CỐ KHẨN CẤP (VÙNG ĐỎ) ================= -->
    <div
      class="fixed inset-0 z-50 transition-opacity duration-300"
      :class="emergencyModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeEmergencyModal"></div>
      <div
        class="absolute bottom-0 left-0 right-0 max-h-[88vh] overflow-y-auto bg-surface rounded-t-2xl shadow-2xl p-space-md flex flex-col gap-space-md transform transition-transform duration-300 ease-out border-t-4 border-error"
        :class="emergencyModalOpen ? 'translate-y-0' : 'translate-y-full'"
      >
        <div class="flex flex-col items-center gap-2">
          <div class="w-12 h-1.5 bg-error/40 rounded-full"></div>
          <div class="flex items-center justify-between w-full mt-1">
            <div class="flex items-center gap-2">
              <div
                class="w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center shrink-0 animate-pulse"
              >
                <span class="material-symbols-outlined text-[26px]">warning</span>
              </div>
              <div>
                <h3 class="font-headline-sm text-headline-sm text-error uppercase font-bold tracking-tight">
                  Khai Báo Sự Cố Khẩn Cấp
                </h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant font-medium">
                  Báo động ưu tiên Vùng Đỏ đến Trung tâm Cứu hộ &amp; VTS
                </p>
              </div>
            </div>
            <button
              type="button"
              class="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant active:bg-surface-container-highest cursor-pointer"
              @click="closeEmergencyModal"
            >
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        <div
          class="bg-error-container/30 border border-error/30 rounded-xl p-3 flex items-center justify-between"
        >
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-error text-[22px] animate-bounce">fmd_bad</span>
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm text-on-error-container uppercase font-bold"
                >Vị trí cấp cứu GPS</span
              >
              <span class="font-label-md text-label-md font-bold text-on-surface"
                >Km 38.2 Sông Kinh Thầy ({{ trip.name }})</span
              >
            </div>
          </div>
          <div class="flex flex-col items-end">
            <span class="font-label-sm text-label-sm text-error uppercase font-bold">Tem thời gian</span>
            <span class="font-label-md text-label-md font-bold text-error">{{ emergencyModalTime }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-2.5">
          <button
            v-for="opt in emergencyOptions"
            :key="opt.id"
            type="button"
            class="w-full text-left border-2 rounded-xl p-3.5 shadow-sm transition-all flex items-center justify-between cursor-pointer"
            :class="
              selectedEmergencyOption?.id === opt.id
                ? 'bg-error-container border-error'
                : 'bg-surface-container-lowest border-transparent active:bg-error-container/20'
            "
            @click="selectEmergencyOption(opt)"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-lg bg-surface-container-high text-error flex items-center justify-center font-headline-sm font-bold shrink-0"
              >
                {{ opt.id }}
              </div>
              <div class="flex flex-col">
                <span class="font-label-lg text-label-lg font-bold text-on-surface">{{ opt.title }}</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">{{ opt.sub }}</span>
              </div>
            </div>
            <div
              class="w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors"
              :class="
                selectedEmergencyOption?.id === opt.id
                  ? 'border-error bg-error text-on-error'
                  : 'border-outline-variant text-transparent'
              "
            >
              <span class="material-symbols-outlined text-[18px]">check</span>
            </div>
          </button>
        </div>

        <div class="flex items-center gap-2 pt-1 pb-safe">
          <button
            type="button"
            class="w-1/3 h-12 bg-surface-container-high text-on-surface rounded-xl font-label-lg text-label-lg font-bold uppercase transition-colors active:bg-surface-container-highest cursor-pointer"
            @click="closeEmergencyModal"
          >
            Hủy Bỏ
          </button>
          <button
            type="button"
            class="flex-1 h-12 bg-error text-on-error rounded-xl font-label-lg text-label-lg font-bold uppercase shadow flex items-center justify-center gap-1.5 transition-opacity active:opacity-90 cursor-pointer"
            @click="confirmEmergencySelection"
          >
            <span class="material-symbols-outlined text-[22px]">notification_important</span>
            <span>PHÁT BÁO ĐỘNG VÙNG ĐỎ</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, ref as vueRef, computed, onBeforeUnmount } from 'vue'

// ---------- Static trip / telemetry data (replace with props or API data) ----------
const trip = ref({
  name: 'Tàu HP-9182',
  tonnage: '450T',
  cargo: 'Clinker rời',
  code: 'ST-2025-089',
  captain: 'TT. Nguyễn Văn Hưng',
  engineHours: '04h15m',
  distanceKm: 68.4,
  route: 'Đoạn Xá (HP) ➔ Cảng Phả Lại',
  eta: '14:35',
})

const telemetry = ref({
  speed: 13.8,
  distanceRun: 38.2,
  progress: 56,
})

const departureTime = ref('09:00 Sáng')
const dispatchPhone = ref('0904123456')

// ---------- Toast ----------
const toast = ref({ visible: false, message: '', icon: 'check_circle' })
let toastTimeout = null

function showToast(message, icon = 'check_circle') {
  toast.value = { visible: true, message, icon }
  clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => {
    toast.value.visible = false
  }, 4000)
}
onBeforeUnmount(() => clearTimeout(toastTimeout))

function formatCurrentTime() {
  const now = new Date()
  const h = String(now.getHours()).padStart(2, '0')
  const m = String(now.getMinutes()).padStart(2, '0')
  const s = String(now.getSeconds()).padStart(2, '0')
  return `${h}:${m}:${s}`
}

// ---------- Milestone (Button 2) ----------
function confirmMilestone() {
  showToast('Đã ghi nhận mốc Cầu Phú Lương (Km 42)!', 'add_location')
}

// ---------- Waiting modal (Button 3) ----------
const waitingModalOpen = ref(false)
const waitingModalTime = ref('--:--:--')
const selectedWaitingOption = ref(null)
const waitingStatus = ref({ confirmed: false, title: '', sub: '' })

const waitingOptions = [
  { id: 1, title: 'Chờ Bến Dỡ', sub: 'Cầu cảng kín bãi, chưa tiếp nhận' },
  { id: 2, title: 'Chờ Con Nước', sub: 'Đợi đỉnh triều để vượt cạn' },
  { id: 3, title: 'Chờ Tĩnh Không', sub: 'Cầu xe lửa / đường điện thấp' },
  { id: 4, title: 'Vật Cản Luồng', sub: 'Tàu trước neo, đăng đáy cản trở' },
]

const waitingBadgeText = computed(() =>
  waitingStatus.value.confirmed ? `ĐANG CHỜ: ${waitingStatus.value.title.toUpperCase()}` : 'SẴN SÀNG'
)
const waitingDescText = computed(() =>
  waitingStatus.value.confirmed
    ? `${waitingStatus.value.title} • ${waitingStatus.value.sub}`
    : 'Vật cản luồng, chờ con nước hoặc chờ cầu bốc dỡ'
)

function openWaitingModal() {
  waitingModalTime.value = formatCurrentTime()
  waitingModalOpen.value = true
}
function closeWaitingModal() {
  waitingModalOpen.value = false
}
function selectWaitingOption(opt) {
  selectedWaitingOption.value = opt
}
function confirmWaitingSelection() {
  if (!selectedWaitingOption.value) {
    selectWaitingOption(waitingOptions[0])
  }
  const opt = selectedWaitingOption.value
  waitingStatus.value = { confirmed: true, title: opt.title, sub: opt.sub }
  closeWaitingModal()
  showToast(`Đã gửi bản tin [Đang Chờ: ${opt.title}] về Trung tâm điều hành VTS`, 'hourglass_top')
}

// ---------- Emergency modal (Button 4) ----------
const emergencyModalOpen = ref(false)
const emergencyModalTime = ref('--:--:--')
const selectedEmergencyOption = ref(null)
const emergencyStatus = ref({ confirmed: false, title: '', sub: '' })

const emergencyOptions = [
  { id: 1, title: 'Sương Mù Dày', sub: "Tầm nhìn < 50m, giảm tốc dạt bờ" },
  { id: 2, title: 'Hỏng Động Cơ / Lái', sub: 'Máy chết tải hoặc mất điều khiển' },
  { id: 3, title: 'Mắc Cạn Đáy', sub: 'Bụng tàu cấn cát, cần lai dắt' },
  { id: 4, title: 'Thủng Vỏ / Vào Nước', sub: 'Nguy cơ chìm hầm hàng' },
]

const emergencyDescText = computed(() =>
  emergencyStatus.value.confirmed
    ? `${emergencyStatus.value.title} (${emergencyStatus.value.sub}) • VTS đang điều phối ứng cứu!`
    : 'Sự cố máy, thủng vỏ, mắc cạn • Báo Vùng Đỏ lập tức'
)

function openEmergencyModal() {
  emergencyModalTime.value = formatCurrentTime()
  emergencyModalOpen.value = true
}
function closeEmergencyModal() {
  emergencyModalOpen.value = false
}
function selectEmergencyOption(opt) {
  selectedEmergencyOption.value = opt
}
function confirmEmergencySelection() {
  if (!selectedEmergencyOption.value) {
    selectEmergencyOption(emergencyOptions[1])
  }
  const opt = selectedEmergencyOption.value
  emergencyStatus.value = { confirmed: true, title: opt.title, sub: opt.sub }
  closeEmergencyModal()
  showToast('ĐÃ PHÁT BÁO ĐỘNG KHẨN CẤP ĐẾN CA TRỰC & VTS!', 'e911_emergency')
}

// ---------- Complete trip (Button 5) ----------
const fuelValue = ref('')
const fuelInput = vueRef(null)

function completeTrip() {
  const val = String(fuelValue.value).trim()
  if (!val) {
    showToast('Vui lòng nhập số lít dầu D.O thực tế!', 'info')
    fuelInput.value?.focus()
    return
  }
  showToast(`Hoàn thành chuyến! Dầu tiêu thụ: ${val} Lít`, 'check_circle')
}
</script>