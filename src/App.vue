<script setup>
import MainHeader from './components/MainHeader.vue';
import HomePage from './pages/HomePage.vue';
</script>

<template>
  <div>
    <MainHeader/>
    <HomePage/>
    <router-view></router-view>
  </div>
</template>


