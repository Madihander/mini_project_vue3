<template>
<div><h3>SNEAKERS</h3></div>
<CardList
    :cards="cards"
    @show="callShowMoreInfo"/>
    <InfoCard v-if="selectedInfo" :InfoCard="selectedInfo"/>
  </template>
  <script>

  import Card from '@/components/Card.vue';
  import CardList from '@/components/CardList.vue';
  import InfoCard from '@/components/InfoCard.vue';

  import createStore from '@/store/index';
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
  
  export default {
    components:{Card,CardList,InfoCard},
    
    methods:{
      ...mapActions({
        fetchCards: 'fetchCards',
      }),
    
      ...mapMutations({
        setCards: 'setCards',
        showMoreInfo: 'showMoreInfo',
      }),
    
      callShowMoreInfo(id){
    //    this.showMoreInfo(parseInt(id-1));
        this.showMoreInfo(parseInt(id-1));
      },
    
    },
    mounted(){
      this.fetchCards()
    },
    computed:{
      ...mapState({
        cards: state => state.cards,
        infos: state => state.infos,
        selectedInfo: state => state.selectedInfo,
      })
    }
  }
  
  
  </script>
  
  <style>
  </style>
  