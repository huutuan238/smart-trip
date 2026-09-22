<template>
  <main class="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]">
    <div class="flex flex-col w-full">
      <!-- SECTION 1: HEADER & TELEMETRY CONTEXT BAR -->
      <section class="w-full px-margin py-space-lg bg-surface-container-low">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <!-- Title & Utility Header -->
          <div
            class="flex flex-col xl:flex-row xl:items-end justify-between gap-space-md"
          >
            <div class="flex flex-col gap-space-xs">
              <div class="flex items-center gap-space-xs">
                <span
                  class="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm uppercase tracking-wider font-semibold"
                >
                  Đặc Tả Nghiệp Vụ 2.4
                </span>
                <span
                  class="font-label-sm text-label-sm text-on-surface-variant"
                  >•</span
                >
                <span
                  class="font-label-sm text-label-sm text-on-surface-variant font-medium"
                  >Trip Analytics &amp; Operational Benchmark</span
                >
              </div>
              <h1
                class="font-headline-lg text-headline-lg text-primary tracking-tight font-bold"
              >
                Module 3: Phân Tích Hiệu Quả &amp; Chuẩn Hóa Vận Hành
              </h1>
              <p
                class="font-body-md text-body-md text-on-surface-variant max-w-3xl"
              >
                Biến dữ liệu hành trình số thành bộ máy tối ưu hóa lợi nhuận
                ròng, tự động truy vết rò rỉ chi phí ẩn và thiết lập quy chuẩn
                kỹ thuật cho từng tàu và luồng hàng hải nội địa.
              </p>
            </div>
            <!-- Action CTAs -->
            <div class="flex items-center flex-wrap gap-space-xs shrink-0">
              <button
                class="px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-colors flex items-center gap-space-xs"
                type="button"
              >
                <span
                  class="material-symbols-outlined text-[18px] text-primary"
                  >sim_card_download</span
                >
                Xuất Báo Cáo Đối Soát (PDF/Excel)
              </button>
              <button
                class="px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary transition-colors flex items-center gap-space-xs"
                type="button"
              >
                <span class="material-symbols-outlined text-[18px]"
                  >neurology</span
                >
                Chạy Mô Hình ML Cập Nhật Benchmark
              </button>
            </div>
          </div>
          <!-- Filters Ribbon / Context Chips -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm"
          >
            <div class="flex flex-col gap-1">
              <label
                class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
                >Tuyến Luồng Hàng Hải</label
              >
              <div
                class="flex items-center justify-between p-2 rounded-lg bg-surface-container-low text-on-surface"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="material-symbols-outlined text-secondary text-[18px]"
                    >route</span
                  >
                  <span class="font-label-md text-label-md font-semibold"
                    >Hải Phòng - Việt Trì / Hà Nội</span
                  >
                </div>
                <span
                  class="font-label-sm text-label-sm text-on-surface-variant"
                  >148 km</span
                >
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label
                class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
                >Phương Tiện / Trọng Tải</label
              >
              <div
                class="flex items-center justify-between p-2 rounded-lg bg-surface-container-low text-on-surface"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="material-symbols-outlined text-primary text-[18px]"
                    >directions_boat</span
                  >
                  <span class="font-label-md text-label-md font-semibold"
                    >HP-9182 (Tàu tự hành 450T)</span
                  >
                </div>
                <span
                  class="px-1.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold"
                  >Cấp VR-SI</span
                >
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label
                class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
                >Chuyến Tàu Đối Soát</label
              >
              <div
                class="flex items-center justify-between p-2 rounded-lg bg-surface-container-low text-on-surface"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="material-symbols-outlined text-tertiary text-[18px]"
                    >verified</span
                  >
                  <span class="font-label-md text-label-md font-semibold"
                    >ST-2025-089</span
                  >
                </div>
                <span
                  class="px-2 py-0.5 rounded-full bg-tertiary-fixed-dim/40 text-tertiary font-label-sm text-label-sm font-semibold"
                  >Vừa hoàn thành</span
                >
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label
                class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
                >Dữ Liệu So Sánh (AI Dataset)</label
              >
              <div
                class="flex items-center justify-between p-2 rounded-lg bg-surface-container-low text-on-surface"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="material-symbols-outlined text-secondary-container text-[18px]"
                    >dataset</span
                  >
                  <span class="font-label-md text-label-md font-semibold"
                    >30 Chuyến gần nhất (Baseline)</span
                  >
                </div>
                <span
                  class="material-symbols-outlined text-[16px] text-on-surface-variant"
                  >tune</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- SECTION 2: 2.4.1. PLAN VS. ACTUAL VARIANCE ANALYSIS -->
      <section class="w-full px-margin py-space-xl">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <!-- Section Tagline -->
          <div
            class="flex flex-col md:flex-row md:items-end justify-between gap-space-xs"
          >
            <div>
              <div
                class="flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-wider font-semibold"
              >
                <span class="w-2 h-2 rounded-full bg-primary"></span>
                Phần 2.4.1 • Đối Soát Nghiệp Vụ Chuyến
              </div>
              <h2
                class="font-headline-md text-headline-md text-on-surface font-bold tracking-tight"
              >
                Báo Cáo Chênh Lệch Kế Hoạch &amp; Thực Tế (Plan vs. Actual)
              </h2>
              <p
                class="font-body-md text-body-md text-on-surface-variant mt-1"
              >
                Hệ thống tự động đồng bộ số liệu sensor, hóa đơn số và nhật ký
                điều vận để bắt trọn các dòng chi phí rò rỉ ngoài kế hoạch.
              </p>
            </div>
            <div
              class="px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center gap-2 self-start md:self-auto"
            >
              <span class="material-symbols-outlined text-primary text-[16px]"
                >sync</span
              >
              Đồng bộ VTS &amp; Lưu lượng kế: 14/03/2025 09:42:15
            </div>
          </div>
          <!-- 4 Core Metric KPI Cards -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md"
          >
            <!-- Revenue Card -->
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              <div class="flex items-center justify-between">
                <span
                  class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant"
                  >Doanh Thu Cước</span
                >
                <span
                  class="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"
                >
                  0.0% Khớp
                </span>
              </div>
              <div class="my-space-sm">
                <div
                  class="font-display text-[32px] leading-tight font-bold text-on-surface tracking-tight"
                >
                  40.000.000<span
                    class="text-sm font-normal text-on-surface-variant"
                    >đ</span
                  >
                </div>
                <div
                  class="font-body-sm text-body-sm text-on-surface-variant mt-1"
                >
                  Kế hoạch: 40.000.000đ (450T Clinker)
                </div>
              </div>
              <div
                class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden"
              >
                <div class="bg-tertiary h-full rounded-full w-full"></div>
              </div>
            </div>
            <!-- Fuel Cost Card -->
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              <div class="flex items-center justify-between">
                <span
                  class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant"
                  >Chi Phí Nhiên Liệu (D.O)</span
                >
                <span
                  class="px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold flex items-center gap-0.5"
                >
                  <span class="material-symbols-outlined text-[13px]"
                    >arrow_upward</span
                  >
                  +20.8%
                </span>
              </div>
              <div class="my-space-sm">
                <div
                  class="font-display text-[32px] leading-tight font-bold text-error tracking-tight"
                >
                  14.500.000<span
                    class="text-sm font-normal text-on-surface-variant"
                    >đ</span
                  >
                </div>
                <div
                  class="font-body-sm text-body-sm text-on-surface-variant mt-1"
                >
                  Kế hoạch dự toán: 12.000.000đ
                </div>
              </div>
              <div
                class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden"
              >
                <div class="bg-error h-full rounded-full w-[120.8%]"></div>
              </div>
            </div>
            <!-- Port Fees Card -->
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              <div class="flex items-center justify-between">
                <span
                  class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant"
                  >Phí Bến Bãi &amp; Phụ Phí</span
                >
                <span
                  class="px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold flex items-center gap-0.5"
                >
                  <span class="material-symbols-outlined text-[13px]"
                    >arrow_upward</span
                  >
                  +30.0%
                </span>
              </div>
              <div class="my-space-sm">
                <div
                  class="font-display text-[32px] leading-tight font-bold text-error tracking-tight"
                >
                  6.500.000<span
                    class="text-sm font-normal text-on-surface-variant"
                    >đ</span
                  >
                </div>
                <div
                  class="font-body-sm text-body-sm text-on-surface-variant mt-1"
                >
                  Kế hoạch dự toán: 5.000.000đ
                </div>
              </div>
              <div
                class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden"
              >
                <div class="bg-error h-full rounded-full w-[130%]"></div>
              </div>
            </div>
            <!-- Net Profit Card (Leakage Callout) -->
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              <div class="flex items-center justify-between">
                <span
                  class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant"
                  >Lợi Nhuận Ròng Thực Tế</span
                >
                <span
                  class="px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold flex items-center gap-0.5"
                >
                  <span class="material-symbols-outlined text-[13px]"
                    >arrow_downward</span
                  >
                  -17.3%
                </span>
              </div>
              <div class="my-space-sm">
                <div
                  class="font-display text-[32px] leading-tight font-bold text-on-surface tracking-tight"
                >
                  19.000.000<span
                    class="text-sm font-normal text-on-surface-variant"
                    >đ</span
                  >
                </div>
                <div
                  class="font-body-sm text-body-sm text-error font-medium mt-1 flex items-center gap-1"
                >
                  <span class="material-symbols-outlined text-[15px]"
                    >warning</span
                  >
                  Rò rỉ: -4.000.000đ so với kế hoạch
                </div>
              </div>
              <div
                class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden"
              >
                <div
                  class="bg-primary-container h-full rounded-full w-[82.7%]"
                ></div>
              </div>
            </div>
          </div>
          <!-- Detail Variance Table & Leakage Breakdown Bento Layout -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            <!-- Master Comparison Table (8 cols) -->
            <div
              class="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center justify-between pb-space-sm">
                  <div class="flex items-center gap-2">
                    <span
                      class="material-symbols-outlined text-primary text-[20px]"
                      >table_chart</span
                    >
                    <h3
                      class="font-headline-sm text-headline-sm text-on-surface font-semibold"
                    >
                      Đối Chiếu Khoản Mục &amp; Truy Vết Nguyên Nhân Gốc
                    </h3>
                  </div>
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant"
                    >4 Hạng Mục Trọng Tâm</span
                  >
                </div>
                <div class="w-full overflow-x-auto">
                  <table class="w-full text-left border-collapse">
                    <thead>
                      <tr
                        class="bg-surface-container-low text-on-surface-variant font-label-md text-label-md"
                      >
                        <th
                          class="py-space-xs px-3 font-semibold rounded-l-lg"
                        >
                          Hạng Mục
                        </th>
                        <th class="py-space-xs px-3 font-semibold">
                          Kế Hoạch
                        </th>
                        <th class="py-space-xs px-3 font-semibold">
                          Thực Tế
                        </th>
                        <th class="py-space-xs px-3 font-semibold">
                          Chênh Lệch
                        </th>
                        <th class="py-space-xs px-3 font-semibold">
                          Tương Quan
                        </th>
                        <th
                          class="py-space-xs px-3 font-semibold rounded-r-lg"
                        >
                          Nguyên Nhân Gốc (Từ Nhật Ký Số Thuyền Trưởng)
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="divide-y divide-surface-container font-body-sm text-body-sm"
                    >
                      <!-- Row 1: Freight -->
                      <tr
                        class="hover:bg-surface-container-low/50 transition-colors"
                      >
                        <td class="py-3 px-3 font-medium text-on-surface">
                          <div class="flex items-center gap-2">
                            <span
                              class="w-2 h-2 rounded-full bg-tertiary"
                            ></span>
                            Doanh thu cước vận tải
                          </div>
                        </td>
                        <td class="py-3 px-3 font-semibold text-on-surface">
                          40.000.000đ
                        </td>
                        <td class="py-3 px-3 font-semibold text-on-surface">
                          40.000.000đ
                        </td>
                        <td class="py-3 px-3">
                          <span
                            class="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"
                          >
                            0.0%
                          </span>
                        </td>
                        <td class="py-3 px-3 w-28">
                          <div
                            class="w-full bg-surface-container h-2 rounded-full overflow-hidden"
                          >
                            <div
                              class="bg-tertiary h-full rounded-full"
                              style="width: 100%"
                            ></div>
                          </div>
                        </td>
                        <td class="py-3 px-3 text-on-surface-variant">
                          Khớp 100% hợp đồng thương thảo (450T Clinker Đoạn Xá
                          - Phả Lại).
                        </td>
                      </tr>
                      <!-- Row 2: Fuel -->
                      <tr
                        class="hover:bg-surface-container-low/50 transition-colors"
                      >
                        <td class="py-3 px-3 font-medium text-on-surface">
                          <div class="flex items-center gap-2">
                            <span
                              class="w-2 h-2 rounded-full bg-error"
                            ></span>
                            Nhiên liệu dầu D.O
                          </div>
                        </td>
                        <td class="py-3 px-3 text-on-surface-variant">
                          12.000.000đ
                        </td>
                        <td class="py-3 px-3 font-semibold text-error">
                          14.500.000đ
                        </td>
                        <td class="py-3 px-3">
                          <span
                            class="px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold"
                          >
                            +20.8%
                          </span>
                        </td>
                        <td class="py-3 px-3 w-28">
                          <div
                            class="w-full bg-surface-container h-2 rounded-full overflow-hidden"
                          >
                            <div
                              class="bg-error h-full rounded-full"
                              style="width: 120.8%"
                            ></div>
                          </div>
                        </td>
                        <td class="py-3 px-3 text-on-surface">
                          <span class="font-medium text-error"
                            >Chờ luồng 4 giờ:</span
                          >
                          Sương mù dày đặc Km 38.2 Kinh Thầy; máy chính nổ cầm
                          chừng để giữ vị trí neo nước chảy xiết.
                        </td>
                      </tr>
                      <!-- Row 3: Port Fees -->
                      <tr
                        class="hover:bg-surface-container-low/50 transition-colors"
                      >
                        <td class="py-3 px-3 font-medium text-on-surface">
                          <div class="flex items-center gap-2">
                            <span
                              class="w-2 h-2 rounded-full bg-error"
                            ></span>
                            Phí bến bãi &amp; neo đậu
                          </div>
                        </td>
                        <td class="py-3 px-3 text-on-surface-variant">
                          5.000.000đ
                        </td>
                        <td class="py-3 px-3 font-semibold text-error">
                          6.500.000đ
                        </td>
                        <td class="py-3 px-3">
                          <span
                            class="px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold"
                          >
                            +30.0%
                          </span>
                        </td>
                        <td class="py-3 px-3 w-28">
                          <div
                            class="w-full bg-surface-container h-2 rounded-full overflow-hidden"
                          >
                            <div
                              class="bg-error h-full rounded-full"
                              style="width: 130%"
                            ></div>
                          </div>
                        </td>
                        <td class="py-3 px-3 text-on-surface">
                          <span class="font-medium text-error"
                            >Lưu bến qua đêm:</span
                          >
                          Cần cẩu bến đích (Phả Lại) hỏng 5h30m, dẫn đến dỡ
                          hàng chậm tiến độ và chịu phí neo bổ sung.
                        </td>
                      </tr>
                      <!-- Row 4: Net Profit Summary -->
                      <tr class="bg-surface-container-low/40 font-semibold">
                        <td class="py-3 px-3 text-primary">
                          Lợi Nhuận Ròng (Net Profit)
                        </td>
                        <td class="py-3 px-3 text-on-surface">23.000.000đ</td>
                        <td class="py-3 px-3 text-on-surface">19.000.000đ</td>
                        <td class="py-3 px-3">
                          <span
                            class="px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-bold"
                          >
                            -17.3%
                          </span>
                        </td>
                        <td class="py-3 px-3 w-28">
                          <div
                            class="w-full bg-surface-container h-2 rounded-full overflow-hidden"
                          >
                            <div
                              class="bg-primary h-full rounded-full"
                              style="width: 82.7%"
                            ></div>
                          </div>
                        </td>
                        <td class="py-3 px-3 text-error">
                          Rò rỉ tổng cộng 4.000.000đ do biến cố luồng và bất
                          khả kháng từ bến dỡ.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm"
              >
                <span class="flex items-center gap-1.5">
                  <span
                    class="material-symbols-outlined text-[16px] text-tertiary"
                    >check_circle</span
                  >
                  Dữ liệu đối chiếu tự động hóa hoàn toàn với Nhật ký VTS
                  &amp; Hóa đơn e-Port.
                </span>
                <span class="font-label-sm text-label-sm font-medium"
                  >Sai số đối chiếu: &lt; 0.12%</span
                >
              </div>
            </div>
            <!-- Profit Leakage Waterfall / Root Cause Card (4 cols) -->
            <div
              class="lg:col-span-4 bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between"
            >
              <div class="flex flex-col gap-space-sm">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span
                      class="material-symbols-outlined text-error text-[20px]"
                      >water_damage</span
                    >
                    <h3
                      class="font-headline-sm text-headline-sm text-on-surface font-semibold"
                    >
                      Phân Tích Thất Thoát
                    </h3>
                  </div>
                  <span
                    class="px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-bold"
                  >
                    -4.000.000đ
                  </span>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  Biểu đồ trực quan hóa dòng tiền rò rỉ làm sụt giảm biên độ
                  lợi nhuận của chuyến:
                </p>
                <!-- Inline SVG Waterfall Bar Representation -->
                <div
                  class="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-3"
                >
                  <div class="flex flex-col gap-1">
                    <div
                      class="flex justify-between font-label-md text-label-md"
                    >
                      <span class="text-on-surface font-medium"
                        >Lợi Nhuận Mục Tiêu</span
                      >
                      <span class="text-primary font-bold"
                        >23.000.000đ (100%)</span
                      >
                    </div>
                    <div
                      class="w-full bg-surface-container-high h-4 rounded-full overflow-hidden flex"
                    >
                      <div
                        class="bg-primary h-full"
                        style="width: 100%"
                      ></div>
                    </div>
                  </div>
                  <!-- Leak 1: Fuel Idle -->
                  <div
                    class="flex flex-col gap-1 pl-3 border-l-2 border-error"
                  >
                    <div
                      class="flex justify-between font-label-sm text-label-sm"
                    >
                      <span class="text-on-surface"
                        >1. Nhiên liệu chạy không tải (4h chờ)</span
                      >
                      <span class="text-error font-semibold"
                        >-2.500.000đ</span
                      >
                    </div>
                    <div
                      class="w-full bg-surface-container h-2 rounded-full overflow-hidden"
                    >
                      <div
                        class="bg-error h-full rounded-full"
                        style="width: 62.5%"
                      ></div>
                    </div>
                    <span
                      class="font-label-sm text-label-sm text-on-surface-variant"
                      >Chiếm 62.5% tổng thất thoát</span
                    >
                  </div>
                  <!-- Leak 2: Port Delay Fee -->
                  <div
                    class="flex flex-col gap-1 pl-3 border-l-2 border-error"
                  >
                    <div
                      class="flex justify-between font-label-sm text-label-sm"
                    >
                      <span class="text-on-surface"
                        >2. Phí phạt lưu bến phụ trội (Cẩu hỏng)</span
                      >
                      <span class="text-error font-semibold"
                        >-1.500.000đ</span
                      >
                    </div>
                    <div
                      class="w-full bg-surface-container h-2 rounded-full overflow-hidden"
                    >
                      <div
                        class="bg-error h-full rounded-full"
                        style="width: 37.5%"
                      ></div>
                    </div>
                    <span
                      class="font-label-sm text-label-sm text-on-surface-variant"
                      >Chiếm 37.5% tổng thất thoát</span
                    >
                  </div>
                  <!-- Actual Remaining -->
                  <div class="flex flex-col gap-1 pt-2">
                    <div
                      class="flex justify-between font-label-md text-label-md"
                    >
                      <span class="text-on-surface font-semibold"
                        >Lợi Nhuận Ròng Thu Được</span
                      >
                      <span class="text-tertiary font-bold"
                        >19.000.000đ (82.6%)</span
                      >
                    </div>
                    <div
                      class="w-full bg-surface-container-high h-4 rounded-full overflow-hidden"
                    >
                      <div
                        class="bg-tertiary-container h-full"
                        style="width: 82.6%"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="mt-space-md p-space-xs bg-error-container/30 rounded-lg flex items-start gap-2"
              >
                <span
                  class="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5"
                  >tips_and_updates</span
                >
                <p class="font-body-sm text-body-sm text-on-surface">
                  Nếu chủ tàu đàm phán hợp đồng chuyển giao rủi ro chờ cẩu tại
                  Phả Lại, lợi nhuận ròng của chuyến sẽ bảo toàn được
                  <strong>20.500.000đ</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- SECTION 3: 2.4.2. OPERATIONAL BENCHMARK & MACHINE LEARNING BASELINE -->
      <section class="w-full px-margin py-space-xl bg-surface-container-low">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <!-- Section Header -->
          <div
            class="flex flex-col md:flex-row md:items-end justify-between gap-space-xs"
          >
            <div>
              <div
                class="flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold"
              >
                <span class="w-2 h-2 rounded-full bg-secondary"></span>
                Phần 2.4.2 • Chuẩn Vận Hành Học Máy (Machine Learning)
              </div>
              <h2
                class="font-headline-md text-headline-md text-on-surface font-bold tracking-tight"
              >
                Xây Dựng Chuẩn Vận Hành &amp; Bộ Chỉ Số Cơ Sở (Baseline
                Metrics)
              </h2>
              <p
                class="font-body-md text-body-md text-on-surface-variant mt-1"
              >
                Học máy dựa trên 30 hành trình tích lũy để xác định chuẩn mực
                định mức nhiên liệu và thời gian chờ bến cho tàu HP-9182.
              </p>
            </div>
            <!-- AI Engine State Badge -->
            <div
              class="flex items-center gap-3 p-space-xs px-space-md bg-surface-container-lowest rounded-xl shadow-sm self-start md:self-auto"
            >
              <div
                class="w-3 h-3 rounded-full bg-tertiary animate-pulse"
              ></div>
              <div class="flex flex-col">
                <span
                  class="font-label-md text-label-md font-semibold text-on-surface"
                  >AI Model: Linear-Ridge v4.2</span
                >
                <span
                  class="font-label-sm text-label-sm text-on-surface-variant"
                  >Độ tin cậy R²: <strong>96.4%</strong> (Dữ liệu 30
                  chuyến)</span
                >
              </div>
            </div>
          </div>
          <!-- Two Core Baseline Modules (Grid 2 cols) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            <!-- Baseline 1: Specific Fuel Consumption per Ton-Km -->
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between"
            >
              <div class="flex flex-col gap-space-sm">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span
                      class="material-symbols-outlined text-secondary text-[22px]"
                      >local_gas_station</span
                    >
                    <h3
                      class="font-headline-sm text-headline-sm text-on-surface font-semibold"
                    >
                      1. Định Mức Tiêu Hao Nhiên Liệu Chuẩn
                    </h3>
                  </div>
                  <span
                    class="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"
                  >
                    Lít DO / Tấn.Km
                  </span>
                </div>
                <!-- Stats Highlight Grid -->
                <div class="grid grid-cols-2 gap-space-sm mt-1">
                  <div
                    class="p-space-sm rounded-lg bg-surface-container-low flex flex-col"
                  >
                    <span
                      class="font-label-sm text-label-sm text-on-surface-variant uppercase"
                      >Baseline AI Chuẩn</span
                    >
                    <span
                      class="font-headline-sm text-headline-sm text-primary font-bold mt-1"
                      >0.0185
                      <span
                        class="font-body-sm text-body-sm font-normal text-on-surface-variant"
                        >L/Tấn.Km</span
                      ></span
                    >
                    <span
                      class="font-label-sm text-label-sm text-tertiary mt-1"
                      >Biên an toàn: 0.0175 - 0.0195</span
                    >
                  </div>
                  <div
                    class="p-space-sm rounded-lg bg-error-container/30 flex flex-col"
                  >
                    <span
                      class="font-label-sm text-label-sm text-error uppercase font-medium"
                      >Chuyến ST-2025-089</span
                    >
                    <span
                      class="font-headline-sm text-headline-sm text-error font-bold mt-1"
                      >0.0224
                      <span
                        class="font-body-sm text-body-sm font-normal text-on-surface-variant"
                        >L/Tấn.Km</span
                      ></span
                    >
                    <span class="font-label-sm text-label-sm text-error mt-1"
                      >+21.0% Vượt biên độ tối đa</span
                    >
                  </div>
                </div>
                <!-- Visual Distribution Curve (Inline SVG) -->
                <div
                  class="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-2"
                >
                  <div
                    class="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm"
                  >
                    <span>Phân bố Gaussian 30 chuyến của HP-9182</span>
                    <span class="text-error font-medium"
                      >Chuyến này: Ngoại lai (Outlier)</span
                    >
                  </div>
                  <div
                    class="w-full h-28 relative flex items-center justify-center"
                  >
                    <!-- SVG Bell Curve Illustration -->
                    <svg
                      class="w-full h-full overflow-visible"
                      viewbox="0 0 400 100"
                    >
                      <!-- Shaded Normal Range -->
                      <path
                        d="M 120 95 Q 160 90 180 50 Q 200 15 220 50 Q 240 90 280 95 Z"
                        fill="#cde5ff"
                        opacity="0.6"
                      ></path>
                      <!-- Baseline Curve Line -->
                      <path
                        d="M 30 95 Q 140 95 180 45 Q 200 15 220 45 Q 260 95 370 95"
                        fill="none"
                        stroke="#00507d"
                        stroke-width="2.5"
                      ></path>
                      <!-- AI Benchmark Center Pin -->
                      <line
                        stroke="#00724f"
                        stroke-dasharray="3 3"
                        stroke-width="1.5"
                        x1="200"
                        x2="200"
                        y1="15"
                        y2="95"
                      ></line>
                      <circle cx="200" cy="15" fill="#00724f" r="4"></circle>
                      <text
                        class="text-[9px] fill-[#00573b] font-semibold"
                        x="204"
                        y="24"
                      >
                        Chuẩn AI: 0.0185
                      </text>
                      <!-- Safe Threshold Markers -->
                      <line
                        stroke="#707881"
                        stroke-width="1"
                        x1="150"
                        x2="150"
                        y1="65"
                        y2="95"
                      ></line>
                      <line
                        stroke="#707881"
                        stroke-width="1"
                        x1="250"
                        x2="250"
                        y1="65"
                        y2="95"
                      ></line>
                      <text class="text-[8px] fill-[#707881]" x="142" y="93">
                        0.0175
                      </text>
                      <text class="text-[8px] fill-[#707881]" x="242" y="93">
                        0.0195
                      </text>
                      <!-- Current Trip Dot (Outlier) -->
                      <circle cx="330" cy="90" fill="#ba1a1a" r="5"></circle>
                      <line
                        stroke="#ba1a1a"
                        stroke-width="1.5"
                        x1="330"
                        x2="330"
                        y1="50"
                        y2="90"
                      ></line>
                      <rect
                        fill="#ba1a1a"
                        height="18"
                        rx="3"
                        width="105"
                        x="275"
                        y="32"
                      ></rect>
                      <text
                        class="text-[8.5px] fill-white font-bold"
                        x="280"
                        y="44"
                      >
                        Chuyến 89: 0.0224 L
                      </text>
                    </svg>
                  </div>
                  <div
                    class="flex justify-between font-label-sm text-label-sm text-on-surface-variant"
                  >
                    <span>0.015 Lít (Siêu tiết kiệm)</span>
                    <span>0.0185 Lít (Tối ưu cơ sở)</span>
                    <span>0.023 Lít (Báo động lãng phí)</span>
                  </div>
                </div>
              </div>
              <div
                class="mt-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface-variant"
              >
                Nhận định AI: Độ dôi dư 21% bắt nguồn từ việc duy trì động lực
                ngược dòng lũ tại bãi neo Km 38.2, không phải hao hụt do động
                cơ xuống cấp.
              </div>
            </div>
            <!-- Baseline 2: Average Port Waiting Time Comparison -->
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between"
            >
              <div class="flex flex-col gap-space-sm">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span
                      class="material-symbols-outlined text-secondary text-[22px]"
                      >hourglass_top</span
                    >
                    <h3
                      class="font-headline-sm text-headline-sm text-on-surface font-semibold"
                    >
                      2. Thời Gian Chờ Cập &amp; Lưu Bến Trung Bình
                    </h3>
                  </div>
                  <span
                    class="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"
                  >
                    Theo Từng Cảng Đích
                  </span>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  So sánh thời gian neo chờ giải phóng hàng thực tế chuyến này
                  với mức bình quân lịch sử:
                </p>
                <!-- Port 1: Đoạn Xá -->
                <div
                  class="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-2"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span
                        class="material-symbols-outlined text-tertiary text-[18px]"
                        >anchor</span
                      >
                      <span
                        class="font-label-md text-label-md font-semibold text-on-surface"
                        >Bến Đoạn Xá (Cảng Xếp Hàng)</span
                      >
                    </div>
                    <span
                      class="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold"
                    >
                      Đạt Chuẩn (Khớp AI)
                    </span>
                  </div>
                  <div class="grid grid-cols-2 gap-2 text-body-sm">
                    <div>
                      <span class="text-on-surface-variant"
                        >Chuẩn 30 chuyến:</span
                      >
                      <span class="font-semibold text-on-surface ml-1"
                        >1h 15m</span
                      >
                    </div>
                    <div>
                      <span class="text-on-surface-variant"
                        >Thực tế chuyến 89:</span
                      >
                      <span class="font-bold text-tertiary ml-1"
                        >1h 10m (-5m)</span
                      >
                    </div>
                  </div>
                  <div
                    class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden"
                  >
                    <div
                      class="bg-tertiary h-full rounded-full"
                      style="width: 93%"
                    ></div>
                  </div>
                </div>
                <!-- Port 2: Phả Lại -->
                <div
                  class="p-space-sm rounded-lg bg-error-container/20 flex flex-col gap-2"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span
                        class="material-symbols-outlined text-error text-[18px]"
                        >warning</span
                      >
                      <span
                        class="font-label-md text-label-md font-semibold text-on-surface"
                        >Cảng Phả Lại (Cảng Dỡ Hàng)</span
                      >
                    </div>
                    <span
                      class="px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-bold"
                    >
                      Bất Thường: Vượt +5h 30m
                    </span>
                  </div>
                  <div class="grid grid-cols-2 gap-2 text-body-sm">
                    <div>
                      <span class="text-on-surface-variant"
                        >Chuẩn 30 chuyến:</span
                      >
                      <span class="font-semibold text-on-surface ml-1"
                        >2h 45m</span
                      >
                    </div>
                    <div>
                      <span class="text-on-surface-variant"
                        >Thực tế chuyến 89:</span
                      >
                      <span class="font-bold text-error ml-1"
                        >8h 15m (+300%)</span
                      >
                    </div>
                  </div>
                  <div
                    class="w-full bg-surface-container h-2 rounded-full overflow-hidden"
                  >
                    <div
                      class="bg-error h-full rounded-full"
                      style="width: 100%"
                    ></div>
                  </div>
                  <span class="font-label-sm text-label-sm text-error">
                    * Nguyên nhân xác nhận qua VTS: Cần cẩu bến số 2 bị gãy
                    cáp tời từ 02:15 đến 07:45 sáng.
                  </span>
                </div>
              </div>
              <div
                class="mt-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface-variant"
              >
                Dữ liệu này sẽ tự động gắn nhãn rủi ro "Cẩu bảo trì định kỳ
                thứ Hai" vào hồ sơ cảng Phả Lại.
              </div>
            </div>
          </div>
          <!-- SIMULATION BOX: LIVE AI BENCHMARK GUARD ON TRIP #31 CREATION -->
          <div
            class="w-full bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-md"
          >
            <div
              class="flex flex-col md:flex-row md:items-center justify-between gap-space-xs pb-space-xs"
            >
              <div class="flex items-center gap-space-xs">
                <span
                  class="w-3 h-3 rounded-full bg-secondary animate-ping"
                ></span>
                <span
                  class="font-label-md text-label-md uppercase tracking-wider font-bold text-secondary"
                >
                  Ứng Dụng Thực Chiến Đột Phá • AI Benchmark Guard
                </span>
              </div>
              <span
                class="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium"
              >
                Mô Phỏng Popup Cảnh Báo Khi Tạo Chuyến Thứ 31
              </span>
            </div>
            <div
              class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center"
            >
              <!-- Left: Simulation Modal Preview -->
              <div
                class="lg:col-span-7 bg-surface-container-low rounded-xl p-space-md shadow-inner flex flex-col gap-space-md"
              >
                <!-- Simulated Browser Dialog Header -->
                <div class="flex items-center justify-between pb-2">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-error"></span>
                    <span
                      class="w-2.5 h-2.5 rounded-full bg-secondary-container"
                    ></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                    <span
                      class="font-label-sm text-label-sm font-semibold text-on-surface ml-2"
                      >SmartTrip AI Safety Guard — Dispatcher Window</span
                    >
                  </div>
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant"
                    >Chuyến #31 (ST-2025-090)</span
                  >
                </div>
                <!-- The Actual Modal Warning Content -->
                <div
                  class="bg-surface-container-lowest rounded-lg p-space-md shadow-md flex flex-col gap-space-sm"
                >
                  <div class="flex items-start gap-space-sm">
                    <div
                      class="p-2 bg-error-container text-error rounded-lg shrink-0"
                    >
                      <span class="material-symbols-outlined text-[28px]"
                        >warning</span
                      >
                    </div>
                    <div class="flex flex-col">
                      <h4
                        class="font-headline-sm text-headline-sm text-error font-bold"
                      >
                        Cảnh Báo Vượt Định Mức Lũy Kế!
                      </h4>
                      <p
                        class="font-body-md text-body-md text-on-surface mt-1 leading-snug"
                      >
                        Lượng dầu cấp phát dự toán (<strong class="text-error"
                          >1.050 Lít</strong
                        >) cao hơn
                        <strong class="text-error">15.1%</strong> so với mức
                        tiêu hao trung bình được kiểm chứng của 30 chuyến
                        trước (<strong class="text-primary">912 Lít</strong>).
                        Vui lòng rà soát lại!
                      </p>
                    </div>
                  </div>
                  <!-- Difference Indicator Mini Bar -->
                  <div
                    class="mt-2 p-space-xs rounded bg-surface-container flex items-center justify-between text-body-sm"
                  >
                    <div class="flex flex-col">
                      <span
                        class="font-label-sm text-label-sm text-on-surface-variant"
                        >Benchmark Chuẩn AI (30 chuyến)</span
                      >
                      <span
                        class="font-label-md text-label-md font-bold text-primary"
                        >912 Lít DO</span
                      >
                    </div>
                    <span class="material-symbols-outlined text-error"
                      >trending_up</span
                    >
                    <div class="flex flex-col text-right">
                      <span
                        class="font-label-sm text-label-sm text-on-surface-variant"
                        >Điều hành viên vừa nhập</span
                      >
                      <span
                        class="font-label-md text-label-md font-bold text-error"
                        >1.050 Lít DO (+138 Lít)</span
                      >
                    </div>
                  </div>
                  <!-- Action Buttons -->
                  <div
                    class="flex flex-col sm:flex-row items-center justify-end gap-2 pt-2"
                  >
                    <button
                      class="w-full sm:w-auto px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors"
                      type="button"
                    >
                      Giữ Nguyên &amp; Bắt Buộc Nhập Lý Do Ngoại Lệ
                    </button>
                    <button
                      class="w-full sm:w-auto px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-sm hover:bg-primary transition-colors flex items-center justify-center gap-1.5"
                      type="button"
                    >
                      <span class="material-symbols-outlined text-[16px]"
                        >auto_fix_high</span
                      >
                      Điều Chỉnh Về Định Mức Chuẩn AI (912 Lít)
                    </button>
                  </div>
                </div>
              </div>
              <!-- Right: Strategic Value Explanation -->
              <div class="lg:col-span-5 flex flex-col gap-space-sm">
                <div class="flex items-center gap-2">
                  <span
                    class="material-symbols-outlined text-tertiary text-[24px]"
                    >verified_user</span
                  >
                  <h3
                    class="font-headline-sm text-headline-sm text-on-surface font-bold"
                  >
                    Chặn Đứng Thất Thoát Trước Giờ Xuất Bến
                  </h3>
                </div>
                <p class="font-body-md text-body-md text-on-surface-variant">
                  Thay vì chờ kết thúc tháng mới kiểm kê và phát hiện hao dầu,
                  SmartTrip IWT can thiệp ngay tại
                  <strong>thời điểm cấp lệnh cấp phát</strong>.
                </p>
                <div class="space-y-2 mt-1">
                  <div
                    class="flex items-start gap-2 text-body-sm text-on-surface"
                  >
                    <span
                      class="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5"
                      >check_circle</span
                    >
                    <span
                      ><strong>Giới hạn vật lý phương tiện:</strong> Ngăn chặn
                      việc nhân viên điều hành cấp dư dầu để tạo quỹ "ngoài sổ
                      sách".</span
                    >
                  </div>
                  <div
                    class="flex items-start gap-2 text-body-sm text-on-surface"
                  >
                    <span
                      class="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5"
                      >check_circle</span
                    >
                    <span
                      ><strong>Vết kiểm toán (Audit Trail):</strong> Mọi ngoại
                      lệ bắt buộc phải có giải trình số hóa và thuyền trưởng
                      cùng phê duyệt.</span
                    >
                  </div>
                  <div
                    class="flex items-start gap-2 text-body-sm text-on-surface"
                  >
                    <span
                      class="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5"
                      >check_circle</span
                    >
                    <span
                      ><strong>Tiết kiệm thực nghiệm:</strong> Giảm trung bình
                      4.2% - 6.8% tổng chi phí dầu DO hàng tháng cho mỗi đoàn
                      tàu tự hành.</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- SECTION 4: ACTIONABLE RECOMMENDATIONS (KIẾN NGHỊ TỐI ƯU HÓA) -->
      <section class="w-full px-margin py-space-xl">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <!-- Section Title -->
          <div>
            <div
              class="flex items-center gap-space-xs text-tertiary font-label-md text-label-md uppercase tracking-wider font-semibold"
            >
              <span class="w-2 h-2 rounded-full bg-tertiary"></span>
              Đề Xuất Hành Động Ngay
            </div>
            <h2
              class="font-headline-md text-headline-md text-on-surface font-bold tracking-tight"
            >
              Kiến Nghị Tối Ưu Hóa Tự Động Cho Chủ Tàu &amp; Bộ Phận Điều Hành
            </h2>
            <p class="font-body-md text-body-md text-on-surface-variant mt-1">
              Hệ thống AI tổng hợp từ chuyến vừa qua để đưa ra 3 thay đổi
              chiến thuật mang lại hiệu quả tức thì cho chuyến kế tiếp.
            </p>
          </div>
          <!-- 3 Recommendation Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <!-- Card 1 -->
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div class="flex flex-col gap-space-xs">
                <div
                  class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-2"
                >
                  <span class="material-symbols-outlined text-[24px]"
                    >contract_edit</span
                  >
                </div>
                <span
                  class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold"
                  >Bảo Toàn Doanh Thu</span
                >
                <h3
                  class="font-headline-sm text-headline-sm text-on-surface font-bold"
                >
                  Ký Phụ Lục Phạt Lưu Bến Cảng Phả Lại
                </h3>
                <p
                  class="font-body-sm text-body-sm text-on-surface-variant mt-1"
                >
                  Thời gian dỡ hàng bị trễ 5.5 giờ do lỗi cẩu của cảng. Cần bổ
                  sung điều khoản cam kết bến giải phóng hàng với mức phạt
                  300.000đ/giờ trễ để thu hồi 1.500.000đ tiền lưu ca phát
                  sinh.
                </p>
              </div>
              <div
                class="mt-space-md pt-space-xs flex items-center justify-between"
              >
                <span
                  class="font-label-sm text-label-sm text-tertiary font-bold"
                  >+1.500.000đ thu hồi</span
                >
                <button
                  class="text-primary hover:text-secondary font-label-md text-label-md font-semibold flex items-center gap-1"
                  type="button"
                >
                  Xem mẫu điều khoản
                  <span class="material-symbols-outlined text-[16px]"
                    >arrow_forward</span
                  >
                </button>
              </div>
            </div>
            <!-- Card 2 -->
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div class="flex flex-col gap-space-xs">
                <div
                  class="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary mb-2"
                >
                  <span class="material-symbols-outlined text-[24px]"
                    >foggy</span
                  >
                </div>
                <span
                  class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold"
                  >Tối Ưu Thủy Văn</span
                >
                <h3
                  class="font-headline-sm text-headline-sm text-on-surface font-bold"
                >
                  Điều Chỉnh Giờ Rời Bến Tránh Sương Mù
                </h3>
                <p
                  class="font-body-sm text-body-sm text-on-surface-variant mt-1"
                >
                  Mô-đun dự báo thời tiết thủy văn cảnh báo sương mù đặc
                  thường trực tại Km 38 Kinh Thầy từ 03:00 - 06:30. Khuyến
                  nghị lùi giờ xuất bến Đoạn Xá sau 06:30 để tiết kiệm ~120L
                  dầu máy chạy chờ.
                </p>
              </div>
              <div
                class="mt-space-md pt-space-xs flex items-center justify-between"
              >
                <span
                  class="font-label-sm text-label-sm text-tertiary font-bold"
                  >Tiết kiệm 120L DO</span
                >
                <button
                  class="text-primary hover:text-secondary font-label-md text-label-md font-semibold flex items-center gap-1"
                  type="button"
                >
                  Lập lại lịch chạy
                  <span class="material-symbols-outlined text-[16px]"
                    >arrow_forward</span
                  >
                </button>
              </div>
            </div>
            <!-- Card 3 -->
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div class="flex flex-col gap-space-xs">
                <div
                  class="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary mb-2"
                >
                  <span class="material-symbols-outlined text-[24px]"
                    >tune</span
                  >
                </div>
                <span
                  class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold"
                  >Học Máy Thích Ứng</span
                >
                <h3
                  class="font-headline-sm text-headline-sm text-on-surface font-bold"
                >
                  Cập Nhật Trọng Số Mùa Lũ / Sương Mù
                </h3>
                <p
                  class="font-body-sm text-body-sm text-on-surface-variant mt-1"
                >
                  Hệ thống AI tự động hiệu chỉnh hệ số cản luồng mùa lạnh
                  (+4.5%) vào thuật toán tính toán của chuyến thứ 31, giữ cho
                  ngân sách dự phòng luôn bám sát điều kiện vật lý thực địa.
                </p>
              </div>
              <div
                class="mt-space-md pt-space-xs flex items-center justify-between"
              >
                <span
                  class="font-label-sm text-label-sm text-primary font-bold"
                  >Đã nạp vào model</span
                >
                <button
                  class="text-primary hover:text-secondary font-label-md text-label-md font-semibold flex items-center gap-1"
                  type="button"
                >
                  Chi tiết trọng số
                  <span class="material-symbols-outlined text-[16px]"
                    >arrow_forward</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Interactive script for simulation toggle button -->
      <!-- <script>
        document.addEventListener("DOMContentLoaded", function () {
          const adjustBtn = document.querySelector(
            "button:has(.material-symbols-outlined)"
          );
          if (adjustBtn) {
            adjustBtn.addEventListener("click", function () {
              const valDisplay = this.closest(
                ".bg-surface-container-lowest"
              ).querySelector(".text-error.font-bold");
              if (valDisplay && valDisplay.innerText.includes("1.050")) {
                valDisplay.innerText = "912 Lít DO (Đã chuẩn hóa)";
                valDisplay.classList.remove("text-error");
                valDisplay.classList.add("text-tertiary");
                this.innerText = "✓ Đã Áp Dụng Định Mức AI";
                this.classList.remove("bg-primary-container");
                this.classList.add("bg-tertiary-container");
              }
            });
          }
        });
      </script> -->
    </div>
  </main>
</template>
