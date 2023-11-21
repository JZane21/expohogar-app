<template>
  <div class="bg-slate-100 w-full h-screen p-10 overflow-y-auto">
    <h1 class="text-3xl font-bold">Fase de Control de Calidad y blablabla </h1>
    <img src="../assets/images/FaseInicio/pato.jpg" alt="Aqui va una imagen chida :D" class="my-4">
    <div class="text-gray-500">Lo de arriba es que si gustan colocar imagenes, cambien el pato
    </div>
    <h2 class="text-xl font-bold mt-4">Términos de Referencia </h2>
    <p class="text-gray-700">Esta es una prueba de como se ve la fase de Calidad :D</p>

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