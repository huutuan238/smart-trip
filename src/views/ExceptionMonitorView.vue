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
                ><span class="w-2.5 h-2.5 rounded-full bg-error"></span> Vùng
                Đỏ: Sự cố</span
              >
              <span class="flex items-center gap-1"
                ><span
                  class="w-2.5 h-2.5 rounded-full bg-secondary-container"
                ></span>
                Vùng Vàng: Cảnh báo nhẹ / Ping</span
              >
              <span class="flex items-center gap-1"
                ><span class="w-2.5 h-2.5 rounded-full bg-tertiary"></span> Vùng
                Xanh: Đúng kế hoạch</span
              >
            </div>
          </div>

          <!-- 1. VÙNG ĐỎ - CẢNH BÁO KHẨN CẤP / MẮC CẠN / LỆCH LUỒNG -->
          <div class="space-y-space-sm">
            <div
              class="flex items-center justify-between px-space-sm py-1 rounded bg-error-container/40 border-l-4 border-error"
            >
              <div class="flex items-center gap-space-xs">
                <span
                  class="material-symbols-outlined text-[18px] text-error font-bold animate-pulse"
                  >crisis_alert</span
                >
                <span
                  class="font-label-md text-label-md font-bold text-error uppercase tracking-wider"
                  >Vùng Đỏ - Cảnh Báo Khẩn Cấp (Sự Cố Luồng &amp; Mắc Cạn)</span
                >
                <span
                  class="px-space-xs py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-semibold"
                  >1 Tàu</span
                >
              </div>
              <span class="font-label-sm text-label-sm text-error font-medium"
                >Cần kích hoạt điều động cứu hộ ngay</span
              >
            </div>

            <!-- CARD 1: HP-8472 -->
            <div
              class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md relative overflow-hidden ring-1 ring-error/30"
            >
              <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-error"></div>
              <div class="pl-2 space-y-space-md">
                <div
                  class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm"
                >
                  <div
                    class="flex items-start sm:items-center gap-space-sm flex-wrap"
                  >
                    <div
                      class="w-10 h-10 rounded-lg bg-error-container text-error flex items-center justify-center shrink-0"
                    >
                      <span class="material-symbols-outlined text-[24px]"
                        >crisis_alert</span
                      >
                    </div>
                    <div>
                      <div class="flex items-center gap-space-xs flex-wrap">
                        <span
                          class="font-headline-sm text-headline-sm text-on-surface font-bold"
                          >HP-8472</span
                        >
                        <span
                          class="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-medium"
                          >Chuyến ST-2025-091</span
                        >
                        <span
                          class="font-label-sm text-label-sm text-on-surface-variant"
                          >• Tàu vỏ thép 450T • Cát san lấp</span
                        >
                      </div>
                      <div
                        class="flex items-center gap-space-sm text-body-sm text-body-sm text-on-surface-variant mt-0.5"
                      >
                        <span class="font-medium text-on-surface"
                          >TT: Phạm Bá Khoa (0912.44x.xxx)</span
                        >
                        <span class=""
                          >• Tuyến:
                          <strong class="text-on-surface"
                            >Cảng Nam Đình Vũ</strong
                          >
                          →
                          <strong class="text-on-surface"
                            >Cảng Hà Nam (Sông Đáy)</strong
                          >
                          [118 Km]</span
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-center gap-space-sm self-start lg:self-center flex-wrap"
                  >
                    <span
                      class="px-space-sm py-1 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold flex items-center gap-1"
                    >
                      <span class="material-symbols-outlined text-[15px]"
                        >report</span
                      >
                      Mắc Cạn Luồng (Mớn hở -10cm)
                    </span>
                    <div class="text-right">
                      <div
                        class="font-label-sm text-label-sm text-error font-semibold"
                      >
                        Rò rỉ P&amp;L: -12.5tr
                      </div>
                      <div
                        class="font-label-sm text-label-sm text-on-surface-variant"
                      >
                        Trễ +02h45m
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-surface-container-low rounded-lg p-space-sm space-y-2"
                >
                  <div
                    class="flex items-center justify-between font-label-sm text-label-sm"
                  >
                    <span
                      class="text-on-surface font-semibold flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-secondary text-[16px]"
                        >location_on</span
                      >
                      Hiện tại: Km 18+200 Vàm Kênh (20°47'N, 106°41'E) - Vận
                      tốc:
                      <strong class="text-error font-bold"
                        >0.0 km/h (Đang neo khẩn cấp)</strong
                      >
                    </span>
                    <span class="text-error font-semibold"
                      >Tiến độ: 28% (Đã đi 33.0 / 118.0 km)</span
                    >
                  </div>
                  <div class="relative py-2">
                    <div
                      class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden"
                    >
                      <div
                        class="bg-error h-full rounded-full transition-all"
                        style="width: 28%"
                      ></div>
                    </div>
                    <div
                      class="flex items-center justify-between text-label-sm font-label-sm -mt-3.5 px-0.5"
                    >
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-2 ring-surface-container-lowest"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >check</span
                          >
                        </div>
                        <span class="mt-1 text-on-surface-variant font-medium"
                          >Nam Đình Vũ (0 km)</span
                        >
                      </div>
                      <div class="flex flex-col items-center -ml-16">
                        <div
                          class="w-5 h-5 rounded-full bg-error text-on-error flex items-center justify-center ring-4 ring-error-container animate-bounce"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >anchor</span
                          >
                        </div>
                        <span class="mt-1 text-error font-bold"
                          >Km 18+200 Vàm Kênh</span
                        >
                      </div>
                      <div class="flex flex-col items-center opacity-40">
                        <div
                          class="w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest"
                        ></div>
                        <span class="mt-1 text-on-surface-variant"
                          >Cửa Cấm (Km 54)</span
                        >
                      </div>
                      <div class="flex flex-col items-center opacity-40">
                        <div
                          class="w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest"
                        ></div>
                        <span class="mt-1 text-on-surface-variant"
                          >Cầu Đò Mười (Km 88)</span
                        >
                      </div>
                      <div class="flex flex-col items-center opacity-40">
                        <div
                          class="w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest"
                        ></div>
                        <span class="mt-1 text-on-surface-variant"
                          >Hà Nam (118 km)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-sm pt-space-xs text-body-sm"
                >
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Giờ khởi hành (ETD)</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >06:30 Hôm nay</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >ETA Kế hoạch</span
                    >
                    <span
                      class="font-label-md text-label-md text-outline line-through"
                      >16:30</span
                    >
                  </div>
                  <div class="bg-error-container/40 rounded-lg p-2">
                    <span
                      class="text-error font-label-sm text-label-sm block font-semibold"
                      >ETA Dự báo mới</span
                    >
                    <span
                      class="font-label-md text-label-md font-bold text-error"
                      >19:15 (+2h45m)</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Thủy triều trạm Hòn Dấu</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >Đang rút, đỉnh triều 18:20</span
                    >
                  </div>
                  <div
                    class="col-span-2 flex items-center justify-end gap-space-xs"
                  >
                    <button
                      class="px-space-sm py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-[16px] text-secondary"
                        >podcasts</span
                      >
                      Đàm Thoại VHF 16
                    </button>
                    <button
                      class="px-space-md py-1.5 bg-error text-on-error hover:bg-on-error-container rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1 shadow-sm"
                    >
                      <span class="material-symbols-outlined text-[16px]"
                        >emergency</span
                      >
                      Kích Hoạt PA-B (Hạ Tải / Kéo)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. VÙNG VÀNG - CẢNH BÁO NHẸ & ĐANG CHỜ (PING AUDIO ĐIỀU HÀNH) -->
          <div class="space-y-space-sm pt-space-xs">
            <div
              class="flex items-center justify-between px-space-sm py-1 rounded bg-secondary-fixed/50 border-l-4 border-secondary"
            >
              <div class="flex items-center gap-space-xs flex-wrap">
                <span
                  class="material-symbols-outlined text-[18px] text-on-secondary-fixed font-bold"
                  >notifications_active</span
                >
                <span
                  class="font-label-md text-label-md font-bold text-on-secondary-fixed uppercase tracking-wider"
                  >Vùng Vàng - Cảnh Báo Nhẹ &amp; Đang Chờ (Ping Audio Điều
                  Hành)</span
                >
                <span
                  class="px-space-xs py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold"
                  >2 Tàu</span
                >
                <span
                  class="px-space-xs py-0.5 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-medium flex items-center gap-1"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"
                  ></span>
                  Chậm 1-2h hoặc Thuyền trưởng bấm "Đang Chờ"
                </span>
              </div>
              <div
                class="flex items-center gap-space-xs font-label-sm text-label-sm text-on-secondary-fixed-variant"
              >
                <span
                  class="material-symbols-outlined text-[16px] text-secondary"
                  >volume_up</span
                >
                <span class="">Ping âm thanh đã kích hoạt (chu kỳ 5p)</span>
              </div>
            </div>

            <!-- VÙNG VÀNG: TÀU 1 (QN-3829) -->
            <div
              class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md relative overflow-hidden ring-1 ring-secondary-container"
            >
              <div
                class="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"
              ></div>
              <div class="pl-2 space-y-space-md">
                <div
                  class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm"
                >
                  <div
                    class="flex items-start sm:items-center gap-space-sm flex-wrap"
                  >
                    <div
                      class="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center shrink-0 ring-2 ring-secondary-container"
                    >
                      <span class="material-symbols-outlined text-[24px]"
                        >hourglass_top</span
                      >
                    </div>
                    <div>
                      <div class="flex items-center gap-space-xs flex-wrap">
                        <span
                          class="font-headline-sm text-headline-sm text-on-surface font-bold"
                          >QN-3829</span
                        >
                        <span
                          class="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-medium"
                          >Chuyến ST-2025-090</span
                        >
                        <span
                          class="font-label-sm text-label-sm text-on-surface-variant"
                          >• Tàu chở than 650T • Than cám 4A</span
                        >
                        <span
                          class="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold flex items-center gap-1"
                        >
                          <span class="material-symbols-outlined text-[13px]"
                            >campaign</span
                          >
                          Ping Audio #VTS-90
                        </span>
                      </div>
                      <div
                        class="flex items-center gap-space-sm text-body-sm text-body-sm text-on-surface-variant mt-0.5"
                      >
                        <span class="font-medium text-on-surface"
                          >TT: Vũ Đình Cường (0936.19x.xxx)</span
                        >
                        <span class=""
                          >• Tuyến:
                          <strong class="text-on-surface"
                            >Cảng Cẩm Phả (Quảng Ninh)</strong
                          >
                          →
                          <strong class="text-on-surface"
                            >Cảng Ninh Phúc (Ninh Bình)</strong
                          >
                          [145 Km]</span
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-center gap-space-sm self-start lg:self-center flex-wrap"
                  >
                    <span
                      class="px-space-sm py-1 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1"
                    >
                      <span class="material-symbols-outlined text-[15px]"
                        >schedule</span
                      >
                      Chờ tĩnh không cầu xe lửa Lạc Đạo (Mở 16:00)
                    </span>
                    <div class="text-right">
                      <div
                        class="font-label-sm text-label-sm text-secondary font-semibold"
                      >
                        Trễ: +01h15m (Trong ngưỡng Vàng)
                      </div>
                      <div
                        class="font-label-sm text-label-sm text-on-surface-variant"
                      >
                        Lãi dự kiến: +36.2M (31.8%)
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-surface-container-low rounded-lg p-space-sm space-y-2"
                >
                  <div
                    class="flex items-center justify-between font-label-sm text-label-sm"
                  >
                    <span
                      class="text-on-surface font-semibold flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-secondary text-[16px]"
                        >location_on</span
                      >
                      Hiện tại: Km 70.0 Cửa Lạch Tray - Khoang neo chờ thông
                      luồng tàu hỏa (Vận tốc:
                      <strong class="text-secondary font-bold"
                        >0.8 km/h - Giữ neo</strong
                      >)
                    </span>
                    <span class="text-secondary font-semibold"
                      >Tiến độ: 48% (Đã đi 70.0 / 145.0 km)</span
                    >
                  </div>
                  <div class="relative py-2">
                    <div
                      class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden"
                    >
                      <div
                        class="bg-amber-500 h-full rounded-full transition-all"
                        style="width: 48%"
                      ></div>
                    </div>
                    <div
                      class="flex items-center justify-between text-label-sm font-label-sm -mt-3.5 px-0.5"
                    >
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center ring-2 ring-surface-container-lowest"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >check</span
                          >
                        </div>
                        <span class="mt-1 text-on-surface-variant font-medium"
                          >Cẩm Phả (0 km)</span
                        >
                      </div>
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center ring-2 ring-surface-container-lowest"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >check</span
                          >
                        </div>
                        <span class="mt-1 text-on-surface-variant font-medium"
                          >Vịnh Bái Tử Long</span
                        >
                      </div>
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-amber-500 text-amber-950 flex items-center justify-center ring-4 ring-amber-200 animate-pulse"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >pause</span
                          >
                        </div>
                        <span class="mt-1 text-amber-700 font-bold"
                          >Cầu Lạc Đạo (Đang chờ mở)</span
                        >
                      </div>
                      <div class="flex flex-col items-center opacity-40">
                        <div
                          class="w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest"
                        ></div>
                        <span class="mt-1 text-on-surface-variant"
                          >Sông Đáy (Km 115)</span
                        >
                      </div>
                      <div class="flex flex-col items-center opacity-40">
                        <div
                          class="w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest"
                        ></div>
                        <span class="mt-1 text-on-surface-variant"
                          >Ninh Bình (145 km)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-sm pt-space-xs text-body-sm"
                >
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Giờ khởi hành (ETD)</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >04:30 Sáng</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >ETA Điều chỉnh</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-secondary"
                      >22:45 Tối nay (+1h15m)</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-secondary font-label-sm text-label-sm block font-semibold"
                      >Tĩnh không cầu Lạc Đạo</span
                    >
                    <span
                      class="font-label-md text-label-md font-bold text-secondary"
                      >6.2m (Đạt chuẩn lúc 16h)</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Trạng thái Ping Audio</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-secondary flex items-center gap-1"
                    >
                      <span class="material-symbols-outlined text-[16px]"
                        >volume_up</span
                      >
                      Đã nhận diện chờ
                    </span>
                  </div>
                  <div
                    class="col-span-2 flex items-center justify-end gap-space-xs"
                  >
                    <button
                      class="px-space-sm py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-[16px] text-secondary"
                        >call</span
                      >
                      Gọi Thuyền Trưởng
                    </button>
                    <button
                      class="px-space-sm py-1.5 bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1 shadow-sm"
                    >
                      <span class="material-symbols-outlined text-[16px]"
                        >update</span
                      >
                      Gia Hạn Giờ Bến Ninh Bình
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- VÙNG VÀNG: TÀU 2 (TB-7712 - Thuyền trưởng vừa bấm ĐANG CHỜ TRIỀU) -->
            <!-- <div
              class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md relative overflow-hidden ring-1 ring-secondary-container"
            >
              <div
                class="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"
              ></div>
              <div class="pl-2 space-y-space-md">
                <div
                  class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm"
                >
                  <div
                    class="flex items-start sm:items-center gap-space-sm flex-wrap"
                  >
                    <div
                      class="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center shrink-0 ring-2 ring-secondary-container"
                    >
                      <span class="material-symbols-outlined text-[24px]"
                        >water</span
                      >
                    </div>
                    <div>
                      <div class="flex items-center gap-space-xs flex-wrap">
                        <span
                          class="font-headline-sm text-headline-sm text-on-surface font-bold"
                          >TB-7712</span
                        >
                        <span
                          class="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-medium"
                          >Chuyến ST-2025-094</span
                        >
                        <span
                          class="font-label-sm text-label-sm text-on-surface-variant"
                          >• Tàu kéo đẩy 800T • Cát bê tông</span
                        >
                        <span
                          class="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold animate-pulse flex items-center gap-1"
                        >
                          <span class="material-symbols-outlined text-[13px]"
                            >touch_app</span
                          >
                          Thuyền trưởng bấm [ĐANG CHỜ]
                        </span>
                      </div>
                      <div
                        class="flex items-center gap-space-sm text-body-sm text-body-sm text-on-surface-variant mt-0.5"
                      >
                        <span class="font-medium text-on-surface"
                          >TT: Nguyễn Mạnh Cường (0972.55x.xxx)</span
                        >
                        <span class=""
                          >• Tuyến:
                          <strong class="text-on-surface"
                            >Mỏ Cát Sông Hồng (Phú Xuyên)</strong
                          >
                          →
                          <strong class="text-on-surface"
                            >Cảng Bạch Đằng (Hải Phòng)</strong
                          >
                          [105 Km]</span
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-center gap-space-sm self-start lg:self-center flex-wrap"
                  >
                    <span
                      class="px-space-sm py-1 rounded-full bg-surface-container-high text-on-secondary-container font-label-sm text-label-sm font-semibold flex items-center gap-1"
                    >
                      <span class="material-symbols-outlined text-[15px]"
                        >timer</span
                      >
                      Chờ Đỉnh Triều Cửa Luộc (+01h30m)
                    </span>
                    <div class="text-right">
                      <div
                        class="font-label-sm text-label-sm text-secondary font-semibold"
                      >
                        Ping Audio: 3 phút trước
                      </div>
                      <div
                        class="font-label-sm text-label-sm text-on-surface-variant"
                      >
                        Mớn dư hiện tại: +15cm
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-surface-container-low rounded-lg p-space-sm space-y-2"
                >
                  <div
                    class="flex items-center justify-between font-label-sm text-label-sm"
                  >
                    <span
                      class="text-on-surface font-semibold flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-secondary text-[16px]"
                        >anchor</span
                      >
                      Hiện tại: Km 42 Bến Triều Dương - Neo đậu chờ con nước lớn
                      lúc 17:15 (Tốc độ: 0.0 km/h)
                    </span>
                    <span class="text-secondary font-semibold"
                      >Tiến độ: 38% (Đã đi 40.0 / 105.0 km)</span
                    >
                  </div>
                  <div class="relative py-2">
                    <div
                      class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden"
                    >
                      <div
                        class="bg-secondary h-full rounded-full transition-all"
                        style="width: 38%"
                      ></div>
                    </div>
                    <div
                      class="flex items-center justify-between text-label-sm font-label-sm -mt-3.5 px-0.5"
                    >
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-2 ring-surface-container-lowest"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >check</span
                          >
                        </div>
                        <span class="mt-1 text-on-surface-variant font-medium"
                          >Phú Xuyên (0 km)</span
                        >
                      </div>
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center ring-4 ring-secondary-fixed animate-bounce"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >anchor</span
                          >
                        </div>
                        <span class="mt-1 text-secondary font-bold"
                          >Km 42 Triều Dương (Đang Chờ)</span
                        >
                      </div>
                      <div class="flex flex-col items-center opacity-40">
                        <div
                          class="w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest"
                        ></div>
                        <span class="mt-1 text-on-surface-variant"
                          >Ngã ba Chanh (Km 72)</span
                        >
                      </div>
                      <div class="flex flex-col items-center opacity-40">
                        <div
                          class="w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest"
                        ></div>
                        <span class="mt-1 text-on-surface-variant"
                          >Cảng Bạch Đằng (105 km)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-sm pt-space-xs text-body-sm"
                >
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Giờ khởi hành (ETD)</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >08:00 Sáng</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >ETA Cũ</span
                    >
                    <span
                      class="font-label-md text-label-md text-outline line-through"
                      >18:30 Tối nay</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-secondary font-label-sm text-label-sm block font-semibold"
                      >ETA Dự kiến mới</span
                    >
                    <span
                      class="font-label-md text-label-md font-bold text-secondary"
                      >20:00 (+1h30m)</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Mực nước dự báo</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >+1.85m lúc 17:15</span
                    >
                  </div>
                  <div
                    class="col-span-2 flex items-center justify-end gap-space-xs"
                  >
                    <button
                      class="px-space-sm py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-[16px] text-secondary"
                        >call</span
                      >
                      Gọi TT Xác Nhận
                    </button>
                    <button
                      class="px-space-sm py-1.5 bg-surface-container-highest text-on-surface hover:bg-surface-container rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-[16px] text-tertiary"
                        >schedule_send</span
                      >
                      Báo Bến Nhận Gia Hạn
                    </button>
                  </div>
                </div>
              </div>
            </div> -->
          </div>

          <!-- 3. VÙNG XANH - ĐÚNG TIẾN ĐỘ & THÔNG LUỒNG SUỐT -->
          <div class="space-y-space-sm pt-space-xs">
            <div
              class="flex items-center justify-between px-space-sm py-1 rounded bg-surface-container-low border-l-4 border-tertiary"
            >
              <div class="flex items-center gap-space-xs">
                <span
                  class="material-symbols-outlined text-[18px] text-tertiary font-bold"
                  >check_circle</span
                >
                <span
                  class="font-label-md text-label-md font-bold text-tertiary uppercase tracking-wider"
                  >Vùng Xanh - Đúng Tuyến &amp; Thông Luồng (On-Track)</span
                >
                <span
                  class="px-space-xs py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm font-semibold"
                  >3 Tàu</span
                >
              </div>
              <span
                class="font-label-sm text-label-sm text-tertiary font-medium"
                >Hành trình an toàn, mớn nước đạt chuẩn</span
              >
            </div>

            <!-- CARD: HP-9182 -->
            <div
              class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md relative overflow-hidden"
            >
              <div
                class="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"
              ></div>
              <div class="pl-2 space-y-space-md">
                <div
                  class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm"
                >
                  <div
                    class="flex items-start sm:items-center gap-space-sm flex-wrap"
                  >
                    <div
                      class="w-10 h-10 rounded-lg bg-surface-container-low text-tertiary flex items-center justify-center shrink-0"
                    >
                      <span class="material-symbols-outlined text-[24px]"
                        >navigation</span
                      >
                    </div>
                    <div>
                      <div class="flex items-center gap-space-xs flex-wrap">
                        <span
                          class="font-headline-sm text-headline-sm text-on-surface font-bold"
                          >HP-9182</span
                        >
                        <span
                          class="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-medium"
                          >Chuyến ST-2025-089</span
                        >
                        <span
                          class="font-label-sm text-label-sm text-on-surface-variant"
                          >• Tàu tự hành 450T • Clinker bao rời</span
                        >
                      </div>
                      <div
                        class="flex items-center gap-space-sm text-body-sm text-body-sm text-on-surface-variant mt-0.5"
                      >
                        <span class="font-medium text-on-surface"
                          >TT: Nguyễn Văn Hưng (0903.88x.xxx)</span
                        >
                        <span class=""
                          >• Tuyến:
                          <strong class="text-on-surface"
                            >Bến Đoạn Xá (Hải Phòng)</strong
                          >
                          →
                          <strong class="text-on-surface"
                            >Cảng Phả Lại (Hải Dương)</strong
                          >
                          [68.4 Km]</span
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-center gap-space-sm self-start lg:self-center flex-wrap"
                  >
                    <span
                      class="px-space-sm py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-label-sm font-semibold flex items-center gap-1"
                    >
                      <span class="material-symbols-outlined text-[15px]"
                        >verified</span
                      >
                      Đúng Kế Hoạch (Mớn hở +35cm an toàn)
                    </span>
                    <div class="text-right">
                      <div
                        class="font-label-sm text-label-sm text-tertiary font-semibold"
                      >
                        Lãi dự kiến: +19.4M
                      </div>
                      <div
                        class="font-label-sm text-label-sm text-on-surface-variant"
                      >
                        Biên lãi: 35.1% (Sớm 10p)
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-surface-container-low rounded-lg p-space-sm space-y-2"
                >
                  <div
                    class="flex items-center justify-between font-label-sm text-label-sm"
                  >
                    <span
                      class="text-on-surface font-semibold flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-tertiary text-[16px]"
                        >explore</span
                      >
                      Hiện tại: Km 38.2 (Ngã ba sông Kinh Thầy - Cửa Luộc,
                      20°58'N, 106°28'E) - Vận tốc:
                      <strong class="text-tertiary font-bold">13.8 km/h</strong>
                    </span>
                    <span class="text-primary font-semibold"
                      >Tiến độ: 56% (Đã đi 38.2 / 68.4 km)</span
                    >
                  </div>
                  <div class="relative py-2">
                    <div
                      class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden"
                    >
                      <div
                        class="bg-primary-container h-full rounded-full transition-all"
                        style="width: 56%"
                      ></div>
                    </div>
                    <div
                      class="flex items-center justify-between text-label-sm font-label-sm -mt-3.5 px-0.5"
                    >
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-2 ring-surface-container-lowest"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >check</span
                          >
                        </div>
                        <span class="mt-1 text-on-surface-variant font-medium"
                          >Bến Đoạn Xá</span
                        >
                      </div>
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-2 ring-surface-container-lowest"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >check</span
                          >
                        </div>
                        <span class="mt-1 text-on-surface-variant font-medium"
                          >Cửa Cấm</span
                        >
                      </div>
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-2 ring-surface-container-lowest"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >check</span
                          >
                        </div>
                        <span class="mt-1 text-on-surface-variant font-medium"
                          >Km 24 Kinh Thầy</span
                        >
                      </div>
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center ring-4 ring-primary-fixed"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >near_me</span
                          >
                        </div>
                        <span class="mt-1 text-primary font-bold"
                          >Cầu Phú Lương (Đang qua)</span
                        >
                      </div>
                      <div class="flex flex-col items-center opacity-40">
                        <div
                          class="w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest"
                        ></div>
                        <span class="mt-1 text-on-surface-variant"
                          >Phả Lại (Đích)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-sm pt-space-xs text-body-sm"
                >
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Giờ rời cảng (ETD)</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >09:00 Hôm nay</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >ETA Kế hoạch</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >14:45</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-tertiary font-label-sm text-label-sm block font-semibold"
                      >ETA Dự báo mới</span
                    >
                    <span
                      class="font-label-md text-label-md font-bold text-tertiary"
                      >14:35 (Sớm 10p)</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Trạng thái luồng</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-tertiary"
                      >Thông luồng, sóng cấp 1</span
                    >
                  </div>
                  <div
                    class="col-span-2 flex items-center justify-end gap-space-xs"
                  >
                    <button
                      class="px-space-sm py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-[16px] text-primary"
                        >radar</span
                      >
                      Radar Luồng
                    </button>
                    <button
                      class="px-space-sm py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-[16px] text-secondary"
                        >chat</span
                      >
                      Tin Nhắn TT
                    </button>
                    <button
                      class="px-space-sm py-1.5 bg-primary-container text-on-primary hover:bg-primary rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      <span class="material-symbols-outlined text-[16px]"
                        >query_stats</span
                      >
                      Chi Tiết P&amp;L
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- CARD: ND-5521 -->
            <div
              class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md relative overflow-hidden"
            >
              <div
                class="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"
              ></div>
              <div class="pl-2 space-y-space-md">
                <div
                  class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm"
                >
                  <div
                    class="flex items-start sm:items-center gap-space-sm flex-wrap"
                  >
                    <div
                      class="w-10 h-10 rounded-lg bg-surface-container-low text-tertiary flex items-center justify-center shrink-0"
                    >
                      <span class="material-symbols-outlined text-[24px]"
                        >speed</span
                      >
                    </div>
                    <div>
                      <div class="flex items-center gap-space-xs flex-wrap">
                        <span
                          class="font-headline-sm text-headline-sm text-on-surface font-bold"
                          >ND-5521</span
                        >
                        <span
                          class="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-medium"
                          >Chuyến ST-2025-092</span
                        >
                        <span
                          class="font-label-sm text-label-sm text-on-surface-variant"
                          >• Tàu chở thép cuộn 520T</span
                        >
                      </div>
                      <div
                        class="flex items-center gap-space-sm text-body-sm text-body-sm text-on-surface-variant mt-0.5"
                      >
                        <span class="font-medium text-on-surface"
                          >TT: Đỗ Trọng Quân (0988.31x.xxx)</span
                        >
                        <span class=""
                          >• Tuyến:
                          <strong class="text-on-surface"
                            >Cảng Vật Cách (Hải Phòng)</strong
                          >
                          →
                          <strong class="text-on-surface"
                            >Cảng Khuyến Lương (Hà Nội)</strong
                          >
                          [132 Km]</span
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-center gap-space-sm self-start lg:self-center flex-wrap"
                  >
                    <span
                      class="px-space-sm py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-label-sm font-semibold flex items-center gap-1"
                    >
                      <span class="material-symbols-outlined text-[15px]"
                        >done_all</span
                      >
                      Đang Hành Trình - Luồng Thông Suốt
                    </span>
                    <div class="text-right">
                      <div
                        class="font-label-sm text-label-sm text-tertiary font-semibold"
                      >
                        Lãi dự kiến: +39.8M
                      </div>
                      <div
                        class="font-label-sm text-label-sm text-on-surface-variant"
                      >
                        Vận tốc tối ưu: 14.5 km/h
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-surface-container-low rounded-lg p-space-sm space-y-2"
                >
                  <div
                    class="flex items-center justify-between font-label-sm text-label-sm"
                  >
                    <span
                      class="text-on-surface font-semibold flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-primary text-[16px]"
                        >explore</span
                      >
                      Hiện tại: Km 103 Sông Hồng (Khu vực Hưng Yên) - Mớn nước
                      an toàn +45cm
                    </span>
                    <span class="text-primary font-semibold"
                      >Tiến độ: 78% (Đã đi 103.0 / 132.0 km)</span
                    >
                  </div>
                  <div class="relative py-2">
                    <div
                      class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden"
                    >
                      <div
                        class="bg-primary-container h-full rounded-full transition-all"
                        style="width: 78%"
                      ></div>
                    </div>
                    <div
                      class="flex items-center justify-between text-label-sm font-label-sm -mt-3.5 px-0.5"
                    >
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-2 ring-surface-container-lowest"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >check</span
                          >
                        </div>
                        <span class="mt-1 text-on-surface-variant font-medium"
                          >Vật Cách (0 km)</span
                        >
                      </div>
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-2 ring-surface-container-lowest"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >check</span
                          >
                        </div>
                        <span class="mt-1 text-on-surface-variant font-medium"
                          >Km 45 Luộc</span
                        >
                      </div>
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center ring-4 ring-primary-fixed"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >near_me</span
                          >
                        </div>
                        <span class="mt-1 text-primary font-bold"
                          >Hưng Yên (Km 103)</span
                        >
                      </div>
                      <div class="flex flex-col items-center opacity-40">
                        <div
                          class="w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest"
                        ></div>
                        <span class="mt-1 text-on-surface-variant"
                          >Khuyến Lương (132 km)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-sm pt-space-xs text-body-sm"
                >
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Giờ khởi hành</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >19:00 Tối qua</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >ETA Kế hoạch</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >04:25 Sáng mai</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-tertiary font-label-sm text-label-sm block font-semibold"
                      >ETA Mới nhất</span
                    >
                    <span
                      class="font-label-md text-label-md font-bold text-tertiary"
                      >04:00 (Sớm 25p)</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Bến bốc dỡ đích</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >Cầu cảng số 2 (Đã chuẩn bị cẩu)</span
                    >
                  </div>
                  <div
                    class="col-span-2 flex items-center justify-end gap-space-xs"
                  >
                    <button
                      class="px-space-sm py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-[16px] text-primary"
                        >send_to_mobile</span
                      >
                      Lệnh Cập Bến
                    </button>
                    <button
                      class="px-space-sm py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-[16px] text-primary"
                        >visibility</span
                      >
                      Chi Tiết Tàu
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- CARD: TB-6218 -->
            <div
              class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md relative overflow-hidden"
            >
              <div
                class="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"
              ></div>
              <div class="pl-2 space-y-space-md">
                <div
                  class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm"
                >
                  <div
                    class="flex items-start sm:items-center gap-space-sm flex-wrap"
                  >
                    <div
                      class="w-10 h-10 rounded-lg bg-surface-container-low text-tertiary flex items-center justify-center shrink-0"
                    >
                      <span class="material-symbols-outlined text-[24px]"
                        >directions_boat</span
                      >
                    </div>
                    <div>
                      <div class="flex items-center gap-space-xs flex-wrap">
                        <span
                          class="font-headline-sm text-headline-sm text-on-surface font-bold"
                          >TB-6218</span
                        >
                        <span
                          class="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-medium"
                          >Chuyến ST-2025-095</span
                        >
                        <span
                          class="font-label-sm text-label-sm text-on-surface-variant"
                          >• Tàu hàng rời 380T • Gạch mộc &amp; Vật liệu</span
                        >
                      </div>
                      <div
                        class="flex items-center gap-space-sm text-body-sm text-body-sm text-on-surface-variant mt-0.5"
                      >
                        <span class="font-medium text-on-surface"
                          >TT: Hoàng Văn Thắng (0915.22x.xxx)</span
                        >
                        <span class=""
                          >• Tuyến:
                          <strong class="text-on-surface"
                            >Cảng Thái Bình</strong
                          >
                          →
                          <strong class="text-on-surface"
                            >Cảng Việt Trì (Phú Thọ)</strong
                          >
                          [110 Km]</span
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-center gap-space-sm self-start lg:self-center flex-wrap"
                  >
                    <span
                      class="px-space-sm py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-label-sm font-semibold flex items-center gap-1"
                    >
                      <span class="material-symbols-outlined text-[15px]"
                        >check_circle</span
                      >
                      Đúng Hành Trình
                    </span>
                    <div class="text-right">
                      <div
                        class="font-label-sm text-label-sm text-on-surface font-semibold"
                      >
                        Dự kiến lãi: +14.2M
                      </div>
                      <div
                        class="font-label-sm text-label-sm text-on-surface-variant"
                      >
                        Vận tốc: 12.0 km/h
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-surface-container-low rounded-lg p-space-sm space-y-2"
                >
                  <div
                    class="flex items-center justify-between font-label-sm text-label-sm"
                  >
                    <span
                      class="text-on-surface font-semibold flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-primary text-[16px]"
                        >location_on</span
                      >
                      Hiện tại: Km 22 Sông Luộc (Vận tốc ổn định 12.0 km/h)
                    </span>
                    <span class="text-on-surface font-semibold"
                      >Tiến độ: 20% (Đã đi 22.0 / 110.0 km)</span
                    >
                  </div>
                  <div class="relative py-2">
                    <div
                      class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden"
                    >
                      <div
                        class="bg-primary-container h-full rounded-full transition-all"
                        style="width: 20%"
                      ></div>
                    </div>
                    <div
                      class="flex items-center justify-between text-label-sm font-label-sm -mt-3.5 px-0.5"
                    >
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-2 ring-surface-container-lowest"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >check</span
                          >
                        </div>
                        <span class="mt-1 text-on-surface-variant font-medium"
                          >Thái Bình (0 km)</span
                        >
                      </div>
                      <div class="flex flex-col items-center">
                        <div
                          class="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center ring-4 ring-primary-fixed"
                        >
                          <span class="material-symbols-outlined text-[12px]"
                            >near_me</span
                          >
                        </div>
                        <span class="mt-1 text-primary font-bold"
                          >Km 22 Sông Luộc</span
                        >
                      </div>
                      <div class="flex flex-col items-center opacity-40">
                        <div
                          class="w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest"
                        ></div>
                        <span class="mt-1 text-on-surface-variant"
                          >Ngã ba Bạch Hạc</span
                        >
                      </div>
                      <div class="flex flex-col items-center opacity-40">
                        <div
                          class="w-4 h-4 rounded-full bg-surface-container-highest ring-2 ring-surface-container-lowest"
                        ></div>
                        <span class="mt-1 text-on-surface-variant"
                          >Việt Trì (110 km)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-sm pt-space-xs text-body-sm"
                >
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Giờ khởi hành</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >11:15 Trưa nay</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >ETA Kế hoạch</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >22:00 Hôm nay</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Cảnh báo tĩnh không</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-tertiary"
                      >An toàn (Cầu Triều Dương)</span
                    >
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-2">
                    <span
                      class="text-on-surface-variant font-label-sm text-label-sm block"
                      >Nhiên liệu dự kiến</span
                    >
                    <span
                      class="font-label-md text-label-md font-semibold text-on-surface"
                      >Đạt 94% định mức chuẩn</span
                    >
                  </div>
                  <div
                    class="col-span-2 flex items-center justify-end gap-space-xs"
                  >
                    <button
                      class="px-space-sm py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-[16px] text-primary"
                        >chat</span
                      >
                      Liên Hệ Thuyền Trưởng
                    </button>
                    <button
                      class="px-space-sm py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      <span
                        class="material-symbols-outlined text-[16px] text-primary"
                        >analytics</span
                      >
                      Giám Sát FOC
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
