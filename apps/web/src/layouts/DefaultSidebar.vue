<script setup lang="ts">
import { projects } from '../data/projects'

const groups = ['GLSL', 'Three.js', 'Blender', 'ASCII']
</script>

<template>
  <div id="leftsplit-left">

    <p>
      Sort by :
      <a href="#">Author</a> |
      <a href="#">Date</a> |
      <a href="#">Name</a> |
      <a href="#">Type</a>
    </p>

    <p>
      <RouterLink to="/projects">
        &lt; project thumbnails
      </RouterLink>
    </p>

    <hr>

    <ul class="leftnav">
      <template
        v-for="(group, index) in groups"
        :key="group"
      >
        <li>
          <strong>{{ group }}</strong>
        </li>

        <li
          v-for="project in projects.filter(
            project => project.category === group
          )"
          :key="project.path"
        >
          <RouterLink :to="project.path">
            {{ project.title }}
          </RouterLink>
        </li>

        <li v-if="index < groups.length - 1">
          &nbsp;
        </li>
      </template>
    </ul>

  </div>
</template>