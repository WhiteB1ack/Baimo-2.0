import { createRouter, createWebHistory } from "vue-router"; 
import Home from "../pages/Home/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    }
  //   {
  //     path: '/about',
  //     component: About,
  //   },
  //   {
  //     path: '/projects',
  //     component: Projects
  //   },
  //   {
  //     path: '/lab',
  //     component: Lab
  //   }    
  ]
})

export default router