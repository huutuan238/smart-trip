<template>
  <!-- Main Container -->
  <div class="w-full px-margin py-space-md space-y-space-md">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-space-sm">
        <span class="font-headline-sm text-headline-sm text-on-surface"
          >Danh Sách Tàu Đang Trong Hành Trình</span
        >
        <span class="text-on-surface-variant font-label-sm text-label-sm"
          >Phân tầng rủi ro thời gian thực (Đỏ - Vàng - Xanh)</span
        >
      </div>
      <div
        class="hidden sm:flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm"
      >
        <span class="flex items-center gap-1"
          ><span class="w-2.5 h-2.5 rounded-full bg-error"></span> Vùng Đỏ: Sự cố</span
        >
        <span class="flex items-center gap-1"
          ><span class="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
          Vùng Vàng: Cảnh báo nhẹ / Ping</span
        >
        <span class="flex items-center gap-1"
          ><span class="w-2.5 h-2.5 rounded-full bg-tertiary"></span> Vùng Xanh: Đúng kế hoạch</span
        >
      </div>
    </div>

    <!-- 1. VÙNG ĐỎ -->
    <div class="space-y-space-sm">
      <div
        class="flex items-center justify-between px-space-sm py-1 rounded bg-error-container/40 border-l-4 border-error"
      >
        <div class="flex items-center gap-space-xs">
          <span class="material-symbols-outlined text-[18px] text-error font-bold animate-pulse"
            >crisis_alert</span
          >
          <span class="font-label-md text-label-md font-bold text-error uppercase tracking-wider"
            >Vùng Đỏ - Cảnh Báo Khẩn Cấp (Sự Cố Luồng &amp; Mắc Cạn)</span
          >
          <span
            class="px-space-xs py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-semibold"
            >{{ redShips.length }} Tàu</span
          >
        </div>
        <span class="font-label-sm text-label-sm text-error font-medium"
          >Cần kích hoạt điều động cứu hộ ngay</span
        >
      </div>

      <div
        v-for="ship in redShips"
        :key="ship.id"
        class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md relative overflow-hidden ring-1 ring-error/30"
      >
        <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-error"></div>
        <div class="pl-2 space-y-space-md">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
            <div class="flex items-start sm:items-center gap-space-sm flex-wrap">
              <div
                class="w-10 h-10 rounded-lg bg-error-container text-error flex items-center justify-center shrink-0"
              >
                <span class="material-symbols-outlined text-[24px]">crisis_alert</span>
              </div>
              <ShipHeaderInfo :ship="ship" />
            </div>
            <div class="flex items-center gap-space-sm self-start lg:self-center flex-wrap">
              <span
                class="px-space-sm py-1 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold flex items-center gap-1"
              >
                <span class="material-symbols-outlined text-[15px]">report</span>
                {{ ship.statusBadge.text }}
              </span>
              <div class="text-right">
                <div class="font-label-sm text-label-sm text-error font-semibold">
                  {{ ship.metricTop }}
                </div>
                <div class="font-label-sm text-label-sm text-on-surface-variant">
                  {{ ship.metricBottom }}
                </div>
              </div>
            </div>
          </div>

          <ShipProgress :ship="ship" bar-class="bg-error" />

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-sm pt-space-xs text-body-sm">
            <div
              v-for="(stat, i) in ship.stats"
              :key="i"
              :class="['rounded-lg p-2', stat.highlight ? 'bg-error-container/40' : 'bg-surface-container-low']"
            >
              <span
                :class="['font-label-sm text-label-sm block', stat.highlight ? 'text-error font-semibold' : 'text-on-surface-variant']"
                >{{ stat.label }}</span
              >
              <span
                :class="['font-label-md text-label-md', stat.strike ? 'text-outline line-through' : stat.highlight ? 'font-bold text-error' : 'font-semibold text-on-surface']"
                >{{ stat.value }}</span
              >
            </div>
            <div class="col-span-2 flex items-center justify-end gap-space-xs">
              <button
                v-for="(action, i) in ship.actions"
                :key="i"
                :class="action.classes"
              >
                <span :class="['material-symbols-outlined text-[16px]', action.iconClass]">{{
                  action.icon
                }}</span>
                {{ action.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. VÙNG VÀNG -->
    <div class="space-y-space-sm pt-space-xs">
      <div
        class="flex items-center justify-between px-space-sm py-1 rounded bg-secondary-fixed/50 border-l-4 border-secondary"
      >
        <div class="flex items-center gap-space-xs flex-wrap">
          <span class="material-symbols-outlined text-[18px] text-on-secondary-fixed font-bold"
            >notifications_active</span
          >
          <span
            class="font-label-md text-label-md font-bold text-on-secondary-fixed uppercase tracking-wider"
            >Vùng Vàng - Cảnh Báo Nhẹ &amp; Đang Chờ (Ping Audio Điều Hành)</span
          >
          <span
            class="px-space-xs py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold"
            >{{ yellowShips.length }} Tàu</span
          >
          <span
            class="px-space-xs py-0.5 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-medium flex items-center gap-1"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
            Chậm 1-2h hoặc Thuyền trưởng bấm "Đang Chờ"
          </span>
        </div>
        <div
          class="flex items-center gap-space-xs font-label-sm text-label-sm text-on-secondary-fixed-variant"
        >
          <span class="material-symbols-outlined text-[16px] text-secondary">volume_up</span>
          <span>Ping âm thanh đã kích hoạt (chu kỳ 5p)</span>
        </div>
      </div>

      <div
        v-for="ship in yellowShips"
        :key="ship.id"
        class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md relative overflow-hidden ring-1 ring-secondary-container"
      >
        <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
        <div class="pl-2 space-y-space-md">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
            <div class="flex items-start sm:items-center gap-space-sm flex-wrap">
              <div
                class="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center shrink-0 ring-2 ring-secondary-container"
              >
                <span class="material-symbols-outlined text-[24px]">{{ ship.icon }}</span>
              </div>
              <ShipHeaderInfo :ship="ship">
                <span
                  v-if="ship.pingTag"
                  class="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold flex items-center gap-1"
                >
                  <span class="material-symbols-outlined text-[13px]">campaign</span>
                  {{ ship.pingTag }}
                </span>
              </ShipHeaderInfo>
            </div>
            <div class="flex items-center gap-space-sm self-start lg:self-center flex-wrap">
              <span
                class="px-space-sm py-1 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1"
              >
                <span class="material-symbols-outlined text-[15px]">schedule</span>
                {{ ship.statusBadge.text }}
              </span>
              <div class="text-right">
                <div class="font-label-sm text-label-sm text-secondary font-semibold">
                  {{ ship.metricTop }}
                </div>
                <div class="font-label-sm text-label-sm text-on-surface-variant">
                  {{ ship.metricBottom }}
                </div>
              </div>
            </div>
          </div>

          <ShipProgress :ship="ship" bar-class="bg-amber-500" />

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-sm pt-space-xs text-body-sm">
            <div v-for="(stat, i) in ship.stats" :key="i" class="bg-surface-container-low rounded-lg p-2">
              <span
                :class="['font-label-sm text-label-sm block', stat.highlight ? 'text-secondary font-semibold' : 'text-on-surface-variant']"
                >{{ stat.label }}</span
              >
              <span
                :class="['font-label-md text-label-md flex items-center gap-1', stat.highlight ? 'font-bold text-secondary' : 'font-semibold text-on-surface']"
              >
                <span v-if="stat.icon" class="material-symbols-outlined text-[16px]">{{
                  stat.icon
                }}</span>
                {{ stat.value }}
              </span>
            </div>
            <div class="col-span-2 flex items-center justify-end gap-space-xs">
              <button v-for="(action, i) in ship.actions" :key="i" :class="action.classes">
                <span :class="['material-symbols-outlined text-[16px]', action.iconClass]">{{
                  action.icon
                }}</span>
                {{ action.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. VÙNG XANH -->
    <div class="space-y-space-sm pt-space-xs">
      <div
        class="flex items-center justify-between px-space-sm py-1 rounded bg-surface-container-low border-l-4 border-tertiary"
      >
        <div class="flex items-center gap-space-xs">
          <span class="material-symbols-outlined text-[18px] text-tertiary font-bold">check_circle</span>
          <span class="font-label-md text-label-md font-bold text-tertiary uppercase tracking-wider"
            >Vùng Xanh - Đúng Tuyến &amp; Thông Luồng (On-Track)</span
          >
          <span
            class="px-space-xs py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm font-semibold"
            >{{ greenShips.length }} Tàu</span
          >
        </div>
        <span class="font-label-sm text-label-sm text-tertiary font-medium"
          >Hành trình an toàn, mớn nước đạt chuẩn</span
        >
      </div>

      <div
        v-for="ship in greenShips"
        :key="ship.id"
        class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md relative overflow-hidden"
      >
        <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"></div>
        <div class="pl-2 space-y-space-md">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
            <div class="flex items-start sm:items-center gap-space-sm flex-wrap">
              <div
                class="w-10 h-10 rounded-lg bg-surface-container-low text-tertiary flex items-center justify-center shrink-0"
              >
                <span class="material-symbols-outlined text-[24px]">{{ ship.icon }}</span>
              </div>
              <ShipHeaderInfo :ship="ship" />
            </div>
            <div class="flex items-center gap-space-sm self-start lg:self-center flex-wrap">
              <span
                class="px-space-sm py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-label-sm font-semibold flex items-center gap-1"
              >
                <span class="material-symbols-outlined text-[15px]">{{ ship.statusBadge.icon }}</span>
                {{ ship.statusBadge.text }}
              </span>
              <div class="text-right">
                <div
                  :class="['font-label-sm text-label-sm font-semibold', ship.metricTopClass || 'text-tertiary']"
                >
                  {{ ship.metricTop }}
                </div>
                <div class="font-label-sm text-label-sm text-on-surface-variant">
                  {{ ship.metricBottom }}
                </div>
              </div>
            </div>
          </div>

          <ShipProgress :ship="ship" bar-class="bg-primary-container" current-icon-class="text-tertiary" />

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-sm pt-space-xs text-body-sm">
            <div v-for="(stat, i) in ship.stats" :key="i" class="bg-surface-container-low rounded-lg p-2">
              <span
                :class="['font-label-sm text-label-sm block', stat.highlight ? 'text-tertiary font-semibold' : 'text-on-surface-variant']"
                >{{ stat.label }}</span
              >
              <span
                :class="['font-label-md text-label-md', stat.highlight ? 'font-bold text-tertiary' : 'font-semibold text-on-surface']"
                >{{ stat.value }}</span
              >
            </div>
            <div class="col-span-2 flex items-center justify-end gap-space-xs">
              <button v-for="(action, i) in ship.actions" :key="i" :class="action.classes">
                <span :class="['material-symbols-outlined text-[16px]', action.iconClass]">{{
                  action.icon
                }}</span>
                {{ action.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, h } from 'vue'

// ---------------- Reusable sub-parts (kept local, no separate files) ----------------

// Header block: vessel name / trip code / vessel desc + captain / route
const ShipHeaderInfo = (props, { slots }) => {
  const ship = props.ship
  return h('div', [
    h('div', { class: 'flex items-center gap-space-xs flex-wrap' }, [
      h('span', { class: 'font-headline-sm text-headline-sm text-on-surface font-bold' }, ship.name),
      h(
        'span',
        {
          class:
            'px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-medium',
        },
        ship.tripCode
      ),
      h('span', { class: 'font-label-sm text-label-sm text-on-surface-variant' }, `• ${ship.vesselDesc}`),
      slots.default ? slots.default() : null,
    ]),
    h(
      'div',
      { class: 'flex items-center gap-space-sm text-body-sm text-body-sm text-on-surface-variant mt-0.5' },
      [
        h('span', { class: 'font-medium text-on-surface' }, `TT: ${ship.captain}`),
        h('span', [
          '• Tuyến: ',
          h('strong', { class: 'text-on-surface' }, ship.origin),
          ' → ',
          h('strong', { class: 'text-on-surface' }, ship.destination),
          ` [${ship.distanceKm} Km]`,
        ]),
      ]
    ),
  ])
}
ShipHeaderInfo.props = ['ship']

// Progress block: current-position line + progress bar + milestone dots
const ShipProgress = (props) => {
  const ship = props.ship
  return h('div', { class: 'bg-surface-container-low rounded-lg p-space-sm space-y-2' }, [
    h('div', { class: 'flex items-center justify-between font-label-sm text-label-sm' }, [
      h('span', { class: 'text-on-surface font-semibold flex items-center gap-1' }, [
        h(
          'span',
          { class: `material-symbols-outlined text-[16px] ${props.currentIconClass || 'text-secondary'}` },
          ship.currentIcon || 'location_on'
        ),
        `Hiện tại: ${ship.currentText} `,
        ship.currentBold ? h('strong', { class: `${ship.currentBoldClass || 'text-on-surface'} font-bold` }, ship.currentBold) : null,
      ]),
      h('span', { class: `${ship.progressLabelClass || 'text-on-surface'} font-semibold` }, ship.progressLabel),
    ]),
    h('div', { class: 'relative py-2' }, [
      h('div', { class: 'w-full bg-surface-container-high h-2 rounded-full overflow-hidden' }, [
        h('div', {
          class: `${props.barClass} h-full rounded-full transition-all`,
          style: `width: ${ship.progressPercent}%`,
        }),
      ]),
      h(
        'div',
        { class: 'flex items-center justify-between text-label-sm font-label-sm -mt-3.5 px-0.5' },
        ship.milestones.map((m) =>
          h('div', { class: `flex flex-col items-center ${m.pending ? 'opacity-40' : ''} ${m.offset || ''}` }, [
            m.pending
              ? h('div', {
                  class: 'w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest',
                })
              : h(
                  'div',
                  { class: `w-5 h-5 rounded-full flex items-center justify-center ${m.dotClass}` },
                  [h('span', { class: 'material-symbols-outlined text-[12px]' }, m.icon)]
                ),
            h('span', { class: `mt-1 ${m.labelClass || 'text-on-surface-variant font-medium'}` }, m.label),
          ])
        )
      ),
    ]),
  ])
}
ShipProgress.props = ['ship', 'barClass', 'currentIconClass']

// ---------------- Fleet data ----------------
// Each ship carries everything the template needs: header info, status badge,
// progress state, the 4-6 stat tiles and the action buttons for its zone.

const actionBase =
  'px-space-sm py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1'

const ships = [
  // ---- VÙNG ĐỎ ----
  {
    id: 'HP-8472',
    zone: 'red',
    name: 'HP-8472111',
    tripCode: 'Chuyến ST-2025-091',
    vesselDesc: 'Tàu vỏ thép 450T • Cát san lấp',
    captain: 'Phạm Bá Khoa (0912.44x.xxx)',
    origin: 'Cảng Nam Đình Vũ',
    destination: 'Cảng Hà Nam (Sông Đáy)',
    distanceKm: 118,
    statusBadge: { text: 'Mắc Cạn Luồng (Mớn hở -10cm)' },
    metricTop: 'Rò rỉ P&L: -12.5tr',
    metricBottom: 'Trễ +02h45m',
    currentIcon: 'location_on',
    currentText: "Km 18+200 Vàm Kênh (20°47'N, 106°41'E) - Vận tốc:",
    currentBold: '0.0 km/h (Đang neo khẩn cấp)',
    currentBoldClass: 'text-error',
    progressPercent: 28,
    progressLabel: 'Tiến độ: 28% (Đã đi 33.0 / 118.0 km)',
    progressLabelClass: 'text-error',
    milestones: [
      { label: 'Nam Đình Vũ (0 km)', icon: 'check', dotClass: 'bg-tertiary text-on-tertiary ring-2 ring-surface-container-lowest' },
      { label: 'Km 18+200 Vàm Kênh', labelClass: 'text-error font-bold', icon: 'anchor', dotClass: 'bg-error text-on-error ring-4 ring-error-container animate-bounce', offset: '-ml-16' },
      { pending: true, label: 'Cửa Cấm (Km 54)' },
      { pending: true, label: 'Cầu Đò Mười (Km 88)' },
      { pending: true, label: 'Hà Nam (118 km)' },
    ],
    stats: [
      { label: 'Giờ khởi hành (ETD)', value: '06:30 Hôm nay' },
      { label: 'ETA Kế hoạch', value: '16:30', strike: true },
      { label: 'ETA Dự báo mới', value: '19:15 (+2h45m)', highlight: true },
      { label: 'Thủy triều trạm Hòn Dấu', value: 'Đang rút, đỉnh triều 18:20' },
    ],
    actions: [
      { icon: 'podcasts', label: 'Đàm Thoại VHF 16', iconClass: 'text-secondary', classes: actionBase },
      {
        icon: 'emergency',
        label: 'Kích Hoạt PA-B (Hạ Tải / Kéo)',
        iconClass: '',
        classes:
          'px-space-md py-1.5 bg-error text-on-error hover:bg-on-error-container rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1 shadow-sm',
      },
    ],
  },

  // ---- VÙNG VÀNG ----
  {
    id: 'QN-3829',
    zone: 'yellow',
    icon: 'hourglass_top',
    name: 'QN-3829',
    tripCode: 'Chuyến ST-2025-090',
    vesselDesc: 'Tàu chở than 650T • Than cám 4A',
    pingTag: 'Ping Audio #VTS-90',
    captain: 'Vũ Đình Cường (0936.19x.xxx)',
    origin: 'Cảng Cẩm Phả (Quảng Ninh)',
    destination: 'Cảng Ninh Phúc (Ninh Bình)',
    distanceKm: 145,
    statusBadge: { text: 'Chờ tĩnh không cầu xe lửa Lạc Đạo (Mở 16:00)' },
    metricTop: 'Trễ: +01h15m (Trong ngưỡng Vàng)',
    metricBottom: 'Lãi dự kiến: +36.2M (31.8%)',
    currentIcon: 'location_on',
    currentText: 'Km 70.0 Cửa Lạch Tray - Khoang neo chờ thông luồng tàu hỏa (Vận tốc:',
    currentBold: '0.8 km/h - Giữ neo)',
    currentBoldClass: 'text-secondary',
    progressPercent: 48,
    progressLabel: 'Tiến độ: 48% (Đã đi 70.0 / 145.0 km)',
    progressLabelClass: 'text-secondary',
    milestones: [
      { label: 'Cẩm Phả (0 km)', icon: 'check', dotClass: 'bg-amber-500 text-white ring-2 ring-surface-container-lowest' },
      { label: 'Vịnh Bái Tử Long', icon: 'check', dotClass: 'bg-amber-500 text-white ring-2 ring-surface-container-lowest' },
      { label: 'Cầu Lạc Đạo (Đang chờ mở)', labelClass: 'text-amber-700 font-bold', icon: 'pause', dotClass: 'bg-amber-500 text-amber-950 ring-4 ring-amber-200 animate-pulse' },
      { pending: true, label: 'Sông Đáy (Km 115)' },
      { pending: true, label: 'Ninh Bình (145 km)' },
    ],
    stats: [
      { label: 'Giờ khởi hành (ETD)', value: '04:30 Sáng' },
      { label: 'ETA Điều chỉnh', value: '22:45 Tối nay (+1h15m)', highlight: true },
      { label: 'Tĩnh không cầu Lạc Đạo', value: '6.2m (Đạt chuẩn lúc 16h)', highlight: true },
      { label: 'Trạng thái Ping Audio', value: 'Đã nhận diện chờ', highlight: true, icon: 'volume_up' },
    ],
    actions: [
      { icon: 'call', label: 'Gọi Thuyền Trưởng', iconClass: 'text-secondary', classes: actionBase },
      {
        icon: 'update',
        label: 'Gia Hạn Giờ Bến Ninh Bình',
        iconClass: '',
        classes:
          'px-space-sm py-1.5 bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1 shadow-sm',
      },
    ],
  },
  // Second yellow-zone ship (TB-7712) was commented out in the source HTML;
  // add it to this array the same way as above if it should be shown.

  // ---- VÙNG XANH ----
  {
    id: 'HP-9182',
    zone: 'green',
    icon: 'navigation',
    name: 'HP-9182',
    tripCode: 'Chuyến ST-2025-089',
    vesselDesc: 'Tàu tự hành 450T • Clinker bao rời',
    captain: 'Nguyễn Văn Hưng (0903.88x.xxx)',
    origin: 'Bến Đoạn Xá (Hải Phòng)',
    destination: 'Cảng Phả Lại (Hải Dương)',
    distanceKm: 68.4,
    statusBadge: { icon: 'verified', text: 'Đúng Kế Hoạch (Mớn hở +35cm an toàn)' },
    metricTop: 'Lãi dự kiến: +19.4M',
    metricBottom: 'Biên lãi: 35.1% (Sớm 10p)',
    metricTopClass: 'text-tertiary',
    currentIcon: 'explore',
    currentText: "Km 38.2 (Ngã ba sông Kinh Thầy - Cửa Luộc, 20°58'N, 106°28'E) - Vận tốc:",
    currentBold: '13.8 km/h',
    currentBoldClass: 'text-tertiary',
    progressPercent: 56,
    progressLabel: 'Tiến độ: 56% (Đã đi 38.2 / 68.4 km)',
    progressLabelClass: 'text-primary',
    milestones: [
      { label: 'Bến Đoạn Xá', icon: 'check', dotClass: 'bg-tertiary text-on-tertiary ring-2 ring-surface-container-lowest' },
      { label: 'Cửa Cấm', icon: 'check', dotClass: 'bg-tertiary text-on-tertiary ring-2 ring-surface-container-lowest' },
      { label: 'Km 24 Kinh Thầy', icon: 'check', dotClass: 'bg-tertiary text-on-tertiary ring-2 ring-surface-container-lowest' },
      { label: 'Cầu Phú Lương (Đang qua)', labelClass: 'text-primary font-bold', icon: 'near_me', dotClass: 'bg-primary-container text-on-primary ring-4 ring-primary-fixed' },
      { pending: true, label: 'Phả Lại (Đích)' },
    ],
    stats: [
      { label: 'Giờ rời cảng (ETD)', value: '09:00 Hôm nay' },
      { label: 'ETA Kế hoạch', value: '14:45' },
      { label: 'ETA Dự báo mới', value: '14:35 (Sớm 10p)', highlight: true },
      { label: 'Trạng thái luồng', value: 'Thông luồng, sóng cấp 1', highlight: true },
    ],
    actions: [
      { icon: 'radar', label: 'Radar Luồng', iconClass: 'text-primary', classes: actionBase },
      { icon: 'chat', label: 'Tin Nhắn TT', iconClass: 'text-secondary', classes: actionBase },
      {
        icon: 'query_stats',
        label: 'Chi Tiết P&L',
        iconClass: '',
        classes:
          'px-space-sm py-1.5 bg-primary-container text-on-primary hover:bg-primary rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1',
      },
    ],
  },
  {
    id: 'ND-5521',
    zone: 'green',
    icon: 'speed',
    name: 'ND-5521',
    tripCode: 'Chuyến ST-2025-092',
    vesselDesc: 'Tàu chở thép cuộn 520T',
    captain: 'Đỗ Trọng Quân (0988.31x.xxx)',
    origin: 'Cảng Vật Cách (Hải Phòng)',
    destination: 'Cảng Khuyến Lương (Hà Nội)',
    distanceKm: 132,
    statusBadge: { icon: 'done_all', text: 'Đang Hành Trình - Luồng Thông Suốt' },
    metricTop: 'Lãi dự kiến: +39.8M',
    metricBottom: 'Vận tốc tối ưu: 14.5 km/h',
    metricTopClass: 'text-tertiary',
    currentIcon: 'explore',
    currentIconOverrideClass: 'text-primary',
    currentText: 'Km 103 Sông Hồng (Khu vực Hưng Yên) - Mớn nước an toàn +45cm',
    progressPercent: 78,
    progressLabel: 'Tiến độ: 78% (Đã đi 103.0 / 132.0 km)',
    progressLabelClass: 'text-primary',
    milestones: [
      { label: 'Vật Cách (0 km)', icon: 'check', dotClass: 'bg-tertiary text-on-tertiary ring-2 ring-surface-container-lowest' },
      { label: 'Km 45 Luộc', icon: 'check', dotClass: 'bg-tertiary text-on-tertiary ring-2 ring-surface-container-lowest' },
      { label: 'Hưng Yên (Km 103)', labelClass: 'text-primary font-bold', icon: 'near_me', dotClass: 'bg-primary-container text-on-primary ring-4 ring-primary-fixed' },
      { pending: true, label: 'Khuyến Lương (132 km)' },
    ],
    stats: [
      { label: 'Giờ khởi hành', value: '19:00 Tối qua' },
      { label: 'ETA Kế hoạch', value: '04:25 Sáng mai' },
      { label: 'ETA Mới nhất', value: '04:00 (Sớm 25p)', highlight: true },
      { label: 'Bến bốc dỡ đích', value: 'Cầu cảng số 2 (Đã chuẩn bị cẩu)' },
    ],
    actions: [
      { icon: 'send_to_mobile', label: 'Lệnh Cập Bến', iconClass: 'text-primary', classes: actionBase },
      { icon: 'visibility', label: 'Chi Tiết Tàu', iconClass: 'text-primary', classes: actionBase },
    ],
  },
  {
    id: 'TB-6218',
    zone: 'green',
    icon: 'directions_boat',
    name: 'TB-6218',
    tripCode: 'Chuyến ST-2025-095',
    vesselDesc: 'Tàu hàng rời 380T • Gạch mộc & Vật liệu',
    captain: 'Hoàng Văn Thắng (0915.22x.xxx)',
    origin: 'Cảng Thái Bình',
    destination: 'Cảng Việt Trì (Phú Thọ)',
    distanceKm: 110,
    statusBadge: { icon: 'check_circle', text: 'Đúng Hành Trình' },
    metricTop: 'Dự kiến lãi: +14.2M',
    metricBottom: 'Vận tốc: 12.0 km/h',
    metricTopClass: 'text-on-surface',
    currentIcon: 'location_on',
    currentIconOverrideClass: 'text-primary',
    currentText: 'Km 22 Sông Luộc (Vận tốc ổn định 12.0 km/h)',
    progressPercent: 20,
    progressLabel: 'Tiến độ: 20% (Đã đi 22.0 / 110.0 km)',
    progressLabelClass: 'text-on-surface',
    milestones: [
      { label: 'Thái Bình (0 km)', icon: 'check', dotClass: 'bg-tertiary text-on-tertiary ring-2 ring-surface-container-lowest' },
      { label: 'Km 22 Sông Luộc', labelClass: 'text-primary font-bold', icon: 'near_me', dotClass: 'bg-primary-container text-on-primary ring-4 ring-primary-fixed' },
      { pending: true, label: 'Ngã ba Bạch Hạc' },
      { pending: true, label: 'Việt Trì (110 km)' },
    ],
    stats: [
      { label: 'Giờ khởi hành', value: '11:15 Trưa nay' },
      { label: 'ETA Kế hoạch', value: '22:00 Hôm nay' },
      { label: 'Cảnh báo tĩnh không', value: 'An toàn (Cầu Triều Dương)', highlight: true },
      { label: 'Nhiên liệu dự kiến', value: 'Đạt 94% định mức chuẩn' },
    ],
    actions: [
      { icon: 'chat', label: 'Liên Hệ Thuyền Trưởng', iconClass: 'text-primary', classes: actionBase },
      { icon: 'analytics', label: 'Giám Sát FOC', iconClass: 'text-primary', classes: actionBase },
    ],
  },
]

const redShips = computed(() => ships.filter((s) => s.zone === 'red'))
const yellowShips = computed(() => ships.filter((s) => s.zone === 'yellow'))
const greenShips = computed(() => ships.filter((s) => s.zone === 'green'))
</script>