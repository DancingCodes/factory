<template>
    <NavBar />
    <router-view />
    <Footer />
    <Record />
</template>
<script setup>
import NavBar from "@/components/NavBar/index.vue";
import Footer from "@/components/Footer/index.vue";
import Record from "@/components/Record/index.vue";
</script>
<style scoped lang="scss"></style>