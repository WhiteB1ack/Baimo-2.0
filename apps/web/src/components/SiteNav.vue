<script setup lang="ts">



const navItems = [
  {
    label: 'calender.',
    to: '/calender'
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
    label: 'bio.',
    to: '/about'
  },
  {
    label: 'contact',
    to: '/contact'
  },  
  {
    label: 'new.',
    to: '/blog'
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