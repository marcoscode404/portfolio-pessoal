<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core';
// import { useMyGlobalStore } from '~/store/GlobalStore/global';
// const { state, actions } = useMyGlobalStore();

const props = defineProps<{
  styleProps?: string, nameTooltip?: string, colorIcon?: string, styleModules?: string,
  styleSvg?: string 
}>();

// TECLAS DE ATALHO
const open = ref(false);

const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === 'u' || e.ctrlKey && e.key === 'U' && e.type === 'keydown')
      e.preventDefault()
  },
});
const CtrlU = keys['Ctrl+u'];

watch(CtrlU, (v) => {
  if (v) open.value = !open.value
});
//

// onMounted(() => { actions.getModuleApps() });

const searchModule = ref("");

// APENAS OS MODULOS FAVORITOS
// const moduleFavorite = computed(() => {
//   if (searchModule.value) {
//     return state.moduleApps.filter((item) => {
//       if (item.favorite) {
//         let modulesUpperCase = item.name.toUpperCase();
//         let filtered = modulesUpperCase.includes(searchModule.value.toUpperCase());
//         return filtered;
//       }
//     })
//   }

//   return state.moduleApps.filter((item) => {
//     if (item.favorite) return item;
//   })
// });

// NÂO FAVORITOS
// const modules = computed(() => {
//   if (searchModule.value) {
//     return state.moduleApps.filter((item) => {
//       if (!item.favorite) {
//         let concatValues = item.name.toUpperCase();
//         let filtered = concatValues.includes(searchModule.value.toUpperCase());
//         return filtered;
//       }
//     })
//   }

//   return state.moduleApps.filter((item) => {
//     if (!item.favorite) return item;
//   })
// });

function handleClickLinkExternal(module:any) {
  // PROVISORIO - SERÁ SUBSTITUIDO AO SER CRIADO NESTE APP
  if(module.name == 'Remanejo') return window.open(`https://apps.modenaesilva.com.br/admin/remanejo/gerar`, '_blank')
  if(module.name == 'Módulos') return window.open(`https://apps.modenaesilva.com.br/admin/modulos`, '_blank')
  return window.open(`${module.link}`, '_blank')
};

</script>

<template>
  <UPopover :open="open" :ui="{ background: 'dark:bg-black bg-slate-100' }">
    <UTooltip text="Navegar Apps | Ctrl + U" :ui="{ background: 'dark:bg-black', base: 'font-semibold' }">
      <button class="h-8">
        <GlobalIcon name="ion:apps" :class="props.colorIcon"/>
      </button>
    </UTooltip>

    <template #panel>
      <!-- Content -->
      <div class="w-[25rem] flex h-[27rem] bg-gradient-to-r from-green-400 to-green-800"
        :class="props.styleProps"
      >

        <!-- INPUT -->
        <div class="dark:bg-[#00000078] bg-white h-11 w-full fixed z-20">
          <input v-model="searchModule" type="text" placeholder="Buscar Modulo"
            class="rounded-md border px-1 dark:bg-[#09090B] border-gray-500 mx-1 h-9 mt-1 w-[98%]">
        </div>

        <div class="p-1 w-full h-full overflow-x-hidden overflow-y-auto rounded-lg relative">
          <div class="rounded-md px-1 py-5 grid relative gap-x-2 gap-y-4 grid-cols-4  mb-1 mt-8">
            <button v-for="module in moduleFavorite" class="flex flex-col items-center z-10 dark:bg-[#00000078] bg-slate-100
              rounded-md border hover:border-black py-2 gap-2 
              transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-100
              "
              @click="handleClickLinkExternal(module)">
              <svg class="bg-slate-200 w-7 h-7 rounded-full p-0.5">
                <path :d="`${module.icon}`"></path>
              </svg>
              <p class="text-sm ">{{ module.name.slice(0, 8) }}</p>
            </button>

            <div class="absolute  blur-3xl h-full w-full"></div>
          </div>

          <div class="mt-1 rounded-md  px-1 py-5 grid gap-x-2 gap-y-4  grid-cols-4
           dark:bg-[#09090B] bg-slate-200">
            <button v-for="module in modules" class="flex flex-col items-center bg-blue-500 dark:bg-[#18181B]
              rounded-md py-2 gap-2 border border-gray-600 hover:border-black hover:dark:border-white
              transition ease-in-out delay-0 hover:-translate-y-0.5 hover:scale-105 duration-100
              "
              :class="props.styleModules"
              @click="handleClickLinkExternal(module)">
              <svg class="h-6 dark:bg-blue-100 bg-blue-300 w-6 rounded-full"
               :class="props.styleSvg" >
                <path :d="`${module.icon}`"></path>
              </svg>
              <p class="text-sm">
                {{ module.name.slice(0, 8) }}<span v-if="module.name.length > 8">...</span>
              </p>
            </button>

          </div>
        </div>
      </div>
    </template>
  </UPopover>
</template>

<style scoped>
::-webkit-scrollbar {
  height: 4px;
  width: 5px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.616);
  background: white !important;
  width: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: black !important;
}
</style>