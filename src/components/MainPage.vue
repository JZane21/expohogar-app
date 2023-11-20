<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';

defineProps<{ msg: string }>();
</script>

<template>
  <div class="flex flex-col min-h-screen w-full justify-start">
    <header>
      <h1 class="text-4xl font-medium">{{ msg }}</h1>
      <NavigationBar />
      <RouterView/>
    </header>

    <footer class="mt-auto p-4 bg-gray-200 w-full">
      <p class="text-center text-sm">
        © 2023 ExpoHogar App. Todos los derechos reservados.
      </p>
    </footer>
  </div>
</template>

<style>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
