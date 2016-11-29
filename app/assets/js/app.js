import Intro from "./modules/intro";
import Overlay from "./modules/overlay";
import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import ReactDOM from "react-dom";
import { Motion, spring } from "react-motion";
import Main from "./modules/main_component";
import { MainHero } from "./modules/mainhero_component";


const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
		</Route>
		<Route path="/contact" component={MainHero}></Route>
	</Router>
);

ReactDOM.render(routes, document.querySelector(".app"));

const intro = new Intro();
const overlays = new Overlay();

