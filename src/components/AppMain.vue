<script>
import MainCounter from './MainCounter.vue';
import MainCards from './MainCards.vue';
export default {
    name: "AppMain",
    components: {
        MainCounter,
        MainCards
    },
}
</script>

<template>
    <main class="py-2">
        <div class="container">
            <MainCounter />
            <div class="row row-cols-5 gy-3">
                <MainCards />
            </div>


        </div>
    </main>
</template>



<style lang="scss" scoped>
main {
    background-color: orange;

    .container {
        background-color: white;
    }
}
</style>