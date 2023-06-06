<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    // chiamata api per tutte le carte
    search(){
      if (store.cardsArchetypesSelected === ''){
        store.cardsArchetypesSelected = null
      }
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php',
      {params: {
        archetype: store.cardsArchetypesSelected
      }})
      .then((response) => {
        console.log(response.data.data);
        this.store.cards = response.data.data;
        this.store.cardsFound = response.data.data.length;
      })      
    }
  },
  created() {
    this.search()
    // chiamata api per gli archetipi
    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then((response) => {
        console.log(response.data);
        this.store.cardsArchetypes = response.data;
      })
  }
}
</script>

<template>
  <AppHeader />
  <AppMain @search="search"/>
</template>