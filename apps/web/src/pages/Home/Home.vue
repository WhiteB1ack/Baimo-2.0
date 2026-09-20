<template>
  <div id="pagetitle">
    <h1>Baimo and Collaborators</h1>
    <br>
      The is the web site of 
    <a href="">bai-shi-mo</a>
      .
    <br>
      I am a software engineering student, exploring computer graphics, digital twins and createive technology through code and 3D design.
    <br>
      Most of my work lives somewhere between code, 3D design and interactive experience.
    <br>
    <br>
    <a href="https://github.com/WhiteB1ack" target="_blank" title="Baimo's Github">
      <img style="width: 16px; height: 14px" src="/images/github.svg" border="0" width="16" height="14" align="baseline">
    </a>
    <a href="https://space.bilibili.com/527650278?spm_id_from=333.1007.0.0" title="Baimo's BiliBili">
      <img style="width: 16px; height: 14px" src="/images/bilibili.svg" border="0" width="16" height="14" align="baseline">
    </a>
    <a href="https://www.npmjs.com/~baishimo" title="Baimo's NPM">
      <img style="width: 16px; height: 14px" src="/images/npm-logo-black.svg" border="0" width="16" height="14" align="baseline">
    </a>    
  </div>

  <section class="projectgroup">
    <article
      v-for="project in projects"
      :key = "project.path"
      class="homethumb"
    >
      <RouterLink :to="project.path" class="nohover">
        <img 
          :src="project.image" 
          :alt="project.title"
          width="180"
          height="180"
        >
      </RouterLink>

      <br>
      <RouterLink :to="project.path">
        {{ project.title }}
      </RouterLink>

      <br>
      {{ project.date }}
    </article>
  </section>

</template>

<script setup lang="ts">
const projects = [
  {
    title: '01-Shader-Shaping Function',
    date:  'Jun. | 2026',
    image: '/images/Phase Study I.png',
    path:  '/projects/shader/theBookofShader/01_shapingFunction'
  },
  {
    title: '03-Shader-Shapes',
    date:  'Jun. | 2026',
    image: '/images/Shapes Study I.png',
    path:  '/projects/shader/theBookofShader/03_shapes'
  },  
  {
    title: '02-Shader-Colors',
    date:  'Studying',
    image: '/images/Phase Study II.png',
    path:  '/projects/shader/theBookofShader/02_Colors'
  },
  {
    title: '00-Blender-Flag',
    date:  'Aug. | 2026',
    image: '/images/default1.jpg',
    path:  '/projects/blender/00_blenderFlag'
  },    
  {
    title: '01-Blender-Firefox',
    date:  'Jul. | 2026',
    image: '/images/Blender-Study-01.png',
    path:  '/projects/blender/01_Foxes'
  },
  {
    title: '02-Blender-Hollow Knight',
    date:  'Aug. | 2026',
    image: '/images/hollowknight.jpg',
    path:  '/projects/blender/02_HollowKnight'
  },
  {
    title: 'ASCII Study I',
    date:  'Jul. | 2026',
    image: '/images/baimo.jpg',
    path:  '/projects/ascii-study-1'
  },
  {
    title: '03-Blender-GirlinWheats',
    date: 'Spe. | 2026',
    image: '/images/Girlwheats.png',
    path: '/projects/blender/03_GirlinWheats'
  }
]
</script>

<style>
</style>