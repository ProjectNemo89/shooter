import Home from "./Home.vue";
import OsnovnaObuka from "./OsnovnaObuka.vue";

export const routes = [
    {
      path: "/",
      component: Home
    },
    {
        path: "/beginners",
        component: OsnovnaObuka
    }
];