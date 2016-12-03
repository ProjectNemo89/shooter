<template>
    <div>
        <transition name="page">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>

</script>

<style scoped>
.page-enter {
   opacity: 0;
}
.page-enter-active {
   opacity: 1;
   transition: opacity .9s ease; 
}

.page-leave-active {
    opacity: 0;
    transition: opacity .9s ease;
}

</style>