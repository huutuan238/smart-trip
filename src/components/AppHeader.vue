<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navItems = [
  { to: '/', label: 'Trang Chủ' },
  { to: '/tao-chuyen-moi', label: 'Tạo Chuyến Mới' },
  { to: '/giam-sat-ngoai-le', label: 'Giám Sát Hành Trình' },
  { to: '/doi-soat-p-l', label: 'Đối Soát P&L' },
  { to: '/ship-captain', label: 'Cập Nhật Chuyến Tàu' },
]

function closeMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
    <div class="h-16 w-full px-4 md:px-margin flex items-center justify-between gap-space-md">
      <div class="flex items-center gap-space-sm md:gap-space-lg shrink-0 min-w-0">
        <div class="bg-on-background p-1.5 rounded-lg shadow-sm flex items-center ">
          <router-link to="/">
          <img
            alt="SmartTrip IWT logo"
            class="h-7 md:h-8 w-auto object-contain shrink-0"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XI-9jeKrti5cU30KhH1ZafcNfL28pKuWjDudTjvKHT6EJA0AuRJ7PQo4DZ4pwbxOxsTS814GfB7PD8XdsdAh4Fkb0rQeOiOBEhMvsEeAzSOxIvJjaVK2-cAN9vmuNcXD_M9uz_bFp8gILlhkLkHMZO3fiNdyJi6IS6RjByT45auN9UvA8e5VJJoEC-3HmYDM97YwdWFpDoTFIQQoKsVvJQJ10PjSxLlHrwX8Vq7t9IfbprFh4FZ7cMvg"
          />
        </router-link>
        </div>
        <div class="h-6 w-[1px] bg-outline-variant/50 hidden lg:block"></div>
        <nav class="hidden xl:flex items-center gap-space-xs">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="[
              'px-space-md py-space-xs rounded-lg font-label-lg text-label-lg transition-colors',
              route.path === item.to
                ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface',
            ]"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>

      <div class="flex items-center gap-space-sm md:gap-space-md shrink-0">
        <div class="hidden md:flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-low rounded-full">
          <span class="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
          <span class="font-label-sm text-label-sm text-tertiary font-semibold">AIS / VTS</span>
          <span class="font-label-sm text-label-sm text-on-surface-variant">Trực tuyến 98.4%</span>
        </div>

        <button
          aria-label="Thông báo"
          class="relative p-space-xs rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
          type="button"
        >
          <span class="material-symbols-outlined text-[22px]">notifications</span>
          <span class="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
        </button>

        <div class="h-5 w-[1px] bg-outline-variant/40 hidden sm:block"></div>

        <div class="hidden sm:flex items-center gap-space-sm pl-space-xs">
          <div class="hidden md:flex flex-col text-right">
            <span class="font-label-md text-label-md text-on-surface font-semibold leading-tight">Trần Hoàng Nam</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant leading-tight">Điều hành viên</span>
          </div>
          <img
            alt="Profile"
            class="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant"
            src="https://lh3.googleusercontent.com/aida/AEtjO1X8YF7UDyNtdAB0tP_cgRAp9ySh_rKeoIMxWXYX9E21HGBgaG4jnbmvu-FTIe6kDCTYJl0OOoj4Lhrrbme_bsCSWcWJtFhxkEEQn-UILmOpHmFtVwsJXbb93rvv5_vwTHCobhSWyD55ma2th7S12oghsjYBAaHyOOpiYSbQDs687Dgyzuu7O6JbnYvhKaAsFLkMDloo6oDMh8ve7gM6LM9mQuanuUTFzOpfmDUQHW0IGkqfKYtMQlgouYU"
          />
        </div>

        <!-- Nút hamburger cho mobile/tablet -->
        <button
          aria-label="Mở menu"
          class="xl:hidden p-space-xs rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
          type="button"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span class="material-symbols-outlined text-[24px]">
            {{ mobileMenuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>
    </div>

    <!-- Menu mobile sổ xuống -->
    <Transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="mobileMenuOpen"
        class="xl:hidden absolute top-16 left-0 right-0 bg-surface-container-lowest shadow-lg border-t border-outline-variant/30 px-4 py-space-sm flex flex-col gap-space-xs"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :class="[
            'px-space-md py-space-sm rounded-lg font-label-lg text-label-lg transition-colors',
            route.path === item.to
              ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
              : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface',
          ]"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>

        <!-- Thông tin phụ chỉ hiện trên mobile nhỏ -->
        <div class="sm:hidden flex items-center justify-between px-space-md py-space-sm mt-space-xs border-t border-outline-variant/30 pt-space-sm">
          <div class="flex items-center gap-space-sm">
            <img
              alt="Profile"
              class="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant"
              src="https://lh3.googleusercontent.com/aida/AEtjO1X8YF7UDyNtdAB0tP_cgRAp9ySh_rKeoIMxWXYX9E21HGBgaG4jnbmvu-FTIe6kDCTYJl0OOoj4Lhrrbme_bsCSWcWJtFhxkEEQn-UILmOpHmFtVwsJXbb93rvv5_vwTHCobhSWyD55ma2th7S12oghsjYBAaHyOOpiYSbQDs687Dgyzuu7O6JbnYvhKaAsFLkMDloo6oDMh8ve7gM6LM9mQuanuUTFzOpfmDUQHW0IGkqfKYtMQlgouYU"
            />
            <div class="flex flex-col">
              <span class="font-label-md text-label-md text-on-surface font-semibold leading-tight">Trần Hoàng Nam</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant leading-tight">Điều hành viên</span>
            </div>
          </div>
          <div class="flex items-center gap-space-xs">
            <span class="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
            <span class="font-label-sm text-label-sm text-tertiary font-semibold">98.4%</span>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>