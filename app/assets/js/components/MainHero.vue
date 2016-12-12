<template>
    <div class="main-hero">
        <app-header></app-header>
        <picture class="main-hero__background">
            <source srcset="assets/img/hero_background.jpg 640w" media="(min-width: 640px)"/>
            <source srcset="assets/img/deki.jpg 250w" media="(min-width: 250px)" />
            <img srcset="assets/img/hero_background.jpg 640w, assets/img/deki.jpg 250w" alt="Dejan Vukojević | Instruktor praktičnog streljaštva" /> 
        </picture>
        <video class="main-hero__video" width="100%" height="100%">
            <source src="assets/videos/dejan.mp4">
            Vaš brauzer ne podržava video. Molimo Vas skinite najnoviju verziju.
        </video>
        <div class="main-hero__callout">
            <h1 class="main-hero__main-heading parallax">instruktor praktičnog streljaštva</h1>
            <h2 class="main-hero__subheading parallax">Naučite da bezbedno rukujete oružjem</h2> 
            <div class="btn__wrap parallax">
                <a id="video__play" class="btn btn--blue" href="#" data-text="pogledaj video">
                    <span class="btn__overlay"></span>
                    <span class="btn__text">pogledaj video</span>
                </a>
            </div> 
            <div class="btn__wrap parallax">
                <a class="btn btn--primary" href="#" data-text="prijavi se">
                    <span class="btn__overlay"></span>
                    <span class="btn__text">prijavi se</span>
                </a>
            </div> 
        </div>
    </div>
</template>

<script>
    import Header from "./Header.vue";
    export default {
        components: {
            "app-header": Header
        }
    }

</script>