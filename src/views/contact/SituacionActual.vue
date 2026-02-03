<script setup>
import { useContactStore } from '../../stores/contact';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import ContactStepper from '../../components/ContactStepper.vue';

const store = useContactStore();
const router = useRouter();
const errorMessage = ref('');

const handleSubmit = async () => {
  if (!store.form.situacion) {
    errorMessage.value = 'Por favor, completa todos los campos requeridos.';
    return;
  }
  
  try {
    const result = await store.submitForm();
    if (result === 'ok') {
      router.push('/contacto/enviado');
    }
  } catch (err) {
    router.push('/contacto/error');
  }
};

const goBack = () => {
  router.push('/contacto/como-estoy');
};
</script>

<template>
  <div class="bg-step-4 w-screen min-h-screen py-10 overflow-x-hidden flex justify-center items-center font-toucheLight">
    <div class="lg:bg-[url(/images/silueta-contact.svg)] bg-no-repeat bg-contain w-[90vw] 2xl:w-[80vw] lg:min-h-[80vh] flex justify-end items-center bg-white gap-x-10">
      <div class="w-full p-3 min-[601px]:p-10 lg:w-4/5 flex flex-col">
        <div class="w-full flex justify-center max-[1025px]:mb-5 principal-title">
          <span class="font-toucheBoldItalic text-xl min-[601px]:text-3xl min-[769px]:text-4xl tracking-[-0.05rem] min-[769px]:tracking-[-0.2rem]">¿Cómo describis tu situación ahora mismo?</span>
        </div>
        <div class="flex flex-col lg:flex-row lg:justify-end items-center">
          <ContactStepper :current-step="4" />
          <div class="w-full lg:w-4/5 p-8 steps-forms-container">
            <!-- Form Step 4: Situación actual -->
            <div class="form-step">
              <h3 class="font-toucheBoldItalic text-md min-[621px]:text-lg text-[#666666] mb-4">Así calibramos la profundidad del trabajo.</h3>
              <p class="text-[#ff637d] font-toucheLight error mb-2">{{ errorMessage }}</p>
              <div class="flex flex-col">
                <div class="form-control" v-for="option in [
                  'Sin campañas activas',
                  'Campañas básicas, poco análisis',
                  'Campañas activas con reporting simple',
                  'Con datos/CRM, pero poco aprovechados',
                  'Otro'
                ]" :key="option">
                  <label class="label text-wrap cursor-pointer justify-start gap-3">
                    <input type="radio" name="situacion" :value="option" v-model="store.form.situacion" required class="radio radio-primary" />
                    <span class="label-text font-toucheLight text-[#666666] max-[601px]:text-xs">
                      {{ option === 'Otro' ? 'Otro (máximo 200 caracteres)' : option }}
                    </span>
                  </label>
                </div>
                <div class="form-control mt-2">
                  <textarea v-model="store.form.textarea_step_4" name="textarea_step_4" class="textarea textarea-bordered rounded-[20px] w-full font-toucheLight" rows="4"></textarea>
                </div>
              </div>
              <div class="flex flex-col items-center min-[601px]:items-start min-[601px]:flex-row gap-4 mt-6">
                <button v-if="!store.loading" @click="handleSubmit" type="button" class="btn-submit cursor-pointer w-max bg-gradient-to-r from-[#F8EC01] to-[#19A3DD] rounded-full px-12 pt-3 pb-2 font-toucheLight text-2xl tracking-[-0.05rem] text-white">
                  Enviar
                </button>
                <button @click="goBack" type="button" class="btn-prev cursor-pointer w-max rounded-full px-12 pt-3 pb-2 font-toucheLight text-2xl tracking-[-0.05rem]">Anterior</button>
                <span v-if="store.loading" class="loading loading-spinner loading-xl text-[#666666]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
