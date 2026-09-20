<script setup lang="ts">



const navItems = [
  {
    label: 'lab.',
    to: '/lab'
  },
  {
    label: 'projects.',
    to: '/projects'
  },
  {
    label: 'code.',
    to: '/code'
  },
  {
    label: 'about.',
    to: '/about'
  },
  {
    label: 'calender',
    to: '/calender'
  },  
  {
    label: 'links.',
    to: '/links'
  }  
]
</script>

<template>
  <nav id="nav">
    <RouterLink
      v-for="item in navItems"
      :key = "item.to"
      :to = "item.to"
    >
      {{ item.label }}
    </RouterLink>
  </nav>
</template>