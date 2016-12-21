import "particles.js/particles";
class Particles {
    constructor(selector) {
        this.selector = selector;
        this.config = "assets/js/vendors/config/particles_config.json";
        this.animate();
    }

    animate() {
        particlesJS.load(this.selector, this.config,() => {
            console.log("Particles loaded");
        });
    }
}

export default Particles;

