# SmartTrip IWT — Vue 3 + Vite

Bản chuyển đổi từ file HTML tĩnh (dùng Tailwind CDN + vanilla JS) sang một dự án
Vue 3 + Vite thực thụ, chia thành các Single File Component (`.vue`), dùng
Tailwind CSS được build qua PostCSS (không còn phụ thuộc CDN), và quản lý state
bằng Composition API (`reactive`/`computed`) thay cho thao tác DOM thủ công.

## Cấu trúc dự án

```
smarttrip-vue/
├── index.html                 # Entry HTML (Google Fonts, Material Symbols)
├── tailwind.config.js         # Theme tuỳ biến (màu, spacing, font) y hệt bản gốc
├── postcss.config.js
├── vite.config.js
├── package.json
└── src/
    ├── main.js                # Bootstrap ứng dụng Vue
    ├── style.css              # @tailwind base/components/utilities + base layer
    ├── App.vue                # Bố cục trang tổng (header, 2 cột, footer, modal)
    ├── data/
    │   └── index.js           # Dữ liệu mẫu: VESSELS, PORTS, SCENARIOS
    ├── store/
    │   ├── tripState.js       # State chuyến đi (tàu, tuyến, kịch bản) + computed
    │   └── modalState.js      # State mở/đóng modal chọn tàu / cảng
    └── components/
        ├── AppHeader.vue          # Thanh điều hướng trên cùng
        ├── ProgressStepper.vue    # Stepper 7 bước (B.1 → B.7)
        ├── VesselPanel.vue        # Bước 1: Hồ sơ phương tiện
        ├── CargoPanel.vue         # Bước 2: Thông tin hàng hoá
        ├── RoutePanel.vue         # Bước 3: Tuyến luồng đi/đến + sơ đồ waypoint
        ├── SchedulePanel.vue      # Bước 4: Lịch trình ETD/ETA
        ├── PnlPanel.vue           # Bước 5: Ước tính P&L
        ├── SafetyPanel.vue        # Bước 6: SmartTrip Check (an toàn/thuỷ văn)
        ├── ScenarioPanel.vue      # Bước 7: 3 kịch bản AI (A/B/C)
        ├── FooterActionBar.vue    # Thanh hành động dính đáy (Phát hành phiếu)
        ├── SiteFooter.vue         # Footer trang
        └── PickerModal.vue        # Modal dùng chung để chọn tàu / cảng đi / cảng đến
```

## Vì sao tách như vậy

- **`data/index.js`** giữ nguyên toàn bộ dữ liệu mẫu (`VESSELS`, `PORTS`,
  `SCENARIOS`) y hệt bản HTML gốc, chỉ chuyển từ `const` trong `<script>` sang
  module ES export được để tái sử dụng.
- **`store/tripState.js`** thay thế biến `state` toàn cục và các hàm
  `renderVessel()`, `renderRoute()`, `renderScenarios()`,
  `renderScenarioEffects()` bằng `reactive()` + `computed()`: mọi nơi hiển thị
  dữ liệu (tên tàu, tuyến, kịch bản, P&L, tốc độ trung bình...) tự động cập
  nhật khi state đổi, không cần gọi lại hàm `render...` thủ công.
- **`store/modalState.js`** thay cho việc `openModal()/closeModal()` thao tác
  trực tiếp DOM (`classList.add/remove`, `innerHTML`) bằng một state nhỏ
  (`isOpen`, `type`, `title`) mà `PickerModal.vue` dùng `v-if` để hiển thị.
- **`PickerModal.vue`** gộp 2 modal "đổi phương tiện" và "chọn cảng đi/đến"
  (vốn được build bằng chuỗi HTML nối tay trong file gốc) thành 1 component
  dùng `v-for` trên danh sách `VESSELS`/`PORTS`.
- Mọi class Tailwind điều kiện (ví dụ thẻ kịch bản đang chọn) chuyển từ nối
  chuỗi ternary trong template string sang `:class="[...]"` của Vue.

## Cài đặt & chạy thử

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build production

```bash
npm run build      # xuất ra thư mục dist/ (HTML/CSS/JS tối ưu, đã tree-shake)
npm run preview    # xem thử bản build production
```

## Deploy

Thư mục `dist/` sau khi build là static site thuần (HTML/CSS/JS), có thể
deploy trực tiếp lên Vercel, Netlify, Cloudflare Pages, GitHub Pages, hoặc bất
kỳ static hosting / Nginx nào — không cần server Node khi chạy.

## Ghi chú

- Tailwind được cấu hình lại đầy đủ theo `tailwind.config.js` transcribe y hệt
  config CDN gốc (màu M3, spacing, fontFamily, fontSize, borderRadius).
- Google Fonts (Inter, Space Grotesk) và Material Symbols Outlined được load
  qua thẻ `<link>` trong `index.html`, giữ nguyên như bản gốc.
- Toàn bộ logic tương tác (đổi tàu, đổi điểm đi/đến, áp dụng phương án A/B/C)
  đã được kiểm tra hoạt động đúng qua `npm run build`.

## Luồng nhập liệu (đã cập nhật)

Toàn bộ input bắt đầu **trống** — không còn dữ liệu mẫu dựng sẵn:

1. **Bước 1** – Chọn phương tiện thủy (modal danh sách tàu).
2. **Bước 2** – Chọn nhóm hàng + nhập khối lượng thực tế + đơn giá hợp đồng.
3. **Bước 3** – Chọn điểm đi / điểm đến (modal danh sách cảng, cự ly tự tính
   bằng `|km điểm đến − km điểm đi|` theo dữ liệu `km` gắn với mỗi cảng).
4. **Bước 4** – Nhập ngày + giờ rời bến dự kiến (ETD).

Ngay khi một trong các input trên thay đổi, **thanh Quy trình (B.1 → B.7)**
cập nhật trạng thái "Đã chọn / Chưa chọn" tương ứng, và:

- **Bước 5 (P&L)** và **Bước 6 (SmartTrip Check)** tự tính lại doanh thu, chi
  phí (nhiên liệu, cảng bến, lương thuyền viên, dự phòng), lợi nhuận, tỷ lệ
  chất tải, mớn nước và điểm an toàn — theo đúng công thức tại
  `computeScenario()` trong `src/store/tripState.js`.
- **Bước 7** hiển thị 3 phương án (A: tiêu chuẩn, B: giảm tải, C: tốc độ tối
  đa) với số liệu tính động cho từng phương án; chọn phương án nào thì Bước
  4-6 và thanh Quy trình phản ánh ngay phương án đó.
- Trước khi nhập đủ Bước 1-4, các panel P&L / An toàn / Đề xuất phương án chỉ
  hiển thị placeholder nhắc hoàn thành các bước trước.
- Nút **"Nhập Lại Từ Đầu"** ở thanh hành động dưới cùng gọi `resetAll()` để
  xoá sạch toàn bộ input và quay về trạng thái ban đầu.

Công thức tính toán (giá dầu, hệ số tiêu hao nhiên liệu, phí cảng bến, lương
theo giờ, ngưỡng an toàn...) được gom vào `CONSTANTS` trong
`src/data/index.js` — chỉnh 1 chỗ là áp dụng cho toàn bộ ứng dụng.
