import $ from "jquery";

class Menu {
    constructor() {
        this.button = $(".main-header__nav__button__menubar");
        this.nav = $(".main-header__nav");
        this.controls = $(".main-header__nav__controls"); 
        this.label = $(".main-header__nav__label");
        this.lines = $(".main-header__nav__button__line");  
        this.menuToggle();
    }
    menuToggle() {
        this.button.click((e) => {
            e.preventDefault();
            this.nav.toggleClass("main-header__nav--active");
            this.controls.toggleClass("main-header__nav__controls--active");
            this.label.toggleClass("main-header__nav__label--active");
            this.lines.toggleClass("main-header__nav__button__line--active");
        });
    }
}

export default Menu;