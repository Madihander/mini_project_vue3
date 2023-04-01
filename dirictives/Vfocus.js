export default{
    name: 'focus',
    mounted(elem, binding){
        // elem - дом дерево элем-а на который повесели директиву
        // binding - содержит переданный в директиву объект
        console.log(elem,binding);
        elem.focus()
    },
}