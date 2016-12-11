import Intro from "./modules/intro";
import Scroll from "./modules/scroll";
import Parallax from "./modules/parallax";
import Reveal from "./modules/reveal";
import Map from "./modules/map";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import $ from "jquery";

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
new Scroll();
new Parallax();
new Map();
new Reveal($(".about, .story__wrapper"), "-45%");