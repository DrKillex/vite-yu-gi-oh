<script>
import { store } from '../store';
export default {
    name: "MainCounter",
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="col-12 py-2">
        <p class="mb-0">found {{store.cardsFound}} cards</p>
    </div>
</template>



<style lang="scss" scoped>
.col-12 {
    background-color: black;
    color: white;
}
</style>