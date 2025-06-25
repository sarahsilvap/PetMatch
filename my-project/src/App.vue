<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const hideLayout = ['/login', '/cadastro', '/adm']
</script>

<template>
  <Header v-if="!hideLayout.includes(route.path)" />
  <main>
    <router-view />
  </main>
  <Footer v-if="!hideLayout.includes(route.path)" />
</template>

<style>
</style>