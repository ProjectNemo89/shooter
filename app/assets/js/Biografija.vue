<template>
    <div>
        <app-header></app-header>
        <div class="about-extended">
            <div class="about-extended__img">
                <img class="parallax" src="assets/img/about_extended.jpg" alt="Dejan Vukojević - Rodos 2011">
            </div>
            <div class="about-extended__description">
                <h2 class="about-extended__description__subheading">Iskustvo i uspesi</h2>
                <h1 class="about-extended__description__heading">Biografija</h1>
                <p class="about-extended__description__text">
                    Moja kontakt sa oružjem u nekom profesionalnom obliku počinje kada sam 1999. godine otisao u Vojnu Školu. Kasnije po završetku Vojne Škole u profesionalnoj službi,
                    koja uspešno traje već 16 godina, susretao sam se sa skoro svim vrstama oružja. Međutim, najveću pažnju mi je privukao pistolj. U prvom periodu u službi bio sam u prilici
                    da se godinama bavim streljaštvom, gde su rezultati koje sam postigao 2010, godine treće mesto, 2011. prvo mesto na nivou Vojske Srbije. Takođe te 2011. godine proglašen sam za sportistu Vojske Srbije
                    i sportistu Grada Pošarevca. Takođe od 2007. godine, aktivno se bavim instruktorskim radom i pripreme ekipa za razna streljačka takmičenja u Vojsci Srbije, koja su rezultirala prvim mestom ekipno na takmičenjima nivoa Vojske Srbije.
                </p>
            </div>
            <div class="about-extended__description about-extended__description--left">
                <p class="about-extended__description__text">
                    Negde 2005. godine, na poziv  Predsednika i Glavnog instruktora Kluba za praktično streljastvo „GROM“ Požarevac, gospodina Željka Vujčića, počinjem da se aktivno bavim Praktičnim streljaštvom, gde nalazim najbližu orijentaciju u svetu streljaštva.
                    Početak obuke  baziran je na fundamentu novih koncepata koje je kreirao KPS GROM, kasnije  programu IDPA, IPSC i drugih oblika obuke. 2006. godine počinjem da se profesionalno bavim IPSC-om, gde egzistiram i dan danas. Najbolji rezultati koje sam
                    postigao u IPSC takmičenjima su Prvak države u Disciplini „Produkcija“, takodje iste godine postajemo i timski prvaci drzave u disciplini „Produkcija“. Paralelno sa idividualnim uspehom sve to vreme gradim i gefinišem i instruktorski rad, koji je u
                    značajnoj meri pomogao timu da uspe u ostvarivanju ovih rezultata. 2010. godine, pozvan sam od strane gospodina Petra Pantića u nacionalni tim (Reprezentaciju Srbije), gde i dan danas nastupam. Prvo moje iskustvo u Reprezentaciji Srbije
                    bilo je ( saj 2009. Evropsko prvenstvo ) 2011. godine, na Svetskom prvenstvu na ostrvu Rodos, gde je učesće uzelo 64 reprezentacije. Kasnije 2013. godine učestvovao sam na Evropskom prvenstvu u Portugalu. Neopisivo iskustvo, prilika da vidim i
                    pucam u društvu sa svim Svetskim i Evropskim šampionima, kao sto su Ljubiša Momčilović, Adam Tic, Erik Graufel, Dzeri Mikulek, Tod Dzeret i drugi.
                    Iskustva stečena na ovim takmičenjima,  stalno prenosim na moje prijatelje i moj tim KPS GROM Požarevac. U svojoj pucačkoj karijeri učestvovao sam na raznim evropskim takmičenjima, GECO open Mađarska, Extrem open, Češka Republika, Duklej Crna Gora, Dellta Open Srbija itd.....
                </p>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    export default{
        components:{
            "app-header": Header,
            "app-footer": Footer
        }
    }
</script>
