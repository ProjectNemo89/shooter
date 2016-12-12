<template>
    <section class="info-section">
        <div class="info-section__info-block">
            <h3 class="info-section__info-block__heading">osnovna obuka</h3>
            <p>
            Osnovna obuka rukovanja vatrenim oružjem podrazumeva da pojedinac ili grupa, upoznaju
            Zakon o oružju i municiji, izgrade bezbednosnu kulturu kao jedan od najbitnih segmenata...
            </p>
            <div class="btn__wrap">
                <router-link tag="a" to="/beginners" class="btn btn--primary" data-text="pročitaj više">
                    <span class="btn__overlay"></span>
                    <span class="btn__text">pročitaj više</span>
                </router-link>
            </div>
        </div>
        <div class="info-section__info-block info-section__info-block--black">
            <h3 class="info-section__info-block__heading">progresivna obuka</h3>
            <p>
            Nakon uspešno savladane osnovne obuke, pojedinac ili grupa prelazi na progresivni
            nivo obuke, koji podrazumeva složeniju dinamiku i povezivanje svih elemenata...
            </p>
            <div class="btn__wrap">
                <router-link tag="a" to="/progresive" class="btn btn--primary" data-text="pročitaj više">
                    <span class="btn__overlay"></span>
                    <span class="btn__text">pročitaj više</span>
                </router-link>
            </div>
        </div>
        <div class="info-section__info-block">
            <h3 class="info-section__info-block__heading">rekreativni program</h3>
            <p>
                Znamo da rekreacija  po definiciji treba da nas ojača i izgradi, shodno tome treba da nas fizički, fiziološki ozivi od svakodnevnih briga i obaveza i psihološki  podstakne da stičemo samokontrolu i time omogući da se sa novom snagom vratimo redovnim obavezama.
            </p>
            <div class="btn__wrap">
                <a class="btn btn--primary" href="#" data-text="pročitaj više">
                    <span class="btn__overlay"></span>
                    <span class="btn__text">pročitaj više</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>