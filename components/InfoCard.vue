<template>
    <div class="containerCard">
        <div class="info" v-if="selectedInfo">
            <h4>Id: {{ selectedInfo.id}}</h4>
            <h4>Title: {{ selectedInfo.title }}</h4>
            <h4>Price: {{ selectedInfo.price }}</h4>
            <p>Description: {{ selectedInfo.desc }}</p>
        </div>
    </div>
</template>

<script>
export default{
    props:['selectedInfo'],
    props:{
        selectedInfo:{
            type:Object,
            required:true,
            default: null,
        }
        }
}
</script>

<style>
.containerCard{
    display: flex;
    justify-content:center;
    align-items: center;
    max-width: 75em;
    flex-wrap: wrap;
    padding: 40px 0;
    background-color: black;
    border-radius: 10px;
    box-shadow: 0 0 100px 10px;
    }
.info {
    text-align: left;
    position: relative;
    color: #ffff;
    padding: 30px;
    font-family: Roboto,sans-serif;
    width: 500px;
    height: 350px;
    border-radius: 15px;
    margin: 30px;
}

.info h4,p{
    padding:5px;
}
.info h4{
    font-size: 24px;
}
.info p{
    font-size: 20px;
}

</style>
