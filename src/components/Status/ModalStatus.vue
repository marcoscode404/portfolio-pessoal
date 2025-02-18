<script setup lang="ts">
const onOpenModal = defineModel<boolean>('onOpenModal')
const emit = defineEmits(['close', 'onConfirmDelete']);

</script>

<template>
  <UModal v-model="onOpenModal" :transition="false" @close="emit('close')" :ui="{
    wrapper: 'relative z-[99992]',
    height: 'h-[80vh]',
    width: 'sm:max-w-[25rem] w-fit',
    base: 'border overflow-hidden mx-2 dark:border-black border-gray-500 drop-shadow-xl',
    overlay: {
      base: 'fixed inset-0 w-full ',
      background: 'bg-gray-800/65 brightness-[.4]',
      transition: {
        enter: '', enterFrom: '', enterTo: '', leave: 'ease-in duration-0', leaveFrom: '', leaveTo: '',
      },
    },
  }">
    <header class="flex justify-between items-center text-gray-800">
      <button @click="emit('close')" class="z-[99999999] px-2 mt-7 right-0 absolute">
        <GlobalIcon class="w-4 h-4 dark:text-white text-black" name="ci:close-lg" />
      </button>
    </header>

    <main class="overflow-auto">
      <video controls autoplay muted class="h-full w-full">
        <source src="../../assets/video.webm" type="video/webm" />

        <source src="../../assets/video.webm" type="video/mp4" />

        Download the
        <a href="../../assets/video.webm">WEBM</a>
        or
        <a href="../../assets/video.webm">MP4</a>
        video.
      </video>

    </main>
  </UModal>
</template>