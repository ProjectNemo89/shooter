import TweenMax from "gsap";

class Overlay {
	constructor() {
		this.target1 = document.querySelector("[data-overlay-1]");
		this.overlay1 = document.querySelector("[data-mask-1]");
		this.target2 = document.querySelector("[data-overlay-2]");
		this.overlay2 = document.querySelector("[data-mask-2]");	
		this.target3 = document.querySelector("[data-overlay-3]");
		this.overlay3 = document.querySelector("[data-mask-3]");
		this.letter1 = document.querySelector("[data-letter-d]");
		this.letter2 = document.querySelector("[data-letter-v]");
		this.letter3 = document.querySelector("[data-letter-c]");
		this.onHover(this.target1, this.overlay1, this.letter1);
		this.onHover(this.target2, this.overlay2, this.letter2);
		this.onHover(this.target3, this.overlay3, this.letter3);	
	}

	onHover(target, overlay, letter) {
		target.addEventListener("mouseenter", () => {
			TweenMax.to(overlay, 1, {width: "100%", ease: Power3.easeInOut});
			TweenMax.fromTo(letter, 0.5, {top: 0, opacity: 0}, {top: "-13%", opacity: 1});
		});

		target.addEventListener("mouseleave", () => {
			TweenMax.to(overlay, 1, {delay: 0.3, width: 0});
			TweenMax.fromTo(letter, 0.5, {top: "-7%", opacity: 1}, {top: 0, opacity: 0});
		});
		
	}

	
}

export default Overlay;

