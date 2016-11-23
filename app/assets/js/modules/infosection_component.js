import React from "react";

export const InfoSection = () => {
	return (
		<section className="main-hero__info-section">
			<div className="info-block">
				<h2 className="info-block__heading">osnovna obuka</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut.
				</p>
				<button className="btn" type="button">prijavi se za obuku</button>
			</div>
			<div className="info-block info-block--black">
				<h2 className="info-block__heading">napredna obuka</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut.
				</p>
				<button className="btn" type="button">prijavi se za obuku</button>
			</div>
			<div className="info-block">
				<h2 className="info-block__heading">rekreativni program</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut.
				</p>
				<button className="btn" type="button">prijavi se za obuku</button>
			</div>
		</section>
	);
};