import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useContactStore = defineStore('contact', () => {
    const form = ref({
        nombre: '',
        empresa: '',
        contacto: '',
        objetivo: '',
        objetivo_detalle: '',
        como_estoy: '',
        textarea_step_3: '',
        situacion: '',
        textarea_step_4: ''
    });

    const loading = ref(false);
    const error = ref(null);

    const submitForm = async () => {
        loading.value = true;
        error.value = null;
        
        const formData = {
            quien_soy: {
                nombre: form.value.nombre,
                empresa: form.value.empresa,
                contacto: form.value.contacto,
            },
            que_quiero: {
                opcion: form.value.objetivo,
                detalle: form.value.objetivo_detalle,
            },
            como_estoy: {
                opcion: form.value.como_estoy,
                detalle: form.value.textarea_step_3,
            },
            situacion_actual: {
                opcion: form.value.situacion,
                detalle: form.value.textarea_step_4,
            }
        };

        try {
            const apiUrl = 'https://hook.us1.make.com/yajt34vh4kbdynpt9k2gtdxiy1h2jz5v';
            const response = await axios.post(apiUrl, formData);
            if (response.status === 200) {
                loading.value = false;
                return 'ok';
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (err) {
            console.error('There was a problem with the fetch operation:', err);
            error.value = err.message;
            loading.value = false;
            throw err;
        }
    };

    return { form, loading, error, submitForm };
});
