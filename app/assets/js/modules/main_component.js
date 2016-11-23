import React, { Component } from "react";
import { MainHero } from "./mainhero_component";
import { Story } from "./story_component";
import { Equipment } from "./equipment_component";

export default class Main extends Component{
	render() {
		return(
			<div>
				<MainHero />
				<Story />
				<Equipment />
			</div>
		);
	}
}

