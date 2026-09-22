import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateTripView from '../views/CreateTripView.vue'
import ExceptionMonitorView from '../views/ExceptionMonitorView.vue'
import PnlReconciliationView from '../views/PnlReconciliationView.vue'
import ShipCaptainView from '../views/ShipCaptainView.vue'

const routes = [
  { path: '/', name: 'trang-chu', component: HomeView },
  { path: '/tao-chuyen-moi', name: 'tao-chuyen-moi', component: CreateTripView },
  { path: '/giam-sat-ngoai-le', name: 'giam-sat-ngoai-le', component: ExceptionMonitorView },
  { path: '/doi-soat-p-l', name: 'doi-soat-p-l', component: PnlReconciliationView },
  { path: '/ship-captain', name: 'ship-captain', component: ShipCaptainView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
