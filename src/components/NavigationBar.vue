<template>
  <nav class="w-full bg-red-800 py-4 text-white flex justify-end items-center">
    <!-- Logo -->
    <img src="ruta/a/tu/logo.png" alt="Logo" class="h-8 mr-4"> <!-- Ajusta la ruta de la imagen y el tamaño según sea necesario -->

    <!-- Navigation Buttons -->
    <div class="flex items-center gap-2">
      <button @click="handleHomeClick" class="px-3 py-2 rounded-md hover:bg-red-700">Inicio</button>
      <button class="px-3 py-2 rounded-md hover:bg-red-700">Servicios</button>
      <button class="px-3 py-2 rounded-md hover:bg-red-700">Productos</button>
      <button @click="handleAboutClick" class="px-3 py-2 rounded-md hover:bg-red-700">Acerca de</button>
      <button @click="handleCronogramaClick" class="px-3 py-2 rounded-md hover:bg-red-700">Cronograma</button>
      <button class="px-3 py-2 rounded-md hover:bg-red-700">Contacto</button>
    </div>

    <!-- User icon or button -->
    <button class="bg-blue-500 w-12 h-12 rounded-full flex justify-center items-center hover:bg-blue-600">
      <span class="text-lg">U</span> <!-- Icono o iniciales del usuario aquí -->
    </button>
  </nav>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['home-clicked', 'about-clicked','cronograma-clicked']);

const handleHomeClick = () => {
  emit('home-clicked');
};

const handleAboutClick = () => {
  emit('about-clicked');
};
const handleCronogramaClick = () => {
  emit('cronograma-clicked');
};
</script>

<style>
/* Sin estilos adicionales necesarios */
</style>
