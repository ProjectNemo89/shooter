<template>
    <div>
        <app-mainhero></app-mainhero>
        <app-infosection></app-infosection>
        <app-about></app-about>
        <app-story></app-story>
        <app-equipment></app-equipment>
    </div>
</template>

<script>
    import MainHero from "./MainHero.vue";
    import InfoSection from "./InfoSection.vue";
    import About from './About.vue';
    import Story from './Story.vue';
    import Equipment from './Equipment.vue';
    export default {
        components: {
            "app-mainhero": MainHero,
            "app-infosection": InfoSection,
            "app-about": About,
            "app-story": Story,
            "app-equipment": Equipment
        }
    }
</script>