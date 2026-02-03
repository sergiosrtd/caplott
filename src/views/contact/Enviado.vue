<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (document.getElementById('success_modal')) {
    document.getElementById('success_modal').showModal();
  }
});
</script>

<template>
  <div class="bg-step-5 w-screen min-h-screen py-10 overflow-x-hidden flex justify-center items-center font-toucheLight">
    <div class="lg:bg-[url(/images/silueta-contact.svg)] bg-no-repeat bg-contain w-[90vw] 2xl:w-[80vw] lg:min-h-[80vh] flex justify-end items-center bg-white gap-x-10">
      <div class="w-full p-3 min-[601px]:p-10 lg:w-4/5 flex flex-col items-center">
        <h3 class="font-toucheBoldItalic text-6xl min-[601px]:text-8xl min-[769px]:text-9xl tracking-[-0.2rem] mb-2">¡Gracias!</h3>
        <div class="w-full flex flex-col items-center text-[#666666]">
          <span class="font-toucheBoldItalic text-lg text-center min-[601px]:text-left min-[601px]:text-xl min-[769px]:text-2xl tracking-[-0.05rem]">Por ponerte en contacto con </span>
          <span class="font-toucheLight text-4xl tracking-[-0.1rem]">capitán<span class="font-toucheBoldItalic text-6xl tracking-[-0.2rem] ml-[-0.2rem]">lott</span></span>
        </div>
        <span class="font-toucheLight text-center text-[#666666] text-lg min-[601px]:text-xl min-[769px]:text-2xl tracking-[-0.1rem] mt-2">¡En breve nos pondremos en contacto!</span>
        
        <div class="mt-10">
          <router-link to="/" class="btn cursor-pointer bg-gradient-to-r from-[#F8EC01] to-[#19A3DD] rounded-full px-12 pt-3 pb-2 font-toucheLight text-2xl tracking-[-0.05rem] text-white border-none">
            Volver al inicio
          </router-link>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <dialog id="success_modal" class="modal">
      <div class="modal-box bg-white flex flex-col items-center p-10">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-12 h-12 text-green-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 class="font-toucheBoldItalic text-4xl text-[#666666] mb-2 text-center">¡Envío Exitoso!</h3>
        <p class="font-toucheLight text-xl text-[#666666] text-center mb-6">Gracias por contactarnos. Tu mensaje ha sido enviado correctamente.</p>
        <div class="modal-action w-full flex justify-center">
          <form method="dialog" class="w-full flex justify-center">
            <button class="btn cursor-pointer w-full min-[621px]:w-max bg-gradient-to-r from-[#F8EC01] to-[#19A3DD] rounded-full px-12 pt-3 pb-2 font-toucheLight text-2xl tracking-[-0.05rem] text-white border-none">Cerrar</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
</style>
