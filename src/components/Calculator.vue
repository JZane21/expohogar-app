<template>
  <div class="flex flex-col w-full h-screen">
    <!-- Navbar -->
    <nav class="w-full bg-gray-500 py-4 text-white flex justify-between items-center">
      <!-- Logo -->
      <img src="ruta/a/tu/logo.png" alt="Logo" class="h-8 mr-4"> <!-- Ajusta la ruta de la imagen y el tamaño según sea necesario -->

      <!-- Navigation Buttons -->
      <div class="flex items-center gap-2">
        <button class="px-3 py-2 rounded-md hover:bg-gray-700">Inicio</button>
        <button class="px-3 py-2 rounded-md hover:bg-gray-700">Servicios</button>
        <button class="px-3 py-2 rounded-md hover:bg-gray-700">Productos</button>
        <button class="px-3 py-2 rounded-md hover:bg-gray-700">Acerca de</button>
        <button class="px-3 py-2 rounded-md hover:bg-gray-700">Contacto</button>
      </div>

      <!-- User icon or button -->
      <div>
        <!-- Botón Usuario redondo -->
        <button class="bg-blue-500 w-12 h-12 rounded-full flex justify-center items-center hover:bg-blue-600">
          <span class="text-lg">U</span> <!-- Icono o iniciales del usuario aquí -->
        </button>
      </div>
    </nav>
    
    <!-- Textbox Section -->
    <div class="flex-grow">
      <label for="eventDescription" class="block text-lg font-medium text-gray-700 mb-2">
        Descripción del Evento
      </label>
      <textarea 
        id="eventDescription"
        rows="4" 
        readonly
        class="shadow-sm mt-1 block w-full h-full sm:text-sm border border-gray-300 rounded-md">
        Este es el texto predefinido que se muestra en la casilla de texto. El usuario no puede editar este texto desde la interfaz de usuario.
      </textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
// No hay lógica de script necesaria para este componente estático
</script>

<style>
/* No se especificaron estilos adicionales */
</style>
