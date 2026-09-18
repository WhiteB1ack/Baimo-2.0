<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue';
import SiteFooter from '../components/SiteFooter.vue';
</script>

<template>
  <div id="container">
    <SiteHeader/>

    <main id="main">
      <RouterView />
    </main>

    <SiteFooter/>
  </div>
</template>