<script lang="ts" setup>
import { useMagicKeys } from '@vueuse/core';

const props: any = withDefaults(defineProps<{
  type?: false
}>(), {})

// DARK MODE
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

// TECLA DE ATALHO 
const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === 'q' || e.ctrlKey && e.key === 'Q' && e.type === 'keydown')
      e.preventDefault()
  },
});
const CtrlQ = keys['Ctrl+q'];

watch(CtrlQ, (v) => {
  if (v) isDark.value = !isDark.value
});

</script>

<template>
  <div class="h-7 flex items-center">
    <ClientOnly v-if="props.type == false">
      <UToggle class="dark:!bg-msDarkHover" size="lg"
       v-model="isDark" on-icon="i-heroicons-moon-20-solid"
        off-icon="i-heroicons-sun-20-solid" />

      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>

    <ClientOnly v-else>
      <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="black" variant="ghost"
        aria-label="Theme" @click="isDark = !isDark" class=" bg-msDarkHover"/>

      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </div>
</template>