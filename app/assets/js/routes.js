import Home from "./Home.vue";
import OsnovnaObuka from "./OsnovnaObuka.vue";
import NaprednaObuka from  "./NaprednaObuka.vue";

export const routes = [
    {
      path: "/",
      component: Home,
      name: "home",
      hash: "#bio"
    },
    {
        path: "/beginners",
        component: OsnovnaObuka
    },
    {
        path: "/progresive",
        component: NaprednaObuka
    }
];