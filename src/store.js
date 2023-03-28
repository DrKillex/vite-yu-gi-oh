import { reactive } from "vue";

export const store = reactive({
    cards:[],
    cardsArchetypes: [],
    cardsArchetypesSelected: "",
    cardsFound: 0
})