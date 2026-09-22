// ---------------------------------------------------------------
// Dữ liệu mẫu: Phương tiện, Cảng/Bến, Loại hàng, Phương án vận hành
// (Không còn số liệu P&L / an toàn cố định — các panel sẽ TỰ TÍNH
//  từ dữ liệu người dùng nhập ở store/tripState.js)
// ---------------------------------------------------------------

export const VESSELS = [
  {
    id: 'HP-9182',
    name: 'HP-9182',
    type: 'Sà lan tự hành mui trần',
    dwt: 450,
    draft: 2.45,
    airDraft: 6.8,
    speed: 14,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0iyQ9T2FBXW-ztTYmxAwagB2Ewh7TiM1Wy_S4u7osCTV9ybpTgmdBq-eyvIboCUyP5Y65eoMQatfxFq0PxCD9P9nH-Hz_Yn6P7XvO44QnHru7LLFhuw3go_W5pohGb9TaytQOA3ysBOgDcRFFzVj40RAJ2No4Ypzo8zNLdXYaHYi4GwwdBcss9YREqw7WTtyEmvqVWEh167oqgf3LdKf766P6CkO0Xs-a1ypmD70RtINVLBf_RAsr',
  },
  {
    id: 'HP-7745',
    name: 'HP-7745',
    type: 'Sà lan tự hành boong kín',
    dwt: 600,
    draft: 2.8,
    airDraft: 6.2,
    speed: 12,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0iyQ9T2FBXW-ztTYmxAwagB2Ewh7TiM1Wy_S4u7osCTV9ybpTgmdBq-eyvIboCUyP5Y65eoMQatfxFq0PxCD9P9nH-Hz_Yn6P7XvO44QnHru7LLFhuw3go_W5pohGb9TaytQOA3ysBOgDcRFFzVj40RAJ2No4Ypzo8zNLdXYaHYi4GwwdBcss9YREqw7WTtyEmvqVWEh167oqgf3LdKf766P6CkO0Xs-a1ypmD70RtINVLBf_RAsr',
  },
  {
    id: 'QN-3390',
    name: 'QN-3390',
    type: 'Tàu chở container ven biển',
    dwt: 800,
    draft: 3.1,
    airDraft: 5.9,
    speed: 16,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0iyQ9T2FBXW-ztTYmxAwagB2Ewh7TiM1Wy_S4u7osCTV9ybpTgmdBq-eyvIboCUyP5Y65eoMQatfxFq0PxCD9P9nH-Hz_Yn6P7XvO44QnHru7LLFhuw3go_W5pohGb9TaytQOA3ysBOgDcRFFzVj40RAJ2No4Ypzo8zNLdXYaHYi4GwwdBcss9YREqw7WTtyEmvqVWEh167oqgf3LdKf766P6CkO0Xs-a1ypmD70RtINVLBf_RAsr',
  },
  {
    id: 'HD-5521',
    name: 'HD-5521',
    type: 'Sà lan chở hàng rời cỡ nhỏ',
    dwt: 320,
    draft: 2.1,
    airDraft: 7.4,
    speed: 13,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0iyQ9T2FBXW-ztTYmxAwagB2Ewh7TiM1Wy_S4u7osCTV9ybpTgmdBq-eyvIboCUyP5Y65eoMQatfxFq0PxCD9P9nH-Hz_Yn6P7XvO44QnHru7LLFhuw3go_W5pohGb9TaytQOA3ysBOgDcRFFzVj40RAJ2No4Ypzo8zNLdXYaHYi4GwwdBcss9YREqw7WTtyEmvqVWEh167oqgf3LdKf766P6CkO0Xs-a1ypmD70RtINVLBf_RAsr',
  },
]

// `km`: vị trí quy ước dọc hành lang đường thủy (dùng để tính cự ly = |kmA-kmB|)
export const PORTS = [
  { id: 'doan-xa', name: 'Bến Cảng Đoạn Xá', sub: 'Hải Phòng • Sông Cấm (Km 00+000)', short: 'Đoạn Xá', km: 0 },
  { id: 'pha-lai', name: 'Bến Nhà Máy Phả Lại', sub: 'Hải Dương • Sông Kinh Thầy (Km 68+400)', short: 'Phả Lại', km: 68.4 },
  { id: 'ninh-phuc', name: 'Cảng Ninh Phúc', sub: 'Ninh Bình • Sông Đáy (Km 92+200)', short: 'Ninh Phúc', km: 92.2 },
  { id: 'viet-tri', name: 'Cảng Việt Trì', sub: 'Phú Thọ • Sông Lô (Km 74+000)', short: 'Việt Trì', km: 74.0 },
  { id: 'khuyen-luong', name: 'Cảng Khuyến Lương', sub: 'Hà Nội • Sông Hồng (Km 15+300)', short: 'Khuyến Lương', km: 15.3 },
  { id: 'hoang-thach', name: 'Bến Nhà Máy Hoàng Thạch', sub: 'Hải Dương • Sông Kinh Thầy (Km 55+700)', short: 'Hoàng Thạch', km: 55.7 },
]

