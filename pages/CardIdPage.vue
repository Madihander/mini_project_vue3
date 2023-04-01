<template>
    <!--<div>
        <h3>Sneaker: {{ $route.params.desc }}</h3>
        <h4>Это карточка с ID: {{ $route.params.id }}</h4>
        <card :card="$store.state.cards[$route.params.id]"/>    
    </div>
    -->
    <div>
        <infoCard :selectedInfo="$store.state.cards[$route.params.id-1]"/>    
    </div>

</template>

<script>
import card from '@/components/Card.vue';
import infoCard from '@/components/InfoCard.vue'
export default{
    components:{card,infoCard},
}
</script>

<style>
</style>