import { reactive, computed } from 'vue'
import { VESSELS, PORTS, CARGO_TYPES, MODES, CONSTANTS } from '../data'

// ---------------------------------------------------------------
// Trạng thái nhập liệu — TRỐNG hoàn toàn ban đầu.
// Người dùng nhập tuần tự từ Bước 1 → Bước 4, mọi panel phía sau
// (Bước 5 P&L, Bước 6 An toàn, Bước 7 Kịch bản, thanh Quy trình)
// tự tính lại theo thời gian thực (computed), không còn số liệu mẫu.
// ---------------------------------------------------------------
const state = reactive({
  vesselId: null,
  cargoType: null,
  weightTons: '',
  unitPrice: '',
  originId: null,
  destinationId: null,
  etdDate: '',
  etdTime: '',
  scenarioKey: 'A',
})

function resetAll() {
  state.vesselId = null
  state.cargoType = null
  state.weightTons = ''
  state.unitPrice = ''
  state.originId = null
  state.destinationId = null
  state.etdDate = ''
  state.etdTime = ''
  state.scenarioKey = 'A'
}

export function fmtVnd(n) {
  return Math.round(n || 0).toLocaleString('vi-VN')
}

function timeStrToMinutes(t) {
  if (!t) return null
  const [h, m] = t.split(':').map(Number)
  if (Number.isNaN(h) || Number.isNaN(m)) return null
  return h * 60 + m
}

function minutesToTimeStr(mins) {
  if (mins === null || mins === undefined || Number.isNaN(mins)) return '--:--'
  const wrapped = ((Math.round(mins) % 1440) + 1440) % 1440
  const h = Math.floor(wrapped / 60)
  const m = wrapped % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

// ---------------------------------------------------------------
// Selectors cơ bản (nullable khi chưa nhập)
// ---------------------------------------------------------------
const vessel = computed(() => VESSELS.find((v) => v.id === state.vesselId) || null)
const origin = computed(() => PORTS.find((p) => p.id === state.originId) || null)
const destination = computed(() => PORTS.find((p) => p.id === state.destinationId) || null)

const weightNum = computed(() => Number(state.weightTons) || 0)
const priceNum = computed(() => Number(state.unitPrice) || 0)

const distanceKm = computed(() => {
  if (!origin.value || !destination.value) return null
  return Math.abs(destination.value.km - origin.value.km)
})

// ---------------------------------------------------------------
// Trạng thái hoàn thành từng bước — dùng cho thanh Quy trình (Stepper)
// ---------------------------------------------------------------
const isVesselDone = computed(() => !!vessel.value)
const isCargoDone = computed(() => !!state.cargoType && weightNum.value > 0 && priceNum.value > 0)
const isRouteDone = computed(
  () => !!origin.value && !!destination.value && origin.value.id !== destination.value.id
)
const isScheduleDone = computed(() => !!state.etdTime)
const isReady = computed(
  () => isVesselDone.value && isCargoDone.value && isRouteDone.value && isScheduleDone.value
)

// ---------------------------------------------------------------
// Công thức tính toán 1 phương án (mode 'A' | 'B' | 'C') dựa trên
// dữ liệu người dùng đã nhập. Trả về null nếu thiếu dữ liệu bắt buộc.
// ---------------------------------------------------------------
function computeScenario(modeKey) {
  const mode = MODES.find((m) => m.key === modeKey)
  if (!mode) return null
  if (!isReady.value || !distanceKm.value) return null

  const v = vessel.value
  const weight = Math.min(weightNum.value * mode.weightMultiplier, v.dwt)
  const speedKmh = v.speed * CONSTANTS.NAV_SPEED_FACTOR * mode.speedMultiplier
  const durationHours = distanceKm.value / speedKmh

  const etdMinutesBase = timeStrToMinutes(state.etdTime)
  const etdMinutes = etdMinutesBase + mode.etdOffsetMin
  const etaMinutes = etdMinutes + durationHours * 60

  const fuelLitersPerHour =
    v.dwt * CONSTANTS.FUEL_RATE_PER_DWT * Math.pow(speedKmh / v.speed, 2) * mode.fuelFactor
  const fuelLiters = fuelLitersPerHour * durationHours
  const fuelCost = fuelLiters * CONSTANTS.FUEL_PRICE_PER_LITER

  const revenue = weight * priceNum.value
  const portFee = CONSTANTS.PORT_FEE_BASE + weight * CONSTANTS.PORT_FEE_PER_TON
  const crewCost = durationHours * CONSTANTS.CREW_COST_PER_HOUR
  const subtotal = fuelCost + portFee + crewCost
  const contingency = subtotal * CONSTANTS.CONTINGENCY_RATE
  const cost = subtotal + contingency

  const profit = revenue - cost
  const profitPct = revenue > 0 ? (profit / revenue) * 100 : 0

  const loadRatio = weight / v.dwt
  const draftUsed = v.draft * loadRatio
  const channelMargin = CONSTANTS.CHANNEL_DEPTH_M - draftUsed
  const bridgeMargin = CONSTANTS.BRIDGE_CLEARANCE_M - v.airDraft

  const loadPenalty = loadRatio > 0.95 ? (loadRatio - 0.95) * 200 : 0
  const speedPenalty = mode.speedMultiplier > 1 ? (mode.speedMultiplier - 1) * 60 : 0
  const draftPenalty = channelMargin < 0.3 ? (0.3 - channelMargin) * 100 : 0
  const safetyScore = Math.round(
    Math.max(40, Math.min(100, 100 - loadPenalty - speedPenalty - Math.max(draftPenalty, 0)))
  )

  return {
    key: mode.key,
    title: mode.title,
    tag: mode.tag,
    tagClass: mode.tagClass,
    desc: mode.desc,
    footNote: mode.footNote,
    weight,
    speedKmh,
    durationHours,
    etd: minutesToTimeStr(etdMinutes),
    eta: minutesToTimeStr(etaMinutes),
    fuelLiters,
    fuelCost,
    revenue,
    portFee,
    crewCost,
    contingency,
    cost,
    profit,
    profitPct,
    loadRatio,
    draftUsed,
    channelMargin,
    bridgeMargin,
    safetyScore,
  }
}

const currentScenario = computed(() => computeScenario(state.scenarioKey))
const scenarioOptions = computed(() => MODES.map((m) => ({ ...m, metrics: computeScenario(m.key) })))

// ---------------------------------------------------------------
// Setters
// ---------------------------------------------------------------
function setVessel(id) {
  state.vesselId = id
}
function setCargoType(name) {
  state.cargoType = name
  // Gợi ý đơn giá mặc định theo nhóm hàng, chỉ điền khi ô giá còn trống
  if (!state.unitPrice) {
    const found = CARGO_TYPES.find((c) => c.name === name)
    if (found) state.unitPrice = found.unitPrice
  }
}
function setOrigin(id) {
  state.originId = id
}
function setDestination(id) {
  state.destinationId = id
}
function setScenario(key) {
  state.scenarioKey = key
}

export function useTripState() {
  return {
    state,
    VESSELS,
    PORTS,
    CARGO_TYPES,
    MODES,
    CONSTANTS,
    vessel,
    origin,
    destination,
    distanceKm,
    weightNum,
    priceNum,
    isVesselDone,
    isCargoDone,
    isRouteDone,
    isScheduleDone,
    isReady,
    currentScenario,
    scenarioOptions,
    setVessel,
    setCargoType,
    setOrigin,
    setDestination,
    setScenario,
    resetAll,
    fmtVnd,
  }
}
