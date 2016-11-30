import Intro from "./modules/intro";
import Overlay from "./modules/overlay";
import Scroll from './modules/scroll';
import Vue from "vue";
import App from "./components/App.vue";

new Vue({
  el: '.app',
  render: h => h(App)
})


new Intro();
new Overlay();
new Scroll();