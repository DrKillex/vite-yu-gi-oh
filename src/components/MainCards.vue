<script>
import { store } from '../store';
import CardElement from './CardElement.vue';
export default {
    name: "MainCards",
    components: {
        CardElement
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="col mb-3" v-for="(card, index) in store.cards.slice(0, 50)">        
        <CardElement :img="card.card_images[0].image_url" :name="card.name.toUpperCase()" :type="card.type" />                            
    </div>
</template>



<style lang="scss" scoped>
article{
    background-color: orange;
    height: 100%;

    :deep(img) {
    width: 100%;
}
}

</style>

<!-- :img="card.card_images.image_url" -->