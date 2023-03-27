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
    <div class="col-12">
        <div class="row">
            <div v-for="(card, index) in store.cards" class="col-2">
                <template v-if="index < 100">
                    <CardElement :img="card.card_images[0].image_url" :name="card.name" :type="card.type" />
                </template>
                
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>

<!-- :img="card.card_images.image_url" -->