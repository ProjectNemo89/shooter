import Intro from "./modules/intro";
import Scroll from "./modules/scroll";
import Parallax from "./modules/parallax";
import $ from "jquery";
import "lazysizes";
import Reveal from "./modules/reveal";
import Video from "./modules/video";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import Map from "./modules/map";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
      if(to.hash) {
          return { selector: to.hash};
      } else if(savedPosition) {
          return savedPosition;
      }

      if(from.hash) {
        return { selector: from.hash};
      } else if(savedPosition) {
        return savedPosition;
      }

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
new Video();
new Reveal($(".about__description__wrapper"), "80%");
new Reveal($(".story__desc__text"), "85%");
new Map();