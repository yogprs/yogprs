<script setup lang="ts">
defineProps<{
  position?: 'top' | 'bottom' | 'left' | 'right';
}>();

const modelValue = defineModel<boolean>('visible', { default: false });
</script>

<template>
  <div
    class="relative inline-flex"
    @mouseenter="modelValue = true"
    @mouseleave="modelValue = false"
  >
    <!-- Trigger -->
    <slot />

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="modelValue"
        class="absolute z-50 px-2 py-1 text-xs rounded-lg bg-slate-900 text-white shadow-lg"
        :class="{
          'bottom-full left-1/2 -translate-x-1/2 mb-2': position === 'top',
          'top-full left-1/2 -translate-x-1/2 mt-2': position === 'bottom',
          'right-full top-1/2 -translate-y-1/2 mr-2': position === 'left',
          'left-full top-1/2 -translate-y-1/2 ml-2': position === 'right',
        }"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>
