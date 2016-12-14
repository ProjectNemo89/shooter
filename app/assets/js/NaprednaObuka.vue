<template>
    <section class="training">
        <app-header></app-header>
        <div class="training__img">
            <div class="training__img__wrapper">
                <!--<img src="/assets/img/core_training.jpg" alt="Dejan Vukojević | Osnovna obuka">-->
                <h3 class="training__img__subheading">Napredne tehnike rukovanja oružjem</h3>
                <h1 class="training__img__heading">Progresivna obuka</h1>
            </div>
        </div>
        <div class="training__desc">
            <p>Nakon uspešno savladane osnovne obuke, pojedinac ili grupa prelazi na progresivni nivo obuke, koji podrazumeva složeniju  dinamiku i povezivanje svih elemenata stečenih u programu osnovne obuke u jednu celinu. U programu progresivne obuke, pored elemenata definisanih programom osnovne obuke uključuje se taktika,  brzo reagovanja, razmišljanje, odlučivanje, pojačana psihička i fizička aktivnost, upotrena i manipulacija vatrenim oružjem i resavanje situacija u veoma kratkom vremenskom periodu. Dobra preporuka je da se pojedinac ili grupa u progresivnoj obuci, povežu sa drugim programima kao što su IPSC i IDPA programi, sa kojima mogu praktično da svoja stečena znanja provere  i u  takmičarskom smislu, koja su usko povezana sa temom progresivne obuke.
            </p>
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