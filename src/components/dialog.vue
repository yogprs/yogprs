<script setup lang="ts">
import { Teleport, watch } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  title?: string;
  width?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const close = () => emit('update:modelValue', false);

// lock scroll when dialog open
watch(
  () => props.modelValue,
  (val) => {
    document.body.style.overflow = val ? 'hidden' : '';
  },
);
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        @click.self="close"
      >
        <div
          class="bg-white dark:bg-[#1a2233] rounded-xl shadow-xl w-full max-w-lg p-6 animate-[scaleIn_0.25s_ease-out]"
          :style="{ maxWidth: width || '32rem' }"
        >
          <!-- Header -->
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white">
              {{ title }}
            </h3>
            <button
              @click="close"
              class="text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer"
            >
              ✕
            </button>
          </div>

          <!-- Body -->
          <div class="text-sm text-slate-600 dark:text-slate-300">
            <slot />
          </div>

          <!-- Footer -->
          <div class="mt-6 flex justify-end gap-2">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
