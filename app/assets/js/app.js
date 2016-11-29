import Intro from "./modules/intro";
import Overlay from "./modules/overlay";
import Vue from "vue";
import App from "./components/App.vue";
// import React from "react";
// import { Router, Route, IndexRoute, browserHistory } from "react-router";
// import ReactDOM from "react-dom";
// import { Motion, spring } from "react-motion";
// import Main from "./modules/main_component";
// import { MainHero } from "./modules/mainhero_component";
// const routes = (
// 	<Router history={browserHistory}>
// 		<Route path="/" component={Main}>
// 		</Route>
// 		<Route path="/contact" component={MainHero}></Route>
// 	</Router>
// );

// ReactDOM.render(routes, document.querySelector(".app"));



new Vue({
  el: '.app',
  render: h => h(App)
})


new Intro();
new Overlay();