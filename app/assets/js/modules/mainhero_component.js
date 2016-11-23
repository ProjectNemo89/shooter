import React from "react";
import { Header } from "./header_component";
import { InfoSection } from "./infosection_component";


export const MainHero = () => {
	return (
		<div className="main-hero">
			<Header />
			<img className="main-hero__background" src="assets/img/hero_background.jpg" alt="Dejan Vukojević | Instruktor praktičnog streljaštva" /> 
				<div className="main-hero__callout">
					<div className="main-hero__callout__loader">
						<div className="main-hero__callout__loader__mask"></div>
						<h1 className="main-hero__main-heading">instruktor Dejan Vukojević</h1>
					</div>
					<h2 className="main-hero__subheading">Naučite da bezbedno rukujete oružijem</h2> 
					<button className="btn" type="button">prijavi se za obuku</button> 
			</div>
			<InfoSection />
		</div>
	);
}