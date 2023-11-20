<script setup lang="ts">
import { ref } from 'vue';
import NavigationBar from './NavigationBar.vue';
import AboutSection from './AboutSection.vue';
import ScheduleSection from './ScheduleSection.vue';
import ContratosPage from './ContratosPage.vue'; // Asegúrate de que la ruta de importación sea correcta

const currentSection = ref('home'); // 'home', 'about', 'cronograma', 'contratos'

const handleCronogramaClicked = () => {
  currentSection.value = 'cronograma';
};

const handleAboutClicked = () => {
  currentSection.value = 'about';
};

const handleHomeClicked = () => {
  currentSection.value = 'home';
};

const handleContratosClicked = () => {
  currentSection.value = 'contratos';
};
</script>

<template>
  <div class="flex flex-col h-screen">
    <NavigationBar 
      @about-clicked="handleAboutClicked"
      @cronograma-clicked="handleCronogramaClicked"
      @home-clicked="handleHomeClicked"
      @contratos-clicked="handleContratosClicked" 
    />
    <AboutSection v-if="currentSection === 'about'" />
    <ScheduleSection v-if="currentSection === 'cronograma'" />
    <ContratosPage v-if="currentSection === 'contratos'" />
    <!-- Agrega aquí contenido adicional para la página de inicio o cualquier otra sección -->
  </div>
</template>

<style>
/* Estilos adicionales si son necesarios */
</style>
