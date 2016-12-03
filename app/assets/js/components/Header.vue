<template>
    <header class="main-header">
        <div class="main-header__logo">
            <img class="main-header__logo-img" src="assets/img/logo.svg" alt="Logo" />
        </div>
        <nav class="main-header__nav">
            <ul class="main-header__nav-items">
                <li><router-link to="/" tag="a">Početna</router-link></li>
                <li><a href="/obuka">Oprema</a></li>
                <li><a href="/contact">Kontakt</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        
    }
</script>