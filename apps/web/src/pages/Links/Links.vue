<script setup lang="ts">
import { links } from '../../data/links'
</script>

<template>
  <div id="pagetitle">
    <h1>Baimo and Collaborators</h1>
    <h2>Links</h2>
  </div>

  <template
    v-for="group in links"
    :key="group.title"
  >
    <h1>{{ group.title }}</h1>

    <ul>
      <li
        v-for="link in group.links"
        :key="link.url"
      >
        <a
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.title }}
        </a>
      </li>
    </ul>
  </template>
</template>