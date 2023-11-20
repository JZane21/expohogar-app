<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';

</script>

<template>
  <div class="flex flex-col min-h-screen w-full justify-start">
    <header>
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
