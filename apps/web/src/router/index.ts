import { createRouter, createWebHistory } from "vue-router"; 
import Home from "../pages/Home/Home.vue";
import ProjectLayout from "../layouts/ProjectLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/projects',
      component: ProjectLayout,
      children: [
        {
          path: 'shader/theBookofShader',
          children: [
            {
              path: '01_shapingFunction',
              component: () => 
                import(
                  '../pages/Projects/Shader/theBookofShader/01_shapingFunction/01_shapingFunction.vue'
                )
            },
            {
              path: '02_Colors',
              component: () => 
                import(
                  '../pages/Projects/Shader/theBookofShader/02_Colors/02_Colors.vue'
                )
            },
            {
              path: '03_shapes',
              component: () => 
                import(
                  '../pages/Projects/Shader/theBookofShader/03_Shapes/03_Shapes.vue'
                )
            },            
          ]
        },
        {
          path: 'blender',
          children: [
            {
              path: '00_blenderFlag',
              component: () => 
                import(
                  '../pages/Projects/Blender/00_BlenderFlag.vue'
                )
            },
            {
              path: '01_Foxes',
              component: () => 
                import(
                  '../pages/Projects/Blender/01_Foxes.vue'
                )
            },
            {
              path: '02_HollowKnight',
              component: () => 
                import(
                  '../pages/Projects/Blender/02_HollowKnight.vue'
                )
            },
            {
              path: '03_GirlinWheats',
              component: () => 
                import(
                  '../pages/Projects/Blender/03_Girlinwheats.vue'
                )
            }                                    
          ]
        }
      ]
    },
    {
      path: '/links',
      component: () => 
        import ('../pages/Links/Links.vue')
    },
    {
      path: '/lab',
      component: () => 
        import ('../pages/Lab/Lab.vue')
    },
    {
      path: '/about',
      component: () => 
        import ('../pages/About/About.vue')
    },
    {
      path: '/code',
      component: () =>
        import ('../pages/Code/Code.vue')
    },
    {
      path: '/calender',
      component: () =>
        import ('../pages/Calender/Calender.vue')
    }
  ]
})

export default router