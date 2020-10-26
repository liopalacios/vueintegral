import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Dashboard from "@/components/Dashboard.vue";
import PieBasic from "@/components/charts/PieBasic.vue";
const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/Pie",
      name: "Pie",
      component: PieBasic,
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;