import Home from "./Home.vue";
import OsnovnaObuka from "./OsnovnaObuka.vue";
import NaprednaObuka from  "./NaprednaObuka.vue";
import Biografija from "./Biografija.vue";
export const routes = [
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
        path: "/beginners",
        component: OsnovnaObuka
    },
    {
        path: "/progresive",
        component: NaprednaObuka
    },
    {
        path: "/biography",
        component: Biografija
    }
];