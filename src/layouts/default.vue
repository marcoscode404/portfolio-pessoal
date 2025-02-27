<script setup>

</script>

<template>
    <header class="header_cabecalho fixed w-full !bg-token_bgHeader h-10 z-[9991] px-2 flex items-center 
    dark:border-b-msDarkHeader dark:border-b justify-between">
        <nav class="lg:container w-full !max-w-[100rem] flex justify-between mx-auto">
            <div class="w-full flex justify-between items-center break-normal h-10">

                <div class="flex font-jersey text-white gap-2
                 text-2xl items-center font-bold tracking-wider">
                    <GlobalIcon name="game-icons:astronaut-helmet" class="h-8 w-8 text-purple-400" />
                    <GlobalIcon name="lineicons:nuxt" class="h-8 w-8 text-purple-400" />
                </div>

                <div class="flex gap-2" role="group">
                    <!-- menu mobile -->
                    <div class="flex items-center">
                    </div>
                </div>

                <div class="relative flex items-center gap-2">
                    <div class="h-10 flex items-center rounded-lg
                            focus:z-10 focus:ring-2 !text-white focus:ring-white focus:text-white">
                        <GlobalButtonDarkMode :type="'button'" />
                    </div>

                </div>
            </div>
        </nav>
    </header>

    <main class="pt-10 main_print_tag max-h-screen
      dark:bg-[#121214]">
        <slot></slot>

    </main>
</template>

<style>
.heightCalc {
    height: calc(100vh - 2rem);
}

::-webkit-scrollbar {
    height: 4px;
    width: 5px;
}


::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    background: #f1f1f1;

    width: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}



/* CSS para a animação */
.icon {
    animation-duration: 1.5s;
    animation-name: go-back;
}

@keyframes go-back {
    0% {
        transform: translateX(-100px);
    }

    100% {
        transform: translateX(0);
    }
}

@font-face {
    font-family: 'Jersey10';
    src: url('../public/fonts/Jersey10-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
</style>