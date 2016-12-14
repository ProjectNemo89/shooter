<template>
    <section class="training">
        <app-header></app-header>
        <div class="training__img">
            <div class="training__img__wrapper">
                <!--<img src="/assets/img/core_training.jpg" alt="Dejan Vukojević | Osnovna obuka">-->
                <h3 class="training__img__subheading">Upoznavanje sa oružjem</h3>
                <h1 class="training__img__heading">Osnovna obuka</h1>
            </div>
        </div>
        <div class="training__desc">
            <p>Osnovna  obuka rukovanja vatrenim oružjem podrazumeva da pojedinac ili grupa, upoznaju Zakon o oružju i municiji,  izgrade bezbednosnu kulturu kao jedan od najbitnih segmenata, ovladaju teorijskim odredbama, definisanim planom i programom po segmentima prodju osnovnu obuku u manipulativnim tehnikama, kao i upotrebe vatrenog oružja i upoznavanje sa njegovim karakteristikama i načinom rada. Nakon povezivanja svih ovih elemenata u jedinici vremena, napornim radom dolazimo do pojedinca ili grupe koji su potpuno obučeni za bezbedno rukovanje upotrebu  i manipulaciju vatrenim oružjem.</p>
        </div>
        <app-footer></app-footer>
    </section>
        
</template>

<script>
    import Header from "./components/Header.vue";
    import Footer from "./components/Footer.vue";
    export default {
        components: {
            "app-header": Header,
            "app-footer": Footer
        }

        
    }
</script>