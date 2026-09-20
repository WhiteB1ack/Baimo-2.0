<template>
  <div id="leftsplit-right">
    <h1>Phase Study II</h1>
    <p id="project-subtitle">2026 | Baimo</p>
    <p>该栏主要记录关于HSB内容的一些学习</p>
    <canvas ref="canvas" class="shader-canvas"></canvas>
    <pre>//--------------------
  {{ fragmentShader }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import fragmentShader from './shader.frag?raw'

const canvas = ref<HTMLCanvasElement | null>(null)

// 顶点着色器
const vertexShader = `
void main() {
  gl_Position = vec4(position, 1.0);
}`

let renderer: THREE.WebGLRenderer
let material: THREE.ShaderMaterial
let camera: THREE.Camera
let animationId: number

// Resize
function resize(){
  if(!canvas.value) return

  const width = canvas.value.clientWidth
  const height = canvas.value.clientHeight

  renderer.setSize(width, height, false)

  material.uniforms.u_resolution.value.set(
    width,
    height
  )
}

onMounted(() => {
  if(!canvas.value) return

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true
  })

  // Scene
  const scene = new THREE.Scene()

  // Camera
  camera = new THREE.Camera()

  // Shader Material
  material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,

    uniforms: {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2() }
    }
  })

  // 全屏平面
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    material
  )

  scene.add(mesh)

  resize()

  window.addEventListener('resize', resize)

  const timer = new THREE.Timer()

  function tick(time: number) {
    timer.update(time)

    material.uniforms.u_time.value = timer.getElapsed()

    renderer.render(scene, camera)

    animationId = requestAnimationFrame(tick)
  }

  tick(0)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  cancelAnimationFrame(animationId)

  renderer?.dispose()
  material?.dispose()
})
</script>

<style>
.shader-canvas {
  width: 180px;
  height: 180px;
  float: right;
  margin-left: 20px;
  border: 1px solid #000;
}
</style>