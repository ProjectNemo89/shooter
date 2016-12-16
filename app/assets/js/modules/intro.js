
class Intro {
	constructor() {
		this.layer1 = document.querySelector(".layer1");
		this.layer2 = document.querySelector(".layer2");
		this.headingMask = document.querySelector(".main-hero__callout");
		this.logo = document.querySelector(".main-header__logo");
		this.menu = document.querySelector(".main-header__nav__controls");
		this.onLoad();
	}

	onLoad() {
		window.onload = () => {
			TweenMax.to(this.layer1, 1, {width: 0, ease: Power3.easeInOut});
			TweenMax.to(this.layer2, 1, {delay: 1, height: 0, ease: Power3.easeInOut});
			TweenMax.fromTo(this.headingMask, 2, {x: "100%", opacity: 0, ease: Power3.easeInOut}, {delay: 1, x: "-50%", opacity: 1, ease: Power3.easeInOut});		
			TweenMax.fromTo(this.logo, 2, {opacity: 0, ease: Power2.easeInOut}, {delay: 2, opacity: 1, ease: Power2.easeInOut});		
			TweenMax.fromTo(this.menu, 2, {opacity: 0, ease: Power2.easeInOut}, {delay: 2, opacity: 1, ease: Power2.easeInOut});		
		};
	}

}


export default Intro;