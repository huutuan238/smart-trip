<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="w-full pt-16 bg-background flex-1 flex flex-col">
    <div class="flex flex-col w-full">
      <!-- HERO INTRODUCTION SECTION -->
      <section
        class="relative w-full px-margin py-space-xl overflow-hidden bg-gradient-to-b from-surface-container-lowest via-background to-surface-container-low"
      >
        <div
          class="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10"
        >
          <!-- Top Pill Tagline -->
          <div
            class="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high text-primary shadow-sm mb-space-lg"
          >
            <span
              class="w-2 h-2 rounded-full bg-tertiary animate-ping"
            ></span>
            <span
              class="font-label-sm text-label-sm uppercase tracking-wider font-semibold"
              >Công Nghệ Số Hóa Logistics Thủy Thế Hệ Mới</span
            >
          </div>
          <!-- Main Headline -->
          <h1
            class="font-display text-display text-on-surface max-w-5xl tracking-tight leading-tight mb-space-md"
          >
            SmartTrip IWT — Nền Tảng Số Hóa &amp; Quản Trị Vận Tải Thủy Nội
            Địa Toàn Diện
          </h1>
          <!-- Subtitle Description -->
          <p
            class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-space-xl font-normal leading-relaxed"
          >
            Giải pháp thông minh đồng hành cùng Chủ tàu &amp; Điều hành viên:
            Từ lập kế hoạch P&amp;L trước chuyến, phân tích an toàn thủy văn
            luồng lạch, giám sát ngoại lệ thời gian thực đến tự động đối soát
            &amp; chuẩn hóa định mức dầu bằng AI.
          </p>
          <!-- Primary Action Buttons -->
          <div
            class="flex flex-wrap items-center justify-center gap-space-md mb-space-xl"
          >
            <a
              class="px-space-lg py-3.5 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-md hover:bg-primary transition-all flex items-center gap-space-xs group"
              href="#chuc-nang"
            >
              <span>Khám Phá Các Chức Năng</span>
              <span
                class="material-symbols-outlined text-base group-hover:translate-y-0.5 transition-transform"
                >arrow_downward</span
              >
            </a>
            <router-link
              class="px-space-lg py-3.5 bg-surface-container-lowest text-on-surface font-label-lg text-label-lg rounded-xl shadow-sm hover:bg-surface-container transition-all flex items-center gap-space-xs"
              to="tao-chuyen-moi"
            >
              <span class="material-symbols-outlined text-primary text-base"
                >add_circle</span
              >
              <span>Tạo Chuyến Mới Ngay</span>
            </router-link>
            <!-- <button
              class="px-space-md py-3.5 text-primary hover:bg-surface-container-high font-label-lg text-label-lg rounded-xl transition-all flex items-center gap-space-xs"
              onclick="document.getElementById('cockpitModal').classList.remove('hidden')"
            >
              <span class="material-symbols-outlined text-base"
                >smart_display</span
              >
              <span>Xem Bản Dùng Thử Buồng Lái</span>
            </button> -->
          </div>
          <!-- 3 Impact Badges -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-space-md w-full max-w-4xl pt-space-md"
          >
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md text-left"
            >
              <div
                class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-primary"
              >
                <span class="material-symbols-outlined text-2xl"
                  >local_gas_station</span
                >
              </div>
              <div>
                <div
                  class="font-headline-sm text-headline-sm text-tertiary font-bold"
                >
                  Giảm 15%
                </div>
                <div
                  class="font-body-sm text-body-sm text-on-surface-variant"
                >
                  Hao hụt &amp; lãng phí nhiên liệu DO
                </div>
              </div>
            </div>
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md text-left"
            >
              <div
                class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-primary"
              >
                <span class="material-symbols-outlined text-2xl">radar</span>
              </div>
              <div>
                <div
                  class="font-headline-sm text-headline-sm text-primary font-bold"
                >
                  Cảnh Báo 24/7
                </div>
                <div
                  class="font-body-sm text-body-sm text-on-surface-variant"
                >
                  Quản trị ngoại lệ luồng, tĩnh không
                </div>
              </div>
            </div>
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md text-left"
            >
              <div
                class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-primary"
              >
                <span class="material-symbols-outlined text-2xl"
                  >history_edu</span
                >
              </div>
              <div>
                <div
                  class="font-headline-sm text-headline-sm text-secondary font-bold"
                >
                  Số Hóa 100%
                </div>
                <div
                  class="font-body-sm text-body-sm text-on-surface-variant"
                >
                  Nhật ký hành trình &amp; chứng từ chuyến
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- VISUAL BANNER WITH MARITIME INSPIRATION -->
      <section class="w-full px-margin -mt-8">
        <div
          class="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-md bg-surface-container-lowest p-space-sm"
        >
          <div
            class="relative w-full h-80 rounded-lg overflow-hidden bg-cover bg-center"
            data-alt="A modern commercial inland cargo vessel sailing calmly through an expansive river delta in Vietnam under warm natural daylight, clean technical aesthetic, showing bridge instruments, blue water and lush green riverbanks, high resolution photography"
            style="
              background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8ziSGtHCEomrRWTYBJWezwXE1Q4wmFpyJjUV-5StvmcXPDQo5KzibJVLBWxWxYo1mMjGSeLABKLl7sFqkZOjf32YaavvPbAtWTa-hytCNjvTX17ctaQGm6oVAq7EJTt0YsMalexuKnSbCbl3aHiiOSi_bSSiBmK2n4oYXdst8GBeNvlVDz7dcdXgwPQtrHZsZmJMi-mFrc5dECPxoUQFvveAHKCQgYKQhIDNEIk_dqrTNb8RNzRB8');
            "
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent flex items-end p-space-lg"
            >
              <div class="text-on-primary max-w-lg">
                <span
                  class="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed font-semibold"
                  >Tự động hoá luồng vận tải thủy</span
                >
                <p class="font-headline-md text-headline-md font-bold mt-1">
                  Đưa công nghệ buồng lái thông minh đến từng chuyến tàu
                </p>
                <p
                  class="font-body-sm text-body-sm text-on-primary-container mt-1"
                >
                  Hỗ trợ các tuyến huyết mạch Sông Hồng - Quảng Ninh - Hải
                  Phòng &amp; Hệ thống sông Cửu Long - Đông Nam Bộ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 4 CORE FUNCTIONAL MODULES (BENTO SHOWCASE) -->
      <section
        class="w-full px-margin py-space-xl scroll-mt-20"
        id="chuc-nang"
      >
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col items-center text-center mb-space-xl">
            <div
              class="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-wider mb-space-xs"
            >
              <span class="material-symbols-outlined text-sm"
                >view_quilt</span
              >
              <span>Phân Hệ Vận Hành Toàn Diện</span>
            </div>
            <h2
              class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"
            >
              Bộ 4 Trụ Cột Tính Năng Thông Minh Của SmartTrip IWT
            </h2>
            <p
              class="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-space-xs"
            >
              Thiết kế tinh giản, loại bỏ thao tác thủ công rườm rà. Tập trung
              tối đa vào hiệu quả thương mại và an toàn sông nước.
            </p>
          </div>
          <!-- Bento Grid 4 Features -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <!-- MODULE 1: Pre-trip P&L Planning -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div class="flex items-center justify-between mb-space-md">
                  <div
                    class="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined text-2xl"
                      >calculate</span
                    >
                  </div>
                  <span
                    class="font-label-sm text-label-sm px-space-sm py-1 bg-surface-container rounded-full text-on-surface-variant font-medium"
                    >PHÂN HỆ 01</span
                  >
                </div>
                <h3
                  class="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm"
                >
                  Lập Kế Hoạch &amp; Dự Toán P&amp;L Tự Động
                </h3>
                <p
                  class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md"
                >
                  Xóa bỏ nỗi lo nhận chuyến lỗ. Hệ thống tự động phân tích
                  định mức chi phí trước khi tàu rời cảng bến xuất phát.
                </p>
                <ul
                  class="space-y-space-sm font-body-sm text-body-sm text-on-surface"
                >
                  <li class="flex items-start gap-space-xs">
                    <span
                      class="material-symbols-outlined text-tertiary text-sm mt-0.5"
                      >check_circle</span
                    >
                    <span
                      ><strong>Dự toán lãi gộp tức thì:</strong> Tự tính toán
                      doanh thu cước, định mức dầu DO, phí hoa tiêu, bến bãi
                      và phí qua âu thuyền.</span
                    >
                  </li>
                  <li class="flex items-start gap-space-xs">
                    <span
                      class="material-symbols-outlined text-tertiary text-sm mt-0.5"
                      >check_circle</span
                    >
                    <span
                      ><strong>Kiểm tra mớn nước &amp; tải trọng:</strong>
                      Thuật toán tự động đối sánh mớn thiết kế của tàu với cấp
                      luồng để tránh tình trạng quá tải hoặc mắc cạn.</span
                    >
                  </li>
                </ul>
              </div>
              <!-- Feature micro-visual -->
              <div
                class="mt-space-lg pt-space-md bg-surface-container-low p-space-md rounded-lg flex items-center justify-between"
              >
                <div class="flex items-center gap-space-sm">
                  <span class="material-symbols-outlined text-primary"
                    >analytics</span
                  >
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant font-medium"
                    >Dự phóng lợi nhuận:</span
                  >
                </div>
                <div
                  class="font-headline-sm text-headline-sm text-tertiary font-bold"
                >
                  +24.500.000 đ
                  <span
                    class="font-label-sm text-label-sm font-normal text-on-surface-variant"
                    >/ chuyến</span
                  >
                </div>
              </div>
            </div>
            <!-- MODULE 2: Hydro Risk & Navigation Scenarios -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div class="flex items-center justify-between mb-space-md">
                  <div
                    class="w-12 h-12 rounded-xl bg-surface-container-high text-secondary flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined text-2xl"
                      >water</span
                    >
                  </div>
                  <span
                    class="font-label-sm text-label-sm px-space-sm py-1 bg-surface-container rounded-full text-on-surface-variant font-medium"
                    >PHÂN HỆ 02</span
                  >
                </div>
                <h3
                  class="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm"
                >
                  Đánh Giá Rủi Ro Luồng &amp; Kịch Bản Kỹ Thuật
                </h3>
                <p
                  class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md"
                >
                  Tích hợp dữ liệu trạm thủy văn quốc gia giúp thuyền trưởng
                  không còn phụ thuộc hoàn toàn vào cảm tính cá nhân.
                </p>
                <ul
                  class="space-y-space-sm font-body-sm text-body-sm text-on-surface"
                >
                  <li class="flex items-start gap-space-xs">
                    <span
                      class="material-symbols-outlined text-secondary text-sm mt-0.5"
                      >check_circle</span
                    >
                    <span
                      ><strong
                        >Giám sát thủy triều &amp; tĩnh không cầu:</strong
                      >
                      Cảnh báo trước điểm thắt cổ chai, tĩnh không cầu thấp
                      theo giờ con nước lên/xuống.</span
                    >
                  </li>
                  <li class="flex items-start gap-space-xs">
                    <span
                      class="material-symbols-outlined text-secondary text-sm mt-0.5"
                      >check_circle</span
                    >
                    <span
                      ><strong>Gợi ý 3 kịch bản A / B / C:</strong> Lựa chọn
                      tối ưu giữa "Chạy nhanh đón nước", "Neo chờ con nước
                      tiết kiệm dầu" hoặc "Đi luồng vòng an toàn".</span
                    >
                  </li>
                </ul>
              </div>
              <!-- Feature micro-visual -->
              <div
                class="mt-space-lg pt-space-md bg-surface-container-low p-space-md rounded-lg flex items-center justify-between"
              >
                <div class="flex items-center gap-space-sm">
                  <span class="material-symbols-outlined text-secondary"
                    >explore</span
                  >
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant font-medium"
                    >Dự báo cạn luồng:</span
                  >
                </div>
                <span
                  class="px-space-sm py-0.5 bg-surface-container-highest text-primary font-label-sm text-label-sm rounded font-bold"
                  >Trước 6 giờ di chuyển</span
                >
              </div>
            </div>
            <!-- MODULE 3: Journey Tracking & Exception Management -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div class="flex items-center justify-between mb-space-md">
                  <div
                    class="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined text-2xl"
                      >traffic</span
                    >
                  </div>
                  <span
                    class="font-label-sm text-label-sm px-space-sm py-1 bg-surface-container rounded-full text-on-surface-variant font-medium"
                    >PHÂN HỆ 03</span
                  >
                </div>
                <h3
                  class="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm"
                >
                  Giám Sát Ngoại Lệ (Management by Exception)
                </h3>
                <p
                  class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md"
                >
                  Điều hành viên không cần nhìn màn hình 24/24. Hệ thống phân
                  luồng Xanh / Vàng / Đỏ và chỉ cảnh báo khi phát sinh lệch
                  chuẩn.
                </p>
                <ul
                  class="space-y-space-sm font-body-sm text-body-sm text-on-surface"
                >
                  <li class="flex items-start gap-space-xs">
                    <span
                      class="material-symbols-outlined text-primary text-sm mt-0.5"
                      >check_circle</span
                    >
                    <span
                      ><strong>Buồng lái 1-Chạm cho Thuyền trưởng:</strong>
                      Báo cáo đến trạm, neo đậu, hoàn tất làm hàng chỉ bằng 1
                      nút bấm lớn trên Smartphone, không gõ chữ.</span
                    >
                  </li>
                  <li class="flex items-start gap-space-xs">
                    <span
                      class="material-symbols-outlined text-primary text-sm mt-0.5"
                      >check_circle</span
                    >
                    <span
                      ><strong>Phân loại Vùng Vàng / Đỏ:</strong> Nhận diện
                      sớm nguy cơ trễ hẹn tàu mẹ (Container) hoặc lỡ khung giờ
                      xếp dỡ tại cầu cảng nước sâu.</span
                    >
                  </li>
                </ul>
              </div>
              <!-- Feature micro-visual -->
              <div
                class="mt-space-lg pt-space-md bg-surface-container-low p-space-md rounded-lg flex items-center justify-between"
              >
                <div class="flex items-center gap-space-sm">
                  <span class="w-3 h-3 rounded-full bg-tertiary"></span>
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant"
                    >Xanh: Đúng lịch</span
                  >
                </div>
                <div class="flex items-center gap-space-sm">
                  <span
                    class="w-3 h-3 rounded-full bg-secondary-container"
                  ></span>
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant"
                    >Vàng: Nguy cơ</span
                  >
                </div>
                <div class="flex items-center gap-space-sm">
                  <span class="w-3 h-3 rounded-full bg-error"></span>
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant"
                    >Đỏ: Can thiệp gấp</span
                  >
                </div>
              </div>
            </div>
            <!-- MODULE 4: P&L Post-trip Audit & AI Optimization -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div class="flex items-center justify-between mb-space-md">
                  <div
                    class="w-12 h-12 rounded-xl bg-surface-container-high text-tertiary flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined text-2xl"
                      >neurology</span
                    >
                  </div>
                  <span
                    class="font-label-sm text-label-sm px-space-sm py-1 bg-surface-container rounded-full text-on-surface-variant font-medium"
                    >PHÂN HỆ 04</span
                  >
                </div>
                <h3
                  class="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm"
                >
                  Đối Soát P&amp;L Sau Chuyến &amp; Chuẩn Hóa Bằng AI
                </h3>
                <p
                  class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md"
                >
                  Biến dữ liệu hành trình thành lợi nhuận thực tế. Tự động bóc
                  tách từng lít dầu chênh lệch so với kế hoạch ban đầu.
                </p>
                <ul
                  class="space-y-space-sm font-body-sm text-body-sm text-on-surface"
                >
                  <li class="flex items-start gap-space-xs">
                    <span
                      class="material-symbols-outlined text-tertiary text-sm mt-0.5"
                      >check_circle</span
                    >
                    <span
                      ><strong>So sánh Dự toán vs. Thực chi:</strong> Báo cáo
                      minh bạch chênh lệch dầu do tải ngược dòng, nước xiết
                      hay thời gian neo nổ máy chờ cầu bến.</span
                    >
                  </li>
                  <li class="flex items-start gap-space-xs">
                    <span
                      class="material-symbols-outlined text-tertiary text-sm mt-0.5"
                      >check_circle</span
                    >
                    <span
                      ><strong>Học máy AI tự hoàn thiện:</strong> Liên tục cập
                      nhật hệ số tiêu thụ nhiên liệu (Lít/Tấn.Km) chuẩn xác
                      nhất cho từng phân khúc sà lan và tàu đẩy.</span
                    >
                  </li>
                </ul>
              </div>
              <!-- Feature micro-visual -->
              <div
                class="mt-space-lg pt-space-md bg-surface-container-low p-space-md rounded-lg flex items-center justify-between"
              >
                <div class="flex items-center gap-space-sm">
                  <span class="material-symbols-outlined text-tertiary"
                    >tune</span
                  >
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant font-medium"
                    >Độ chính xác định mức AI:</span
                  >
                </div>
                <span
                  class="font-headline-sm text-headline-sm text-tertiary font-bold"
                  >96.8%</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 3-STEP OPERATION FLOW -->
      <section class="w-full px-margin py-space-xl bg-surface-container-low">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col items-center text-center mb-space-xl">
            <span
              class="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider mb-space-xs"
              >Vận Hành Đơn Giản</span
            >
            <h2
              class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"
            >
              Quy Trình 3 Bước Tinh Gọn Cho Doanh Nghiệp Thủy
            </h2>
            <p
              class="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-xs"
            >
              Không đòi hỏi đào tạo phức tạp. Toàn bộ cán bộ quản lý và thuyền
              viên có thể sử dụng thành thạo ngay trong ngày đầu tiên.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg relative">
            <!-- Step 1 -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col relative z-10"
            >
              <div
                class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md font-bold mb-space-md shadow-sm"
              >
                1
              </div>
              <h3
                class="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs"
              >
                Khởi Tạo &amp; Kiểm Tra Nhanh
              </h3>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed"
              >
                Nhập cảng đi - đến và loại hàng. Hệ thống tự động kiểm tra
                tĩnh không cầu, mớn nước luồng và ra bảng P&amp;L dự phóng chỉ
                trong <strong>dưới 2 phút</strong>.
              </p>
              <div
                class="mt-auto pt-space-md flex items-center text-primary font-label-sm text-label-sm font-semibold gap-1"
              >
                <span class="material-symbols-outlined text-sm"
                  >schedule</span
                >
                <span>Tiết kiệm 80% thời gian tính toán</span>
              </div>
            </div>
            <!-- Step 2 -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col relative z-10"
            >
              <div
                class="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-md text-headline-md font-bold mb-space-md shadow-sm"
              >
                2
              </div>
              <h3
                class="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs"
              >
                Thuyền Trưởng Báo Cáo 1-Chạm
              </h3>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed"
              >
                Thuyền trưởng xác nhận vị trí, hoàn tất bơm hút dầu hoặc cập
                cảng bằng nút bấm lớn trên điện thoại. Không mất thời gian
                viết sổ sách thủ công.
              </p>
              <div
                class="mt-auto pt-space-md flex items-center text-secondary font-label-sm text-label-sm font-semibold gap-1"
              >
                <span class="material-symbols-outlined text-sm"
                  >touch_app</span
                >
                <span>Giao diện ngón cái siêu thuận tiện</span>
              </div>
            </div>
            <!-- Step 3 -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col relative z-10"
            >
              <div
                class="w-12 h-12 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-headline-md text-headline-md font-bold mb-space-md shadow-sm"
              >
                3
              </div>
              <h3
                class="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs"
              >
                Tự Động Đối Soát &amp; Lưu Trữ
              </h3>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed"
              >
                Ngay khi cập bến dỡ hàng, báo cáo kết thúc chuyến xuất ra
                ngay: Doanh thu thực tế, sai lệch dầu theo từng chặng và ghi
                nhận định mức học máy mới.
              </p>
              <div
                class="mt-auto pt-space-md flex items-center text-tertiary font-label-sm text-label-sm font-semibold gap-1"
              >
                <span class="material-symbols-outlined text-sm"
                  >verified</span
                >
                <span>Minh bạch tuyệt đối với chủ tàu</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- WHO BENEFITS SECTION (TARGET USERS) -->
      <section class="w-full px-margin py-space-xl">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col items-center text-center mb-space-xl">
            <span
              class="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider mb-space-xs"
              >Giải Pháp May Đo Riêng</span
            >
            <h2
              class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"
            >
              Giá Trị Thực Tiễn Cho Từng Bộ Phận Doanh Nghiệp
            </h2>
            <p
              class="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-xs"
            >
              Mỗi vai trò đều có một không gian làm việc chuyên biệt, giải
              quyết đúng áp lực và mong muốn hàng ngày.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <!-- Persona 1: Ship Owner / Director -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col"
            >
              <div
                class="w-10 h-10 rounded-lg bg-surface-container text-primary flex items-center justify-center mb-space-md"
              >
                <span class="material-symbols-outlined">corporate_fare</span>
              </div>
              <h3
                class="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs"
              >
                Chủ Tàu &amp; Ban Giám Đốc
              </h3>
              <p
                class="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold mb-space-sm"
              >
                Kiểm soát dòng tiền &amp; Lợi nhuận
              </p>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md"
              >
                Biết rõ lãi - lỗ từng chuyến theo thời gian thực thay vì chờ
                kế toán cộng dồn cuối tháng. Giám sát chống thất thoát dầu DO
                và theo dõi hiệu suất tài sản đội sà lan.
              </p>
              <div
                class="mt-auto bg-surface-container-low p-space-sm rounded font-body-sm text-body-sm text-on-surface font-medium flex items-center gap-space-xs"
              >
                <span class="material-symbols-outlined text-primary text-base"
                  >trending_up</span
                >
                <span>Tối ưu hóa 12-18% chi phí vận hành năm</span>
              </div>
            </div>
            <!-- Persona 2: Dispatcher / Operations -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col"
            >
              <div
                class="w-10 h-10 rounded-lg bg-surface-container text-secondary flex items-center justify-center mb-space-md"
              >
                <span class="material-symbols-outlined">support_agent</span>
              </div>
              <h3
                class="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs"
              >
                Điều Hành Viên Ca Trực
              </h3>
              <p
                class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold mb-space-sm"
              >
                Không áp lực quá tải thông tin
              </p>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md"
              >
                Không cần gọi điện thoại giục giã thuyền trưởng từng giờ. Hệ
                thống tự nhận diện các chuyến chậm tiến độ hoặc nguy cơ mắc
                cạn để bạn chỉ xử lý các ngoại lệ thật sự cần can thiệp.
              </p>
              <div
                class="mt-auto bg-surface-container-low p-space-sm rounded font-body-sm text-body-sm text-on-surface font-medium flex items-center gap-space-xs"
              >
                <span
                  class="material-symbols-outlined text-secondary text-base"
                  >notifications_active</span
                >
                <span>Giảm 75% các cuộc gọi kiểm tra tiến độ</span>
              </div>
            </div>
            <!-- Persona 3: Vessel Captain -->
            <div
              class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col"
            >
              <div
                class="w-10 h-10 rounded-lg bg-surface-container text-tertiary flex items-center justify-center mb-space-md"
              >
                <span class="material-symbols-outlined">sailing</span>
              </div>
              <h3
                class="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs"
              >
                Thuyền Trưởng Buồng Lái
              </h3>
              <p
                class="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-semibold mb-space-sm"
              >
                Lái tàu an toàn, không sổ sách
              </p>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md"
              >
                Ứng dụng mobile tối giản với các nút bấm to bản giúp thao tác
                bằng một tay dễ dàng ngay cả khi đang cầm vô lăng. Cảnh báo
                tĩnh không cầu và mực nước hỗ trợ tránh tai nạn luồng.
              </p>
              <div
                class="mt-auto bg-surface-container-low p-space-sm rounded font-body-sm text-body-sm text-on-surface font-medium flex items-center gap-space-xs"
              >
                <span
                  class="material-symbols-outlined text-tertiary text-base"
                  >security</span
                >
                <span>Chuyến đi an toàn, minh bạch dầu mỡ</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- SIMPLE & ELEGANT BOTTOM CTA -->
      <section class="w-full px-margin py-space-xl bg-surface-container">
        <div
          class="max-w-5xl mx-auto bg-surface-container-lowest p-space-xl rounded-xl shadow-md text-center flex flex-col items-center"
        >
          <div
            class="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center mb-space-md shadow-sm"
          >
            <span class="material-symbols-outlined text-3xl">anchor</span>
          </div>
          <h2
            class="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs"
          >
            Sẵn Sàng Nâng Tầm Đội Tàu Thủy Của Bạn?
          </h2>
          <p
            class="font-body-md text-body-md text-on-surface-variant max-w-xl mb-space-lg"
          >
            Bắt đầu số hóa hành trình chuyến ngay hôm nay để tiết kiệm chi
            phí, an toàn tuyệt đối và nâng cao năng lực cạnh tranh cho doanh
            nghiệp vận tải.
          </p>
          <div
            class="flex flex-wrap items-center justify-center gap-space-md"
          >
            <router-link
              class="px-space-lg py-3.5 bg-primary text-on-primary font-label-lg text-label-lg rounded-xl shadow-md hover:bg-primary-container transition-all flex items-center gap-space-xs"
              to="tao-chuyen-moi"
            >
              <span class="material-symbols-outlined text-base"
                >rocket_launch</span
              >
              <span>Bắt Đầu Tạo Chuyến Ngay</span>
            </router-link>
            <a
              class="px-space-lg py-3.5 bg-surface-container-low text-on-surface font-label-lg text-label-lg rounded-xl shadow-sm hover:bg-surface-container-high transition-all flex items-center gap-space-xs"
              href="#"
            >
              <span class="material-symbols-outlined text-base">call</span>
              <span>Liên Hệ Chuyên Viên Tư Vấn</span>
            </a>
          </div>
          <span class="font-label-sm text-label-sm text-outline mt-space-md"
            >Hỗ trợ kết nối hệ thống AIS có sẵn &amp; Miễn phí thử nghiệm cho
            02 sà lan đầu tiên.</span
          >
        </div>
      </section>
      <!-- QUICK COCKPIT PREVIEW MODAL (LIGHTWEIGHT MICRO-INTERACTION) -->
      <div
        class="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm hidden flex items-center justify-center p-space-md"
        id="cockpitModal"
      >
        <div
          class="bg-surface-container-lowest rounded-xl max-w-md w-full p-space-lg shadow-xl relative border-0"
        >
          <div class="flex items-center justify-between mb-space-md">
            <div class="flex items-center gap-space-xs">
              <span class="material-symbols-outlined text-primary"
                >smartphone</span
              >
              <span
                class="font-headline-sm text-headline-sm font-bold text-on-surface"
                >Buồng Lái Thuyền Trưởng</span
              >
            </div>
            <button
              class="p-1 text-on-surface-variant hover:text-on-surface rounded"
              onclick="document.getElementById('cockpitModal').classList.add('hidden')"
            >
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <p
            class="font-body-sm text-body-sm text-on-surface-variant mb-space-md"
          >
            Mô phỏng giao diện điện thoại 1-chạm mà Thuyền trưởng sử dụng trên
            sông:
          </p>
          <div
            class="bg-surface-container-low p-space-md rounded-xl space-y-space-sm"
          >
            <div class="flex items-center justify-between pb-space-xs">
              <span
                class="font-label-sm text-label-sm text-on-surface-variant"
                >Tàu: <strong>NB-6889 (3.200 Tấn)</strong></span
              >
              <span
                class="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm"
                >Đang Chạy</span
              >
            </div>
            <!-- 1-Tap Buttons -->
            <div class="grid grid-cols-2 gap-space-sm pt-space-xs">
              <button
                class="p-space-md bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary hover:text-on-primary transition-all flex flex-col items-center gap-1 text-center"
              >
                <span class="material-symbols-outlined text-2xl text-primary"
                  >anchor</span
                >
                <span>Đã Thả Neo Chờ Nước</span>
              </button>
              <button
                class="p-space-md bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary hover:text-on-primary transition-all flex flex-col items-center gap-1 text-center"
              >
                <span
                  class="material-symbols-outlined text-2xl text-secondary"
                  >video_file</span
                >
                <span>Đã Qua Cầu An Toàn</span>
              </button>
              <button
                class="p-space-md bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary hover:text-on-primary transition-all flex flex-col items-center gap-1 text-center"
              >
                <span class="material-symbols-outlined text-2xl text-tertiary"
                  >local_shipping</span
                >
                <span>Đã Cập Cảng Bốc Dỡ</span>
              </button>
              <button
                class="p-space-md bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-error hover:text-on-error transition-all flex flex-col items-center gap-1 text-center"
              >
                <span class="material-symbols-outlined text-2xl text-error"
                  >warning</span
                >
                <span>Báo Gặp Trở Ngại</span>
              </button>
            </div>
          </div>
          <div class="mt-space-md text-center">
            <button
              class="w-full py-2.5 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md font-semibold"
              onclick="document.getElementById('cockpitModal').classList.add('hidden')"
            >
              Đóng Bản Thử Nghiệm
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
