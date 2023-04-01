<template>
    <header>
        <nav>
            <ul>
                <li><a href="#" @click="$router.push('/')">HOME</a></li>
                <li><a href="#" @click="$router.push('/cardsStore')">SNEAKERS</a></li>
                <li><a href="#" @click="$router.push('/contacts')">CONTACTS</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default{
    name: "navbar"
}
</script>
<style>


header {
  background-color: #ffff;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

nav {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
    margin: 0 10px;
    border-bottom: 2px solid #333;
}

a {
    text-decoration: none;
    color: #333;
    letter-spacing: 0px;
}


</style>