<script setup lang="ts">
import MainScreen from './MainScreen.vue.js';

defineProps<{ msg: string }>();
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- Navbar y contenido principal aquí -->
    <header>
      <!-- Contenido del componente de la calculadora -->
      <h1 class="text-4xl font-medium">{{ msg }}</h1>
      <MainScreen />
      <!-- Logotipos de Vite y Vue eliminados -->
    </header>

    <!-- Pie de página -->
    <footer class="mt-auto p-4 bg-gray-200">
      <p class="text-center text-sm">
        
      </p>
    </footer>
  </div>
</template>

<style>
/* Estilos para el footer para que se mantenga al fondo */
footer {
  position: absolute;
  bottom: 0;
  width: 0%;
}
</style>
