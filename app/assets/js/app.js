import Intro from "./modules/intro";
import Overlay from "./modules/overlay";
import Scroll from './modules/scroll';
import Map from "./modules/map";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
      return {x: 0, y: 0};
  
    }    
  });

new Vue({
  el: ".app",
  router,
  render: h => h(App),
})


new Intro();
new Overlay();
new Scroll();
new Map();