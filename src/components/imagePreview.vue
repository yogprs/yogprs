<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  src: string;
  alt?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean): void;
}>();

const close = () => emit('update:modelValue', false);

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close();
};

onMounted(() => {
  window.addEventListener('keydown', onKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKey);
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click.self="close"
      >
        <div class="relative">
          <!-- Close Button -->
          <button
            @click="close"
            class="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 transition"
          >
            ✕
          </button>

          <!-- Image -->
          <img
            :src="src"
            :alt="alt"
            class="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
