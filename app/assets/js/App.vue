<template>
    <div>
        <transition name="page" mode="out-in">
            <keep-alive>
                    <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>

</script>

<style scoped>

.page-enter-active {
    transform: translate3d(0,0,0);
    backface-visibility: hidden;
    animation: slide-in 1s ease forwards;
  
}

.page-leave-active {
    transform: translate3d(0,0,0);
    backface-visibility: hidden;
    animation: slide-in 1s ease reverse forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0%);
        opacity: 1;
    }

}

</style>