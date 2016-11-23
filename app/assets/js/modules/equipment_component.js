import React from "react";

export const Equipment = () => {
	return (
		<div className="wrapper equipment">
			<section className="equipment row--gutter-smaller-top-btm row">
				<h2 className="equipment__subheading">Sve što vam je neophodno</h2>
				<h1 className="equipment__heading">GHOST&trade; Oprema</h1>
				<a className="equipment__items row__6 row--pull-left" href="#">
					<img src="assets/img/holsters.jpg" alt="Holsteri" />
					<span className="equipment__link">holsteri</span>
				</a>	
				<a className="equipment__items row__6 row--pull-left" href="#">
					<img src="assets/img/pouch.jpg" alt="Nosači okvira" />
					<span className="equipment__link">nosači okvira</span>
				</a>
				<a className="equipment__items row__6 row--pull-left" href="#">
					<img src="assets/img/wear.jpg" alt="Odeća i ostala oprema" />
					<span className="equipment__link">majce i ostala odeća</span>
				</a>
				<a className="equipment__items row__6 row--pull-left" href="#">
					<img src="assets/img/accesories.jpg" alt="Dodaci" />
					<span className="equipment__link">dodaci</span>
				</a>
			</section>
		</div>
	);
}