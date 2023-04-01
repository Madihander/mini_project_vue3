<template>
    <CardList
    :cards="cards"
    @show="showMoreInfo"/>
    <InfoCard v-if="selectedInfo" :selectedInfo="selectedInfo"/>
  </template>
  
  <script>
  import axios from 'axios';
  import Card from '@/components/Card.vue';
  import CardList from '@/components/CardList.vue';
  import InfoCard from '@/components/InfoCard.vue';
  export default {
    components:{Card,CardList,InfoCard},
    data() {
      return {
        cards: [{
          id:1,
          title:'Single Web Hosting',
          subtitle:'Ideal solution for beginners',
          body: '$2.99',       
        },{
          id:2,
          title:'Premium Web Hosting',
          subtitle:'Perfect package for personal websites',
          body: '$5.99',
        },{
          id:3,
          title:'Business Web Hosting',
          subtitle:'Optimized for small and medium businesses',
          body: '$8.99',
        }],
        infos: [],
        selectedInfo:null,
      }
    },
    methods:{
      async fetchCards(){
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=3");
        this.infos = response.data;
      },
      showMoreInfo(id){
        alert(id);
        this.selectedInfo = this.infos[id-1];
        console.log(this.selectedInfo);
        //this.$emit('infoSel',id)
      }
    },
    mounted(){
      this.fetchCards()
    }
  }
  
  
  </script>
  
  <style>
  @import url('https://fonts.cdnfonts.com/css/poppins');
  
  </style>
  