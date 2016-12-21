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
    animation: slide-in 1s easein forwards;
  
}

.page-leave-active {  
    animation: slide-in 1s ease-in reverse forwards;
}

@keyframes slide-in {
    from {

        opacity: 0;
    }
    to {
        opacity: 1;
    }

}

</style>