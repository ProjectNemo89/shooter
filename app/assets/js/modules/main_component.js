import React, { Component } from "react";
import { MainHero } from "./mainhero_component";
import { Story } from "./story_component";
import { Equipment } from "./equipment_component";
import { InfoSection } from "./infosection_component";
import { About } from "./about_component";

export default class Main extends Component{
	render() {
		return(
			<div>
				<MainHero />
				<InfoSection />
				<About />
				<Story />
				<Equipment />
			</div>
		);
	}
}

