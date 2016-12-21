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
import Particles from "./modules/particles";


Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
      if(to.hash) {   
            return {selector: to.hash}                  
      } else if(savedPosition) {
        return savedPosition;
      } else {
    
          return {x: 0, y: 0};  
      }     
    }
  });

new Vue({
  el: ".app",
  router,
  render: h => h(App),
});

new Intro();
new Scroll();
new Parallax(".parallax-up", 2);
new Parallax(".parallax-down", -2);
new Map();
new Video();
new Reveal($(".about__description__wrapper"), "60%");
new Reveal($(".story__desc__text"), "85%");
new Map();
new Particles("animate");