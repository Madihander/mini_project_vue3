<template>
  <div class="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
 </template>
<script>
import navbar from '@/components/Navbar.vue'
export default{
    components:{ navbar }
}
</script>

<style>

</style>
