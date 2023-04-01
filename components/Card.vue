<template>
<!--    <div class="card">
        <div class="box">
            <div class="content">
                <h2>{{ card.id }}</h2>
                <h3>{{ card.title }}</h3>
                <h4>{{ card.subtitle }}</h4>
                <h1 class="price">{{ card.body }}</h1>
                <a v-on:click="show(card.id)" href="#">show more</a>
                <a @click="$router.push(`./cards/${card.id}`)" href="#">Карта</a>
            </div>
        </div>
    </div>-->
    <div class="card">
        
        <div class="imgBx">
            <img src="@/imgs/shoes2.png">
        </div>

        <div class="contentBx">
            <h2>{{ card.title }}</h2>
            <div class="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
            <div class="color">
                <h3>Size :</h3>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h2>{{ card.price }}</h2>
            <a href="#"
            @click="$router.push(`./cards/${card.id}`)">More</a>
        </div>

    </div>
</template>


<script>
export default{
    props:['card'],
    props:{
        card:{
            type: Object,
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
.card {
    position:relative;
    width: 20em;
    height: 27.5em;
    background-color: black;
    overflow: hidden;
    border-radius: 20px;
    margin: 30px
}

.container .card:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: #9bdc28;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
} 
.card:hover:before {
    clip-path: circle(300px at 80% -20%);
}


.container .card:after {
    content:'Nike';
    position:absolute;
    top:30%;
    left:-20%;
    font-weight: 800;
    font-style: italic;
    color:rgba(255,255,255,0.04);
    background: #9bdc28;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
}
.container .card .imgBx {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10000;
    width: 100%;
    height: 220px;
    transition: 0.5s;
}


.container .card:hover .imgBx {
    position: absolute;
    top: 0%;
    transform: translateY(0%);
}

.card .imgBx img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    width: 270px;
}

.card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
}

.container .card:hover .contentBx {
    height: 210px;
}
.container .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
}

.container .card .contentBx .size,
.container .card .contentBx .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
}

.container .card:hover .contentBx .size{
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
}

.container .card:hover .contentBx .color{
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
}


.container .card .contentBx .size h3,
.container .card .contentBx .color h3 {
    color: #fff;
    font-weight:300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
}

.container .card .contentBx .size span {
    display: inline-block;
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    color:#111;
    background: #fff;
    margin: 0 5px;
    transition: 0.5s;
    border-radius: 4px;
    cursor: pointer;
}
.container .card .contentBx .size span:hover {
    background: #9bdc28;

}

.container .card .contentBx .color span {
    width: 20px;
    height: 20px;
    background-color: #ff0;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.container .card .contentBx .color span:nth-child(2) {
    background: #9bdc28;
}


.container .card .contentBx .color span:nth-child(3) {
    background: #03a9f4;
}

.container .card .contentBx .color span:nth-child(4) {
    background: #e91e63;
}


.container .card .contentBx a {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
}

.container .card:hover .contentBx a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;
}




/*
.card .box{
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background-color: #ebf5fc;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
}
.card:hover .box{
    transform: translateY(-50px);
    box-shadow: 10px 10px 30px rgba(0,0,0,0.2);
    background:linear-gradient(45deg,#C262D3,#7a04b4);
}



.card .box .content h2{
    position:absolute;
    top: -10px;
    right: 30px;
    font-size:8em;
    color: rgba(0,0,0,0.02);
    transition: 0.5s;
    pointer-events: none;
}

.container .card:hover .box .content h2 {
    color: rgba(0,0,0,0.05);
}


.card .box .content h3{
    font-size: 1.8em;
    color:#777;
    z-index:1;
    transition: 0.5s;
}

.card:hover .box .content h3{
    color:#ffff;
}

.card .box .content h1{
    font-size: 5em;
    color:#777;
    z-index:1;
    transition: 0.5s;
}

.card .box .content h4{
    margin-top: 10px;
    color:#777;
    z-index:1;
    transition: 0.5s;
}

.card:hover .box .content h1{
    color:#ffff;
}.card:hover .box .content h4{
    color:#ffff;
}


.card .box .content p{
    font-size: 1em;
    font-weight: 300;
    color:#777;
    z-index:1;
    transition: 0.5s;
}   


.card:hover .box .content h3{
    color:#ffff;
}

.price{
    margin: 20px 20px;
}

.card .box .content a{
    position: relative;
    display: inline-block;
    padding:8px 20px;
    background-color: #03a9f4;
    margin-top: 15px;
    color:#ffff;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 400;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    font-size: 1.2em;
    font-weight: 300;
    z-index:1;
    transition: 0.5s;
}   

.card:hover .box .content a{
    background-color: #ff586f;

}   */
</style>