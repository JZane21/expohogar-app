<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
    <div class="flex flex-row justify-center items-center">
      <a class="w-100px" href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="h-[6em] p-[1.5em] will-change-auto transition-all hover:fill-blue-400" alt="Vite logo" />
      </a>
      <a class="w-max" href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="h-[6em] p-[1.5em] will-change-auto transition-all hover:fill-green-400" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>
