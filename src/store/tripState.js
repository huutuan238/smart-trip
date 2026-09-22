import { reactive, computed } from 'vue'
import { VESSELS, PORTS, SCENARIOS, DISTANCE_KM } from '../data'

// ---------------------------------------------------------------
// Trạng thái hiện tại (tương đương `state` trong bản HTML gốc)
// ---------------------------------------------------------------
const state = reactive({
  vesselId: 'HP-9182',
  originId: 'doan-xa',
  destinationId: 'pha-lai',
  scenarioKey: 'A',
})

function parseDurationHours(str) {
  // "5h 45p" -> 5.75
  const m = str.match(/(\d+)h\s*(\d+)?p?/)
  if (!m) return 1
  const h = parseInt(m[1], 10) || 0
  const min = parseInt(m[2], 10) || 0
  return h + min / 60
}

export function fmtVnd(n) {
  return n.toLocaleString('vi-VN')
}

// Computed selectors, derived from the raw ids in state
const vessel = computed(() => VESSELS.find((v) => v.id === state.vesselId) || VESSELS[0])
const origin = computed(() => PORTS.find((p) => p.id === state.originId) || PORTS[0])
const destination = computed(() => PORTS.find((p) => p.id === state.destinationId) || PORTS[1])
const scenario = computed(() => SCENARIOS.find((s) => s.key === state.scenarioKey) || SCENARIOS[0])

const runSpeedKmh = computed(() => {
  const hours = parseDurationHours(scenario.value.durationRaw)
  return (DISTANCE_KM / hours).toFixed(1)
})

const marginText = computed(() => scenario.value.profitPct.replace(/[()]/g, ''))

function setVessel(id) {
  state.vesselId = id
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
    SCENARIOS,
    DISTANCE_KM,
    vessel,
    origin,
    destination,
    scenario,
    runSpeedKmh,
    marginText,
    setVessel,
    setOrigin,
    setDestination,
    setScenario,
    fmtVnd,
  }
}
