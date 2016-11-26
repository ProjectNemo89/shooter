import React from "react";
import { Header } from "./header_component";
import { InfoSection } from "./infosection_component";


export const MainHero = () => {
	return (
		<div className="main-hero">
			<Header />
			<picture className="main-hero__background">
				<source srcSet="assets/img/hero_background.jpg 640w" media="(min-width: 640px)"/>
				<source srcSet="assets/img/deki.jpg 250w" media="(min-width: 250px)" />
				<img srcSet="assets/img/hero_background.jpg 640w, assets/img/deki.jpg 250w" alt="Dejan Vukojević | Instruktor praktičnog streljaštva" /> 
			</picture>
			<div className="main-hero__callout">
				<div className="main-hero__callout__loader">
					<div className="main-hero__callout__loader__mask"></div>
					<h1 className="main-hero__main-heading">instruktor Dejan Vukojević</h1>
				</div>
				<h2 className="main-hero__subheading">Naučite da bezbedno rukujete oružjem</h2> 
				<button className="btn btn--hero" type="button">prijavi se za obuku</button> 
			</div>
		</div>
	);
}