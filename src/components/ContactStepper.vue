<script setup>
defineProps({
  currentStep: {
    type: Number,
    required: true
  }
});

const steps = [
  { name: 'Quién soy', icon: 'M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z' },
  { name: 'Qué quiero', icon: 'M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z' },
  { name: 'Cómo estoy', icon: 'M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z' },
  { name: 'Situación actual', icon: 'M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z', secondPath: 'M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z' }
];
</script>

<template>
  <div class="w-full flex justify-center lg:w-1/3 steps-vertical-container">
    <svg style="width: 0; height: 0; position: absolute;" aria-hidden="true">
      <defs>
        <linearGradient id="icon-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#F8EC01" />
          <stop offset="100%" style="stop-color:#19A3DD" />
        </linearGradient>
      </defs>
    </svg>
    <ul class="steps steps-horizontal lg:steps-vertical">
      <li 
        v-for="(step, index) in steps" 
        :key="index"
        :data-content="index + 1 <= currentStep ? '✓' : ''" 
        class="step"
        :class="{ 'step-primary': index + 1 <= currentStep }"
      >
        <div class="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-2">
          <span class="font-toucheMedium text-xs lg:text-sm text-[#666666]">{{ step.name }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" class="w-5 h-5 lg:w-10 lg:h-10 icon">
            <path v-if="step.icon && !step.secondPath" fill-rule="evenodd" :d="step.icon" clip-rule="evenodd" />
            <template v-else-if="step.secondPath">
              <path :d="step.icon" />
              <path fill-rule="evenodd" :d="step.secondPath" clip-rule="evenodd" />
            </template>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

.steps {
  & .step {
    &:before {
      border: none !important;
    }
  }
}

.steps-vertical {
  & .step {
    gap: 2rem;
    &:before {
      width: .2rem;
    }
  }
}

.steps {
  & .step-primary {
    &+.step-primary:before, &:after, &>.step-icon {
      --step-bg: #666666 !important;
    }
  }
}

.step:not(.step-primary)[data-content]::after,
.step:not(.step-primary)[data-content]::before {
  background: #666666 !important;
}
.step-primary[data-content]::after {
  background: linear-gradient(135deg, #F8EC01, #19A3DD) !important;
  color: white !important;
  border:none;
}

.step-primary .icon{
  fill: url(#icon-gradient) !important;
}

.steps {
  & .step {
    & > .step-icon, &:not(:has(.step-icon)):after {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
