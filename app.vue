<script setup>
import Back from './assets/imgs/back4.svg'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-screen relative">
    <div
      class="absolute bg-amber-400 opacity-4 left-99 top-99 w-120 h-120 rounded-full blur-3xl"
    />
    <div
     class="absolute bg-amber-400 opacity-4 left-1 top-4 w-120 h-120 rounded-full blur-3xl"
    />
    <!-- Lado Esquerdo -->
    <div
      class="flex flex-col justify-center items-center p-6 md:p-10 gap-5 text-center bg-zinc-950"
    >
      <h1 class="text-3xl font-bold bg-amber-400 text-zinc-950 p-2 rounded-lg">
        Trim.ly🔗
      </h1>
      <p class="text-gray-300">
        Trim.ly é uma plataforma moderna de encurtamento de URLs que transforma
        links longos e complicados em versões curtas, elegantes e fáceis de
        compartilhar. Com um painel intuitivo, você pode gerenciar seus links,
        acompanhar estatísticas de cliques em tempo real e personalizar URLs
        para fortalecer sua marca.
      </p>
      <strong class="text-white"
        >🚀 Rápido e eficiente - Crie links curtos em segundos.
      </strong>
      <img
        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
        width="100"
        height="100"
        alt=""
      />
    </div>

    <!-- Linha Divisória (Visível apenas em telas grandes) -->
    <div
      class="hidden md:block absolute left-1/2 top-0 h-full w-px bg-amber-400"
    />

    <!-- Imagem de Fundo (SVG) -->
    <Back class="absolute inset-0 h-ful object-cover opacity-5" />

    <!-- Lado Direito -->
    <div
      class="flex flex-col justify-center text-gray-200 items-center p-6 md:p-10 gap-5 bg-neutral-950"
    >
      <h1 class="text-3xl font-bold underline">Login v.1</h1>
      <p>Insira seu email para entrar com magic link!</p>
    </div>
  </div>
</template>
