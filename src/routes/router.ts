import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import FaseInicio from '../pages/FaseInicio.vue'
import FasePlanificacion from '../pages/FasePlanificacion.vue'
import FaseControl from '../pages/FaseControl.vue'
import FaseCierre from '../pages/FaseCierre.vue'
import SobreNosotros from '../pages/SobreNosotros.vue'
import FaseDesarrollo from '../pages/FaseDesarrollo.vue';
const routes: RouteRecordRaw[] = [
  { path: '/fase-inicio', component: FaseInicio },
  { path: '/fase-planificacion', component: FasePlanificacion },
  { path: '/fase-desarrollo', component: FaseDesarrollo },
  { path: '/fase-control', component: FaseControl },
  { path: '/fase-cierre', component: FaseCierre },
  { path: '/sobre-nosotros', component: SobreNosotros },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;