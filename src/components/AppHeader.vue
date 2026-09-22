<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { to: '/', label: 'Trang Chủ' },
  { to: '/tao-chuyen-moi', label: 'Tạo Chuyến Mới' },
  { to: '/giam-sat-ngoai-le', label: 'Giám Sát Ngoại Lệ' },
  { to: '/doi-soat-p-l', label: 'Đối Soát P&L' },
  { to: '/ban-do-thuy-van', label: 'Bản Đồ Thủy Văn' },
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
    <div class="h-16 w-full px-margin flex items-center justify-between gap-space-md">
      <div class="flex items-center gap-space-lg shrink-0">
        <div class="flex items-center gap-space-sm">
          <img
            alt="SmartTrip IWT logo"
            class="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XI-9jeKrti5cU30KhH1ZafcNfL28pKuWjDudTjvKHT6EJA0AuRJ7PQo4DZ4pwbxOxsTS814GfB7PD8XdsdAh4Fkb0rQeOiOBEhMvsEeAzSOxIvJjaVK2-cAN9vmuNcXD_M9uz_bFp8gILlhkLkHMZO3fiNdyJi6IS6RjByT45auN9UvA8e5VJJoEC-3HmYDM97YwdWFpDoTFIQQoKsVvJQJ10PjSxLlHrwX8Vq7t9IfbprFh4FZ7cMvg"
          />
          <div class="flex flex-col">
            <span class="font-headline-sm text-headline-sm text-primary tracking-tight leading-none">
              SmartTrip <span class="text-secondary">IWT</span>
            </span>
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Hàng hải số ĐTNĐ
            </span>
          </div>
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
      <div class="flex items-center gap-space-md shrink-0">
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
        <div class="h-5 w-[1px] bg-outline-variant/40"></div>
        <div class="flex items-center gap-space-sm pl-space-xs">
          <div class="hidden sm:flex flex-col text-right">
            <span class="font-label-md text-label-md text-on-surface font-semibold leading-tight">Trần Hoàng Nam</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant leading-tight">Điều hành viên</span>
          </div>
          <img
            alt="Profile"
            class="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant"
            src="https://lh3.googleusercontent.com/aida/AEtjO1X8YF7UDyNtdAB0tP_cgRAp9ySh_rKeoIMxWXYX9E21HGBgaG4jnbmvu-FTIe6kDCTYJl0OOoj4Lhrrbme_bsCSWcWJtFhxkEEQn-UILmOpHmFtVwsJXbb93rvv5_vwTHCobhSWyD55ma2th7S12oghsjYBAaHyOOpiYSbQDs687Dgyzuu7O6JbnYvhKaAsFLkMDloo6oDMh8ve7gM6LM9mQuanuUTFzOpfmDUQHW0IGkqfKYtMQlgouYU"
          />
        </div>
      </div>
    </div>
  </header>
</template>
