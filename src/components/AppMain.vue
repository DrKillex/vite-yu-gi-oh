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
            <select name="type" id="selectType" class="mb-2">
                <option value="">sad</option>
            </select>
            <MainCounter />
            <div class="row row-cols-5 mx-0">
                <MainCards />
            </div>


        </div>
    </main>
</template>



<style lang="scss" scoped>
main {
    background-color: orange;

    .container {
        select{
            width: 150px;
        }
        .row {
            background-color: white;
        }
    }
}
</style>