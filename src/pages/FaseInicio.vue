<template>
  <div class="bg-slate-100 w-full min-h-screen p-10">
    <h1 class="text-3xl font-bold">Fase de Inicio</h1>

    <h1 class="text-xl font-bold mt-4">{{ projectName }}</h1>
    <p>{{ projectDescription }}</p>

    <section>
      <h2 class="text-xl font-bold mt-4">Propósito</h2>
      <p>{{ purpose }}</p>
    </section>

    <section>
      <h2 class="text-xl font-bold mt-4">Viabilidad del Proyecto</h2>
      <p>{{ projectViability }}</p>
    </section>

    <section>
      <h2 class="text-xl font-bold mt-4">Objetivos, Alcance y Requisitos</h2>
      <p>{{ projectObjectives }}</p>
    </section>

    <section>
      <h2 class="text-xl font-bold mt-4">Requerimientos del Proyecto</h2>
      <p>{{ projectRequirements }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "Desarrollo del Sitio Web para EXPOHOGAR",
      projectDescription: "El proyecto de desarrollo del sitio web para EXPOHOGAR inicia con la definición de su propósito, objetivos y partes interesadas clave.",
      purpose: "El propósito es proporcionar información clara sobre el evento, facilitar el registro de participantes y destacar a los expositores. Los grupos de partes interesadas incluyen asistentes, expositores, organizadores, patrocinadores, inversores y equipos internos.",
      projectViability: "La viabilidad del proyecto se evalúa considerando recursos humanos y tecnológicos. Se cuenta con equipos especializados, roles definidos y se adopta la metodología ágil SCRUM. Se detallan los roles y responsabilidades del personal, así como la elección de tecnologías como Vue.js para el frontend y una infraestructura escalable.",
      projectObjectives: "Se establecen objetivos, alcance y requisitos iniciales en un documento de inicio de proyecto. Los objetivos incluyen diseñar una página intuitiva, ofrecer servicios de registro y promoción de expositores. El alcance inicial se centra en La Paz, con un manual de uso y menú de opciones. Se establecen límites, como el uso de datos de prueba y un período de soporte de tres meses.",
      projectRequirements: "Los requerimientos del proyecto incluyen recursos visuales, información detallada para el registro, reuniones semanales de avance y la exclusión de funciones de compra en la página. Se proporcionará enlaces a sitios oficiales para compras y contacto con patrocinadores o clientes.",
    };
  },
};
</script>

<style scoped>
/* Estilos específicos del componente, si es necesario */
</style>