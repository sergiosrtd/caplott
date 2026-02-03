<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  if (document.getElementById('error_modal')) {
    document.getElementById('error_modal').showModal();
  }
});

const retry = () => {
  router.push('/contacto/situacion-actual');
};
</script>

<template>
  <div class="bg-red-500 w-screen min-h-screen py-10 overflow-x-hidden flex justify-center items-center font-toucheLight">
    <div class="lg:bg-[url(/images/silueta-contact.svg)] bg-no-repeat bg-contain w-[90vw] 2xl:w-[80vw] lg:min-h-[80vh] flex justify-end items-center bg-white gap-x-10">
      <div class="w-full p-3 min-[601px]:p-10 lg:w-4/5 flex flex-col items-center">
        <h3 class="font-toucheBoldItalic text-6xl min-[601px]:text-8xl min-[769px]:text-9xl tracking-[-0.2rem] mb-2 text-red-600">¡Error!</h3>
        <p class="font-toucheLight text-xl text-[#666666] text-center mb-6">Hubo un problema al enviar tu mensaje.</p>
        <button @click="retry" class="btn cursor-pointer bg-red-500 rounded-full px-12 pt-3 pb-2 font-toucheLight text-2xl tracking-[-0.05rem] text-white border-none">
          Intentar de nuevo
        </button>
      </div>
    </div>

    <!-- Error Modal -->
    <dialog id="error_modal" class="modal">
      <div class="modal-box bg-white flex flex-col items-center p-10">
        <div class="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-12 h-12 text-red-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 class="font-toucheBoldItalic text-4xl text-[#666666] mb-2 text-center">¡Ups! Algo salió mal</h3>
        <p class="font-toucheLight text-xl text-[#666666] text-center mb-6">Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo más tarde.</p>
        <div class="modal-action w-full flex justify-center">
          <form method="dialog" class="w-full flex justify-center">
            <button class="btn cursor-pointer w-full min-[621px]:w-max bg-red-500 rounded-full px-12 pt-3 pb-2 font-toucheLight text-2xl tracking-[-0.05rem] text-white border-none">Entendido</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
</style>