// Đơn giá gợi ý mặc định theo nhóm hàng (VND/Tấn) — người dùng có thể sửa lại
export const CARGO_TYPES = [
  { name: 'Clinker rời', unitPrice: 138000 },
  { name: 'Than cám', unitPrice: 118000 },
  { name: 'Cát san lấp / Đá', unitPrice: 95000 },
  { name: 'Container rỗng/đầy', unitPrice: 165000 },
]

// 3 phương án vận hành: chỉ mô tả HỆ SỐ áp dụng lên dữ liệu người dùng nhập,
// KHÔNG còn số liệu doanh thu/chi phí/an toàn cố định — các số liệu này được
// tính lại theo thời gian thực trong store/tripState.js (computeScenario()).
export const MODES = [
  {
    key: 'A',
    title: 'Phương án A: Tải Trọng Tiêu Chuẩn (Đón Triều)',
    tag: 'Khuyến Nghị AI',
    tagClass: 'bg-tertiary text-on-tertiary',
    desc: 'Giữ nguyên khối lượng đã nhập, chạy tốc độ kinh tế và canh giờ xuất bến theo con nước để tối ưu an toàn.',
    weightMultiplier: 1,
    speedMultiplier: 1,
    etdOffsetMin: 0,
    fuelFactor: 1,
    footNote: 'Cân bằng giữa lợi nhuận và an toàn',
  },
  {
    key: 'B',
    title: 'Phương án B: Giảm Tải Vượt Cạn Sớm',
    tag: 'Rủi Ro Thấp',
    tagClass: 'bg-surface-container text-on-surface-variant',
    desc: 'Giảm 20% khối lượng xếp hàng để giảm mớn nước, khởi hành sớm hơn 90 phút, vượt các điểm cạn an toàn hơn.',
    weightMultiplier: 0.8,
    speedMultiplier: 1.06,
    etdOffsetMin: -90,
    fuelFactor: 1,
    footNote: 'Sản lượng giao thấp hơn, an toàn cao hơn',
  },
  {
    key: 'C',
    title: 'Phương án C: Chạy Tốc Độ Tối Đa',
    tag: 'Giao Hỏa Tốc',
    tagClass: 'bg-surface-container text-on-surface-variant',
    desc: 'Giữ nguyên khối lượng đã nhập, tăng công suất máy để rút ngắn thời gian chạy; tiêu hao nhiên liệu tăng theo bình phương tốc độ.',
    weightMultiplier: 1,
    speedMultiplier: 1.35,
    etdOffsetMin: 0,
    fuelFactor: 1,
    footNote: 'Áp dụng khi cần giải phóng bến gấp',
  },
]

// Hằng số dùng cho công thức tính toán P&L / an toàn
export const CONSTANTS = {
  NAV_SPEED_FACTOR: 0.85, // hệ số suy giảm tốc độ thực tế do dòng chảy/con nước so với tốc độ kinh tế của tàu
  FUEL_PRICE_PER_LITER: 21500, // đ/lít dầu DO
  FUEL_RATE_PER_DWT: 0.28, // lít/giờ cho mỗi DWT khi chạy đúng tốc độ định mức của tàu
  CREW_COST_PER_HOUR: 950000, // đ/giờ chạy (lương kíp lái)
  PORT_FEE_BASE: 6500000, // đ/chuyến, phí cảng bến cố định
  PORT_FEE_PER_TON: 3500, // đ/tấn hàng xếp, phần phí cảng bến biến đổi
  CONTINGENCY_RATE: 0.06, // 6% dự phòng trên (nhiên liệu + cảng bến + lương)
  CHANNEL_DEPTH_M: 2.85, // độ sâu khả dụng tại điểm cạn tham chiếu (Sông Kinh Thầy Km 24)
  BRIDGE_CLEARANCE_M: 7.2, // tĩnh không thực tế tại cầu tham chiếu (Cầu Phú Lương Km 45.2)
  TIDE_PEAK_TIME: '10:15', // giờ đỉnh triều tham chiếu (Trạm Hòn Dấu)
}
