import React from "react";

export const InfoSection = () => {
	return (
		<section className="info-section">
			<div className="info-section__info-block">
				<h4 className="info-section__info-block__heading">osnovna obuka</h4>
				<p>
				Osnovna obuka rukovanja vatrenim oružjem podrazumeva da pojedinac ili grupa, upoznaju
				Zakon o oružju i municiji, izgrade bezbednosnu kulturu kao jedan od najbitnih segmenata...
				</p>
				<button className="btn" type="button">pročitaj više</button>
			</div>
			<div className="info-section__info-block info-section__info-block--black">
				<h4 className="info-section__info-block__heading">napredna obuka</h4>
				<p>
				Nakon uspešno savladane osnovne obuke, pojedinac ili grupa prelazi na progresivni
				nivo obuke, koji podrazumeva složeniju dinamiku i povezivanje svih elemenata...
				</p>
				<button className="btn" type="button">pročitaj više</button>
			</div>
			<div className="info-section__info-block">
				<h4 className="info-section__info-block__heading">rekreativni program</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut.
				</p>
				<button className="btn" type="button">pročitaj više</button>
			</div>
		</section>
	);
};