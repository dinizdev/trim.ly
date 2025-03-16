<script setup>
import Back from './assets/imgs/back4.svg'
import Logo from './assets/imgs/logo.svg'
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen relative overflow-hidden">
    <div class="absolute bg-amber-400 opacity-4 left-99 top-99 w-120 h-120 rounded-full blur-3xl" />
    <div class="absolute bg-amber-400 opacity-4 left-1 top-4 w-120 h-120 rounded-full blur-3xl" />

    <!-- Lado Esquerdo -->
    <Back class="absolute w-full h-screen object-cover opacity-50" />
    <div class="flex flex-col justify-center items-center p-6 md:p-10 gap-5 text-center bg-zinc-950 h-full">
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
      <strong class="text-white">
        🚀 Rápido e eficiente - Crie links curtos em segundos.
      </strong>
      <img
        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
        width="100"
        height="100"
        alt="emoji"
      />
    </div>

    <!-- Linha Divisória (Vertical em telas grandes, Horizontal em celulares) -->
    <div
      class="hidden md:block absolute left-1/2 top-0 h-full w-px bg-amber-400"
    />
    <div
      class="md:hidden absolute bottom-90 left-0 w-full h-px bg-amber-400"
    />

    <!-- Lado Direito -->
    <div class="flex flex-col justify-center text-gray-200 items-center p-6 md:p-10 gap-5 bg-neutral-950 h-full">
      <div class="flex flex-col gap-4">
        <h1 class="text-2xl font-bold underline underline-offset-4">
          Insira seu melhor email
        </h1>
        <p class="text-gray-300">
          Para entrar com magic link, insira seu e-mail abaixo:
        </p>
        <input
          type="email"
          placeholder="Digite seu email"
          class="p-2 border-b-2 bg-transparent text-white cursor-text outline-none placeholder-gray-400 focus:ring-2 focus:ring-amber-400"
        />
        <button class="bg-amber-400 text-black p-2 font-bold">Entrar</button>
      </div>
    </div>
  </div>
</template>
