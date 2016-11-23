import React from "react";
import { Link } from "react-router";

export const Header = () => {
	return (
		<header className="main-header">
			<div className="main-header__logo">
				<img className="main-header__logo-img" src="assets/img/logo.svg" alt="Logo" />
			</div>
			<nav className="main-header__nav">
				<ul className="main-header__nav-items">
					<li><a href="">Obuka</a></li>
					<li><Link to="/obuka">Oprema</Link></li>
					<li><a href="">Kontakt</a></li>
				</ul>
			</nav>
		</header>
	);
};