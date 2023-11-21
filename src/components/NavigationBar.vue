<template>
  <nav class="w-full bg-red-800 py-4 text-white flex justify-between items-center px-10">
    <div class="flex items-center gap-2">
      <router-link to="/fase-inicio" class="px-3 py-2 rounded-md hover:bg-red-700">Fase de Inicio</router-link>
      <router-link to="/fase-planificacion" class="px-3 py-2 rounded-md hover:bg-red-700">Fase de Planificación</router-link>
      <router-link to="/fase-desarrollo" class="px-3 py-2 rounded-md hover:bg-red-700">Fase de Diseño y desarrollo</router-link>
      <router-link to="/fase-control" class="px-3 py-2 rounded-md hover:bg-red-700">Fase de Control de Calidad e implementación</router-link>
      <router-link to="/fase-cierre" class="px-3 py-2 rounded-md hover:bg-red-700">Fase de Cierre</router-link>
      <router-link to="/sobre-nosotros" class="px-3 py-2 rounded-md hover:bg-red-700">Sobre Nosotros</router-link>

    </div>
    <button class="bg-blue-500 w-12 h-12 rounded-full flex justify-center items-center hover:bg-blue-600">
      <span class="text-lg">U</span>
    </button>
  </nav>
</template>

<script setup lang="ts">

</script>

<style>
/* Sin estilos adicionales necesarios */
</style>
