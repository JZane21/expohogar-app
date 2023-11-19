<script setup lang="ts">
import { ref } from 'vue';
import NavigationBar from './NavigationBar.vue';
import AboutSection from './AboutSection.vue';
import ScheduleSection from './ScheduleSection.vue';

const currentSection = ref('home'); // 'home', 'about', o 'cronograma'

const handleCronogramaClicked = () => {
  currentSection.value = 'cronograma';
};

const handleAboutClicked = () => {
  currentSection.value = 'about';
};

const handleHomeClicked = () => {
  currentSection.value = 'home';
};
</script>

<template>
  <div class="flex flex-col h-screen">
    <NavigationBar 
      @about-clicked="handleAboutClicked"
      @cronograma-clicked="handleCronogramaClicked"
      @home-clicked="handleHomeClicked"
    />
    <AboutSection v-if="currentSection === 'about'" />
    <ScheduleSection v-if="currentSection === 'cronograma'" />
    <!-- Aquí podrías añadir el contenido de la página de inicio si 'currentSection' es 'home' -->
  </div>
</template>

<style>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
