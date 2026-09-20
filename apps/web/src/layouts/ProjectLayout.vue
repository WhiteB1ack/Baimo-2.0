<script setup lang="ts">
import PageTitle from '../components/PageTitle.vue'
import DefaultSidebar from './DefaultSidebar.vue'
</script>

<template>
  <PageTitle />

  <div id="leftsplit-wrap">
    <div id="leftsplit-left">
      <DefaultSidebar />
    </div>

    <div id="leftsplit-right">
      <RouterView />
    </div>
  </div>


</template>