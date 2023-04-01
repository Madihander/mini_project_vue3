<template>
    <div class="container">
        <Card v-for="card in cards"
        :card="card"
        @show="show(card.id)"
        
        />
    </div>  
</template>

<script>
import Card from './Card.vue';

export default{
    props:['cards'],
    components:{Card},
    props:{
        cards:{
            type: Array,
            required: true,
        }
    },
    methods:{
        show(cardId){
            this.$emit('show',cardId)
        }
    }
}
</script>

<style>
.container{
    display: flex;
    justify-content:center;
    align-items: center;
    max-width: 75em;
    flex-wrap: wrap;
    padding: 40px 0;
}
</style>