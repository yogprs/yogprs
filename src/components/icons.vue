<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import type { IconsProps } from '@/types/icons';

const props = withDefaults(defineProps<IconsProps>(), {
  type: 'random',
});

const ic = computed(() => {
  if (props?.type === 'devicon') {
    return `devicon-${props?.icon}`;
  }
  return props?.icon;
});

const classes = computed(() => [props?.class]);
</script>

<template>
  <Icon :class="classes" :icon="ic" />
  <!-- <Icon class="text-3xl sm:text-4xl" :icon="ic" /> -->
</template>
