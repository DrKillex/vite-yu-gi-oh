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
    search(){
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
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((response) => {
        console.log(response.data.data);
        this.store.cards = response.data.data;
        this.store.cardsFound = response.data.data.length;
      }),
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

<style scoped></style>
