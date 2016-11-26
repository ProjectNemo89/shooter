import React from "react";

export const Story = () => {
	return (
		<div className="wrapper">
			<section className="story row row--gutter-top wrapper--lines">
				<h4>Brzina, snaga i moć</h4>
				<h1>Glavni moto obuke</h1>
				<div className="row__column story--left">
					<div className="row row--centered">
						<div className="story__image row row--centered" data-overlay-1>
							<div className="story__desc story__desc--left" data-text-1>
								<h1>Diligentia</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt</p>
							</div>					
							<div className="story__text" data-letter-d>
								<span>D</span>
							</div>
							<div className="image--overlay"></div>
							<div className="story__mask" data-mask-1></div>
							<img className="row--centered image--shadow" src="assets/img/philosophy-950.jpg" alt="Filozofija obuke i treninga" />
						</div>
					</div>				
				</div>
				<div className="row__column row--gutter-top story--right">
					<div className="row row--centered">
						<div className="story__image row row--centered" data-overlay-2>
							<div className="story__desc story__desc--right" data-text-2>
								<h1>Diligentia</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt</p>
							</div>
							<div className="story__text story__text--left" data-letter-v>
								<span>V</span>
							</div>
							<div className="image--overlay"></div>
							<div className="story__mask" data-mask-2></div>
							<img className="row--centered image--shadow" src="assets/img/philosophy-950.jpg" alt="Filozofija obuke i treninga" />
						</div>
					</div>				
				</div>
				<div className="row__column row--gutter-top story--left">
					<div className="row row--centered">
						<div className="story__image row row--centered" data-overlay-3>
							<div className="story__desc story__desc--left" data-text-3>
								<h1>Diligentia</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt</p>
							</div>
							<div className="story__text" data-letter-c>
								<span>C</span>
							</div>
							<div className="image--overlay"></div>
							<div className="story__mask" data-mask-3></div>
							<img className="row--centered image--shadow" src="assets/img/philosophy-950.jpg" alt="Filozofija obuke i treninga" />
						</div>
					</div>				
				</div>
			</section>
		</div>
	);
}