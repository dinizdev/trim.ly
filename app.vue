<script setup>
import Back from './assets/imgs/back4.svg'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-screen relative">
    <!-- Lado Esquerdo -->
    <div class="flex flex-col justify-center items-center p-6 md:p-10 gap-5 text-center bg-zinc-950">
      <h1 class="text-4xl font-bold bg-amber-400 text-zinc-950 p-2">Trim.ly 🚀</h1>
      <p class="text-gray-300">
        Trim.ly é uma plataforma moderna de encurtamento de URLs que transforma links longos e complicados em versões curtas, elegantes e fáceis de compartilhar. 
        Com um painel intuitivo, você pode gerenciar seus links, acompanhar estatísticas de cliques em tempo real e personalizar URLs para fortalecer sua marca.
      </p>
      <strong class="text-white">🚀 Rápido e eficiente - Crie links curtos em segundos.</strong>
    </div>

    <!-- Linha Divisória (Visível apenas em telas grandes) -->
    <div class="hidden md:block absolute left-1/2 top-0 h-full w-px bg-amber-400"></div>

    <!-- Imagem de Fundo (SVG) -->
    <Back class="absolute inset-0 w-full h-full object-cover opacity-10" />

    <!-- Lado Direito -->
    <div class="flex flex-col justify-center items-center p-6 md:p-10 gap-5 bg-amber-300">
      <h1 class="text-3xl font-bold text-black underline">Login v.1</h1>
      <p>Insira seu email para entrar com magic link!</p>
    </div>
  </div>
</template>
