<template>
  <header id="header">
    <div id="logo">
      <RouterLink to="/", class="nohover">
        <img 
          src="/images/baimo.png"
          width="109"
          height="22" 
          alt="Baimo"
        >
      </RouterLink>
    </div>

    <SiteNav />

    <div id="fingertoy">
      <RouterLink to="/" class="nohover">
        <img 
          src="/images/fingertoy.jpg"
          width="42"
          height="32" 
          alt=""
        >
      </RouterLink>
    </div>

  </header>
</template>

<script setup lang="ts">
import SiteNav from './SiteNav.vue';

</script>