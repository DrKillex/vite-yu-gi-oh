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
            <div v-for="card in store.cards" class="col-2">
                <CardElement :img="card.card_images.image_url" :name="card.name" :type="card.type" />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>

<!-- :img="card.card_images.image_url" -->