<script>
const res = await fetch('http://localhost:3000/api/hello')
const data = await res.json()
console.log(data.message)
</script>

<template>
  <h1>Hello This is Baimo 2.0</h1>
</template>
