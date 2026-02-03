<script setup>
import { useContactStore } from '../../stores/contact';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import ContactStepper from '../../components/ContactStepper.vue';

const store = useContactStore();
const router = useRouter();
const errorMessage = ref('');

const validateAndNext = () => {
  if (store.form.nombre && store.form.empresa && store.form.contacto) {
    router.push('/contacto/que-quiero');
  } else {
    errorMessage.value = 'Por favor, completa todos los campos requeridos.';
  }
};
</script>

<template>
  <div class="bg-step-1 w-screen min-h-screen py-10 overflow-x-hidden flex justify-center items-center font-toucheLight">
    <div class="lg:bg-[url(/images/silueta-contact.svg)] bg-no-repeat bg-contain w-[90vw] 2xl:w-[80vw] lg:min-h-[80vh] flex justify-end items-center bg-white gap-x-10">
      <div class="w-full p-3 min-[601px]:p-10 lg:w-4/5 flex flex-col">
        <div class="w-full flex justify-center max-[1025px]:mb-5 principal-title">
          <span class="font-toucheBoldItalic text-4xl min-[601px]:text-6xl tracking-[-0.05rem] min-[769px]:tracking-[-0.2rem]">¡Empecemos!</span>
        </div>
        <div class="flex flex-col lg:flex-row lg:justify-end items-center">
          <ContactStepper :current-step="1" />
          <div class="w-full lg:w-4/5 p-8 steps-forms-container">
            <!-- Form Step 1: Quién soy -->
            <div class="form-step">
              <div class="w-full space-y-4 mb-5 flex flex-col">
                <p class="text-[#ff637d] font-toucheLight error">{{ errorMessage }}</p>
                <input v-model="store.form.nombre" name="nombre" type="text" required placeholder="Tu nombre" class="input rounded-[20px] w-full" :class="{'input-error': errorMessage && !store.form.nombre}" />
                <input v-model="store.form.empresa" name="empresa" type="text" required placeholder="Empresa" class="input rounded-[20px] w-full" :class="{'input-error': errorMessage && !store.form.empresa}" />
                <input v-model="store.form.contacto" name="contacto" type="text" required placeholder="Como te contactamos" class="input rounded-[20px] w-full" :class="{'input-error': errorMessage && !store.form.contacto}" />
                <p class="label-text text-[#666666] font-toucheLight max-[621px]:text-xs">
                  Con las siguientes 3 respuestas entendemos tu
                  contexto y priorizamos lo que más impacto tendría
                </p>
              </div>
              <button @click="validateAndNext" type="button" class="btn-next cursor-pointer w-full min-[621px]:w-max bg-gradient-to-r from-[#F8EC01] to-[#19A3DD] rounded-full px-12 pt-3 pb-2 font-toucheLight text-2xl tracking-[-0.05rem] text-white">
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
