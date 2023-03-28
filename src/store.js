import { reactive } from "vue";

export const store = reactive({
    cards:[],
    cardsArchetypes: [],
    cardsArchetypesSelected: null,
    cardsFound: 0
})