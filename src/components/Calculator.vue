<script setup lang="ts">import { Ref, ref } from '@vue/runtime-dom';
  const num1:Ref<number> = ref<number>(0);
  const num2:Ref<number> = ref<number>(0);
  const result:Ref<number> = ref<number>(0);
  console.log(num1.value);
  const sumar = () => {
    result.value = num1.value + num2.value;
    console.log(result.value);
  }

  const numberCondition: RegExp = /^-?\d+$/;

  const changeValueNum1 = (event:any) => {
    const value:string = event.target.value;
    if(numberCondition.test(value)){
      num1.value = Number(value);
      console.log(num1.value);
    }else{
      console.log("no es un numero");
    }
  };

  const changeValueNum2 = (event:any) => {
    const value:string = event.target.value;
    if(numberCondition.test(value)){
      num2.value = Number(value);
      console.log(num2.value);
    }else{
      console.log("no es un numero");
    }
  };
</script>
<template>
  <div class="container mx-auto mt-12">
    <h1 class="text-3xl font-semibold mb-6">Calculadora Vue 3</h1>
    <div class="mb-4">
      <label for="num1" class="block text-sm font-medium text-gray-700">Número 1:</label>
      <input @input="changeValueNum1" @value="num1"
      type="text" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
    </div>
    <div class="mb-4">
      <label for="num2" class="block text-sm font-medium text-gray-700">Número 2:</label>
      <input @input="changeValueNum2" @value="num2"
      type="text" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
    </div>
    <button @click="sumar" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Sumar
    </button>
    <div class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Resultado:</h2>
      <p class="text-lg font-medium">{{ result }}</p>
    </div>
  </div>
</template>
