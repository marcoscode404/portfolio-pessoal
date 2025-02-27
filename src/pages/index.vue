<script lang="ts" setup>
import { useMemory, useOnline, useWindowSize } from '@vueuse/core';
import ConfettiExplosion from "vue-confetti-explosion";
const { $api, $toast } = useNuxtApp();

import { useIntervalFn } from '@vueuse/core'
import { rand } from '@vueuse/shared'
import { ref } from 'vue'

// --------------------
const greetings = ['SEJA BEM VINDO!', 'AQUECENDO MOTORES!']
const word = ref('SEJA BEM VINDO!')
const interval = ref(2000)

const { pause, resume, isActive } = useIntervalFn(() => {
    word.value = greetings[rand(0, greetings.length - 1)]
}, interval)
// EXPERIMENTAL

interface InterfaceProps {
    name?: string;
    avatar_url?: string;
    bio: string;
    followers: string;
    following: string;
    updated_at?: string;
}

// ------------------------------------------------------
const online = useOnline();
const { isSupported, memory } = useMemory();
const clazz = computed(() => online.value ? 'text-green-700 font-bold dark:text-green-500' : 'text-gray');
const text = computed(() => online.value ? 'Online' : 'Offline');

function size(v: number) {
    const kb = v / 1024 / 1024
    return `${kb.toFixed(2)} MB`
}

// DIMENSÃO DA TELA
const { width, height } = useWindowSize();
// ------------------------------------------------------

const collectData = ref<InterfaceProps>();
const isOpenModal = ref(false);
const technologies = ref(['JAVASCRIPT', 'TYPESCRIPT', 'PYTHON', 'VUE', 'NUXT', 'REACT', 'FIGMA', 'TAILWINDCSS', 'LINUX', 'WINDOWNS']);

