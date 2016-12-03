<template>
    <div>
        <app-mainhero></app-mainhero>
        <app-infosection></app-infosection>
        <app-about></app-about>
        <app-story></app-story>
        <app-equipment></app-equipment>
        <app-gallery></app-gallery>
        <app-contact></app-contact>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import MainHero from "./components/MainHero.vue";
    import InfoSection from "./components/InfoSection.vue";
    import About from './components/About.vue';
    import Story from './components/Story.vue';
    import Equipment from './components/Equipment.vue';
    import Gallery from './components/Gallery.vue';
    import Contact from './components/Contact.vue';
    import Footer from './components/Footer.vue';
    export default {
        components: {
            "app-mainhero": MainHero,
            "app-infosection": InfoSection,
            "app-about": About,
            "app-story": Story,
            "app-equipment": Equipment,
            "app-gallery": Gallery,
            "app-contact": Contact,
            "app-footer": Footer
        }
    }
</script>