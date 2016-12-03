<template>
    <div class="main-hero">
        <app-header></app-header>
        <picture class="main-hero__background">
            <source srcset="assets/img/hero_background.jpg 640w" media="(min-width: 640px)"/>
            <source srcset="assets/img/deki.jpg 250w" media="(min-width: 250px)" />
            <img srcset="assets/img/hero_background.jpg 640w, assets/img/deki.jpg 250w" alt="Dejan Vukojević | Instruktor praktičnog streljaštva" /> 
        </picture>
        <div class="main-hero__callout">
            <h1 class="main-hero__main-heading">instruktor praktičnog streljaštva</h1>
            <h2 class="main-hero__subheading">Naučite da bezbedno rukujete oružjem</h2> 
            <button class="btn btn--hero" type="button">prijavi se za obuku</button> 
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