const linkSocialMedia = reactive({
    github: 'marcoscode404',
    links: [{
        icon: 'mdi:github',
        url: 'https://github.com/marcoscode404',
        name: 'GITHUB',
        style: ' rounded-full dark:text-gray-300 text-blue-600 h-5 w-5',
    }, {
        icon: 'ri:linkedin-fill',
        url: 'https://www.linkedin.com/in/marcosvini-colabdevs/',
        name: 'LINKDIN',
        style: 'h-5 w-5 dark:text-gray-300 text-blue-600',
    }, {
        icon: 'hugeicons:instagram',
        url: 'https://www.instagram.com/marcosviniicode/',
        name: 'INSTAGRAM',
        style: 'h-5 w-5 dark:text-gray-300 text-blue-600',
    },],
})

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linkSocialMedia.github}`;

    fetch(url).then((response) => response.json())
        .then(data => {
            collectData.value = data;
        })
        .catch((err) => { })
}

onMounted(async () => {
    getGitHubProfileInfos();
})


// confetti
const visible = ref(false);

const explode = async () => {
    visible.value = false;
    await nextTick();
    visible.value = true;
};

function handleAccessLink(url: string) {
    window.open(url, 'blanck')
}

</script>

<template>
    <main class="flex gap-7 container max-w-[100rem] m-auto mt-4 h-[calc(100vh-100px)] flex-wrap">
        <aside class="lg:w-96 w-full">
            <div class="lg:fixed">
                <div>
                    <ConfettiExplosion :stageHeight="1000" />
                </div>

                <div class="lg:w-96 border dark:bg-token_bgHeader overflow-hidden 
                h-fit
                rounded-md dark:border-msDarkHeader leading-7 text-gray-700 dark:text-gray-300">
                    <!-- banner -->
                    <div class="bg-purple-500 w-full h-fit min-h-44">
                        <StatusBanner />
                    </div>

                    <div class="flex justify-center">
                        <div class="relative flex justify-center w-fit -mt-20">
                            <span class=" flex justify-center items-center flex-shrink-0 bg-purpleseat-base text-white select-none 
                        w-[10.95rem] h-[10rem] group-data-[reduced=&quot;true&quot;]:animate-reduce-large-avatar 
                        group-data-[reduced=&quot;false&quot;]:animate-restore-large-avatar group-hover:brightness-75">
                                <button @click="isOpenModal = true">
                                    <UAvatar :alt="collectData?.name" :img-class="'h-full w-full object-cover p-1'"
                                        :src="collectData?.avatar_url" loading="lazy" class="!dark:bg-token_bgHeader 
                                        bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500
                            mx-auto text-center h-[7.5rem] w-[7.5rem] 
                            rounded-full" />

                                    <StatusModalStatus @close="isOpenModal = false"
                                        v-model:on-open-modal="isOpenModal" />
                                </button>
                            </span>

                            <div
                                class="flex items-center justify-center right-6 bottom-8  rounded-full w-8 h-8 overflow-hidden absolute 
                            transition-all ease-in-out duration-300
                            group-data-[reduced='true']:w-6 group-data-[reduced='true']:h-6 group-data-[reduced='true']:bottom-0">
                                <!-- img brasil -->
                                <img src="../assets/br.svg" class="object-cover object-center h-8 transition-all 
                                linear duration-300 group-data-[reduced='true']:h-6" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div class="px-2">
                        <h2 class="text-center text-white text-lg font-semibold">
                            {{ collectData?.name }}
                        </h2>

                        <p class="text-center dark:opacity-75 lg:opacity-95 text-sm leading-6">
                            {{ collectData?.bio }}
                        </p>

                        <p class="text-center leading-7 text-sm">
                            followers: {{ collectData?.followers }}
                            following: {{ collectData?.following }}
                        </p>

                        <div class="flex justify-center my-7 text-xs">
                            <ConfettiExplosion v-if="visible" :stageHeight="1000" />

                            <button @click="explode" class="dark:bg-msDarkHover py-1.5 dark:text-gray-100 rounded-md 
                                px-4 font-semibold bg-slate-50 border dark:border-gray-600">
                                <span class="dark:text-yellow-400 text-yellow-500 mr-1.5">JS</span>
                                JAVASCRIPT
                            </button>
                        </div>
                    </div>

                    <div class="border-t dark:border-gray-800 p-4 text-xs dark:text-gray-400 text-center">
                        {{ useFormat.asDateTime(String(collectData?.updated_at)) }}
                    </div>
                </div>

                <!-- links -->
                <div class="lg:w-96 mt-4 border dark:bg-token_bgHeader overflow-hidden h-fit
                rounded-md dark:border-msDarkHeader leading-7
                text-gray-700 dark:text-gray-300">
                    <!-- banner -->
                    <div class="p-6">
                        links
                        <div class="flex gap-4">
                            <ul v-for="(link, index) in linkSocialMedia.links" :key="index" class="py-5 flex gap-5">
                                <li>
                                    <button @click="handleAccessLink(link.url)"
                                        class="bg-slate-200 dark:bg-msDarkHover rounded-full p-2">
                                        <GlobalIcon :name="link.icon" :class="link.style" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- <audio controls class="h-5 w-56 mx-5 mb-10" /> -->
                </div>
            </div>
        </aside>

        <!-- conteudo -->
        <div class="flex flex-1 flex-col gap-5 mb-14">
            <div class="border  h-fit w-full dark:bg-token_bgHeader
        rounded-md dark:border-msDarkHeader">
                <article class="p-6">
                    <h2 class="pb-4 dark:text-gray-400 flex items-center justify-between">
                        Sobre
                        <span class="text-xs">{{ word }}</span>
                    </h2>

                    <p class="leading-8 dark:text-gray-300 my-5">
                        Sou Desenvolvedor Front-end a mais de 2 anos e 9 meses, com uma leve paixão no mercado
                        financeiro/investimentos.

                        <br />
                        apaixonado por tecnologia, inovação e boas práticas de programação.
                        Com uma sólida experiência na área, tenho trabalhado ativamente no desenvolvimento de aplicações
                        web e mobile,
                        utilizando tecnologias modernas para entregar soluções eficientes e escaláveis.
                        <br />
                    </p>
                </article>
            </div>

            <div class="border  h-fit w-full dark:bg-token_bgHeader
        rounded-md dark:border-msDarkHeader">
                <article class="p-6">
                    <h2 class="pb-4 dark:text-gray-400">Habilidades</h2>

                    <div class="flex flex-col gap-4">
                        <div>
                            <strong>Tecnologias</strong>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <div v-for="(technology, index) in technologies" :key="index">
                                    <UBadge :label="technology" class="dark:bg-token_bgDark font-bold" color="gray" />
                                </div>
                            </div>

                            <div class="flex flex-col mt-4">
                                <strong>Outros</strong>
                                <div class="flex gap-2 mt-2">
                                    <UBadge color="gray" label="HELP DESK" class="dark:bg-token_bgDark font-bold" />
                                    <UBadge color="gray" label="PHOTOMAKER" class="dark:bg-token_bgDark font-bold" />
                                    <UBadge color="gray" label="EDIÇÃO" class="dark:bg-token_bgDark font-bold" />
                                </div>
                            </div>

                            <div class="flex flex-col mt-4">
                                <strong>Idiomas</strong>
                                <div class="flex gap-2 mt-2">
                                    <UBadge color="gray" label="PORTUGUÊS" class="dark:bg-token_bgDark font-bold" />
                                    <UBadge color="gray" label="INGLÊS BÁSICO" class="dark:bg-token_bgDark font-bold" />
                                </div>
                            </div>

                        </div>
                    </div>
                </article>
            </div>

            <div class="border  h-fit w-full dark:bg-token_bgHeader
        rounded-md dark:border-msDarkHeader">
                <article class="p-6">
                    <h2 class="pb-4 dark:text-gray-400">Experiência</h2>
                    <div>
                        <section>
                            <p class="dark:text-gray-300 leading-8">
                                <strong>
                                    <UBadge color="sky" class="animate-pulse h-3 mr-2" size="xs" />
                                    Frontend Developer
                                    Modena e Silva · Tempo integralModena e Silva · Tempo integral
                                </strong>
                                <br>
                                jun de 2022 - o momento · 2 anos 9 mesesDe jun de 2022 até o momento · 2 anos 9 meses
                                Rondônia, BrasilRondônia, Brasil
                                desenvolvimento com React.js, material UI, Vue.js, Nuxt.js, Pinia(gerenciamento de
                                estado) Git, typeScript linux, Axios, figma, python,
                                fastApidesenvolvimento com React.js, material UI, Vue.js, Nuxt.js, Pinia(gerenciamento
                                de estado) Git, typeScript linux, Axios, figma, python, fastApi
                                API REST, Design de interface do usuário e mais 12 competências
                            </p>
                        </section>

                        <section class="mt-2">
                            <p class="dark:text-gray-300 leading-8">
                                <strong>
                                    <UBadge color="gray" class="h-3 mr-2" size="xs" />
                                    Técnico de suporte em TI Hospital Unimed Porto Velho RO
                                </strong>
                                <br>
                                jun de 2020 - set de 2022 · 2 anos 4 meses De jun de 2020 até set de 2022 · 2 anos 4
                                meses.
                                <br>
                                Porto Velho, Rondônia, Brasil
                                Nesse Período atuei como Técnico em informática no Hospital Unimed Porto Velho.
                                - atuando com o gerenciamento de Sistema Hospitalar MV PEP e MV apoio, criação de novas
                                novas telas para o Sistema, suporte ao usuario,
                                criação de logins para medicos e enfermeiros. resolução de problemas, formatação de
                                maquinas, cripagem de Cabos cat5 e cat6.
                                Nesse Período atuei como Técnico em informática no Hospital Unimed Porto Velho. -
                                atuando com o gerenciamento de Sistema Hospitalar MV PEP e MV apoio,
                                criação de novas novas telas para o Sistema, suporte ao usuario, criação de logins para
                                medicos e enfermeiros. resolução de problemas, formatação de maquinas, cripagem de Cabos
                                cat5 e cat6.
                                analise de sistemas.
                            </p>
                        </section>

                        <section class="mt-2">
                            <p class="dark:text-gray-300 leading-8">
                                <strong>
                                    <UBadge color="gray" class="h-3 mr-2" size="xs" />
                                    Estagiário de TI - Hospital Unimed
                                </strong>
                                <br>
                                Hospital Unimed Porto velho · EstágioHospital Unimed Porto velho · Estágio
                                set de 2019 - jun de 2020 · 10 mesesDe set de 2019 até jun de 2020 · 10 meses
                            </p>
                        </section>

                        <section class="mt-2">
                            <p class="dark:text-gray-300 leading-8">
                                <strong>
                                    <UBadge color="gray" class="h-3 mr-2" size="xs" />
                                    Estagiário de TI - PGR
                                </strong>
                                <br>
                                Procuradoria Geral do Estado de RondôniaProcuradoria Geral do Estado de Rondônia
                                out de 2018 - jan de 2019 · 4 meses
                            </p>
                        </section>
                    </div>
                </article>
            </div>

            <div class="border  h-fit w-full dark:bg-token_bgHeader
        rounded-md dark:border-msDarkHeader">
                <article class="p-6">
                    <h2 class="pb-4 dark:text-gray-400">Certificados</h2>
                    <div>
                        Em breve
                    </div>
                </article>
            </div>

            <!-- metricas nerdianas -->
            <div class="border  h-fit w-full dark:bg-token_bgHeader
        rounded-md dark:border-msDarkHeader mb-10">
                <article class="p-6">
                    <h2 class="pb-4 dark:text-gray-400">
                        Metricas Nerdianas
                    </h2>
                    <div class="text-xs text-gray-500">
                        <div v-if="isSupported && memory"
                            class="inline-grid grid-cols-2 gap-x-4 gap-y-2 dark:text-white  text-black font-semibold">
                            <template v-if="memory">
                                <div opacity="50">
                                    Em uso
                                </div>
                                <div>{{ size(memory.usedJSHeapSize) }}</div>
                                <div opacity="50">
                                    Alocado
                                </div>
                                <div>{{ size(memory.totalJSHeapSize) }}</div>
                                <div opacity="50">
                                    Limite
                                </div>
                                <div>{{ size(memory.jsHeapSizeLimit) }}</div>
                            </template>
                        </div>

                        <div class="font-bold text-red-600 dark:text-white mt-4">
                            Largura: {{ width }} X Altura: {{ height }}</div>
                    </div>
                </article>
            </div>
        </div>
    </main>
</template>
