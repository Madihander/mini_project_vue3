import {createStore} from "vuex"
import axios from 'axios';
export default createStore({
     state: {
        cards: [{
            id:1,
            title:'Nike Air Max 270 React',
            price: '$150    ',       
            desc:'These sneakers combine two innovative technologies to give you maximum comfort and support throughout the day. The modern and stylish design of these sneakers is suitable for any everyday look, and the durable rubber sole provides stability on any surface.',
        },{
            id:2,
            title:'Adidas Ultra Boost 21',
            price: '$180',       
            desc:'These sneakers are designed for those who strive for better performance and comfort when running. Boost technology in the sole provides soft cushioning and energy return, allowing you to run longer and faster, and a breathable textile and mesh upper keeps your feet cool and dry.',
        },{
            id:3,
            title:'Reebok Classic Leather',
            price: '$75',       
            desc:'These sneakers are an icon of style and comfort that you can wear at any time of the year. They are made of high-quality materials and have a durable rubber sole, which makes them ideal for everyday use. Stylish design, combining classic and modern style, allows you to look great in any situation.',
        }],
        infos: [],
        selectedInfo:null,
        likes: 1,
     },
     getters: {
        doubleLikes(state) {
            return state.likes *2
        }
     },
     mutations: {
        // setCards(state, newCards){
        //     state.cards = newCards;
        // },
        incLikes(state) {
            state.likes +=1;
        },
        decLikes(state) {
            state.likes -=1;
        },
        showMoreInfo(state,id){
            const selected = state.infos[id];
            console.log(selected.id)
            state.selectedInfo = {
                id: selected.id,
                title: selected.title,
                body: selected.body
            }
        }
     },
     actions: {
        async fetchCards(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=3");
            this.state.infos = response.data;
        },
    }
})