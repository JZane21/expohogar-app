<template>
  <div class="bg-slate-100 w-full h-screen p-10 overflow-y-auto">
    <h1 class="text-3xl font-bold">Fase de Control de Calidad</h1>
    <div class="flex w-full justify-center items-center">
      <img src="../assets/images/FaseControlCalidad/control-calidad.jpg" alt="Aqui va una imagen chida :D"
      class="my-4 rounded-xl shadow-xl w-[500px]">
    </div>
    <div class="text-gray-500">En esta sección, se presentará a detalle acerca de la
      face de control de calidad de la página web e-business de la empresa Expo-Hogar
    </div>

    <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-4">Fase de Control de Calidad e Implementación</h1>
    <section>
      <h2 class="text-2xl font-semibold mb-2">Introducción</h2>
      <section>
        <p>Se analizará detalladamente el control de calidad de la aplicación, realizado de forma continua en cada Sprint de desarrollo. Todo el proceso se llevará a cabo durante el tiempo establecido con Expohogar o el especificado en el contrato.</p>
      </section>
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-2">Pruebas y Control de Calidad</h2>
      Para un control de calidad efectivo, se planifica una estructura de pruebas detallada. Esta incluye: número del caso de prueba, user-story, pantalla/componente, pasos de prueba ordenados y resultados esperados. En caso de bugs, se reportan con user-story, descripción, pasos de replicación y prioridad para su solución. Este enfoque estructurado permite a los desarrolladores replicar y solucionar fácilmente las fallas encontradas.
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-2">Pruebas Unitarias</h2>
      Se emplearán pruebas unitarias con Jest en VueJS para optimizar el tiempo de prueba. Estas pruebas verificarán las funcionalidades de los componentes, asegurando respuestas visibles para el usuario tras ejecutar varias acciones en la página web.
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-2">Jenkins e Integración Continua</h2>
      Para mantener un control continuo del producto tras su despliegue y garantizar actualizaciones efectivas en caso de fallos en producción, se optará por Jenkins, una herramienta de integración continua de código abierto. Jenkins permite integrar diversas herramientas de automatización, incluyendo Jest, para un control de calidad óptimo incluso en plazos cortos.
    </section>
  </div>

    <h2 class="text-xl font-bold mt-4">Términos de Referencia </h2>
    <a class="text-blue-400 hover:font-semibold hover:text-blue-800" href="https://docs.google.com/document/d/1jw7w5Yo1aNLukxIm6XGb5wM7Cqp6xq3WwU-owBxqP6w/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Toda la información se encuentra en este documento de la Fase de Control de Calidad</a>
  <!--  /////////////////////////////////////////-->

    <h2 class="text-3xl font-bold mt-4 mb-8">Seleccion del servidor, configuración y lanzamiento del portal web</h2>

    <img src="../assets/images/FaseControl/serverhostdom.png" class="my-4 mx-auto">

    <!-- Elección del Hosting -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Elección del Hosting:</h2>
      <p class="text-gray-700">La elección del hosting se basará en el tamaño del sistema, la concurrencia y la latencia.
      </p>
    </section>

    <!-- Ancho de Banda -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Ancho de Banda:</h2>
      <p class="text-gray-700">La estabilización del ancho de banda requiere pruebas y ajustes mediante el método de
        prueba y error. Se comenzará con un ancho de banda de 30000 MB/s para gestionar a todos los otros usuarios creados
        para el evento.
      </p>

    </section>

    <!-- DNS (Sistema de Nombres de Dominio) -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">DNS (Sistema de Nombres de Dominio):</h2>
      <p class="text-gray-700">El DNS se utiliza para enlazar el hosting con el dominio.
        Los dominios .bo, los cuales son requeridos para el deploy de este proyecto, solo son vendidos por NIC en Bolivia,
        una
        entidad gubernamental.
      </p>
    </section>

    <!-- Servidores y Configuración -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Servidores y Configuración:</h2>
      <p class="text-gray-700">Los servidores deben contar con WHM, que incluye correos, usuarios y configuración de
        página.
        Para facilitar el uso del servidor con todas sus características, se utiliza CPanel.
        Al crear un usuario, se generan automáticamente el DNS y la IP.
        El desarrollo de las páginas se realiza en el localhost proporcionado por el servidor.</p>
    </section>

    <!-- Licencias SSL -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Licencias SSL:</h2>
      <p class="text-gray-700">Es necesario adquirir licencias SSL para garantizar una conexión segura por HTTPS.
        Las licencias SSL contribuyen a reforzar la seguridad del portal web, protegiendo la información transmitida entre
        los usuarios y el servidor.
      </p>
    </section>

    <!-- Dominio .bo -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Dominio .bo:</h2>
      <p class="text-gray-700">Se elige el dominio .com.bo para reflejar el alcance nacional y establecer un costo para la
        facturación final de la empresa.
      </p>
    </section>

    <!-- Capacidad y Almacenamiento -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Capacidad y Almacenamiento:</h2>
      <p class="text-gray-700">La capacidad del portal se estima en hasta 10000 usuarios debido a su alcance nacional.
        Cada expositor tiene asignados 100 MB para publicaciones, sumando un total de 500 GB para el hosting de las
        cuentas de expositores.

      </p>
    </section>

    <!-- Lanzamiento del Portal -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-4">Lanzamiento del Portal:</h2>
      <p class="text-gray-700">El lanzamiento seguirá pruebas y simulacros de carga para evaluar la capacidad del sistema.
        Se programarán ventanas de mantenimiento preventivo para actualizar y mejorar continuamente el portal.</p>
    </section>


  </div>
</template>
  
<script lang="ts">
</script>
  
<style scoped></style>