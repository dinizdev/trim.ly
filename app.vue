<script setup>
import Back from './assets/imgs/back4.svg'
</script>

<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="flex flex-col justify-center items-center p-10 gap-5 text-center bg-zinc-950">
      <h1 class="text-4xl font-bold bg-amber-400 text-zinc-950 p-2">Trim.ly 🚀</h1>
      <p class="text-gray-300">Trim.ly é uma plataforma moderna de encurtamento de URLs que transforma links longos e complicados em versões curtas, elegantes e fáceis de compartilhar. Com um painel intuitivo, você pode gerenciar seus links, acompanhar estatísticas de cliques em tempo real e personalizar URLs para fortalecer sua marca.</p>
      <strong class="text-white"> Rápido e eficiente  Crie links curtos em segundos.</strong>
    </div>
    <div class="absolute left-1/2 top-0  w-px bg-amber-400"></div>
    <Back class="absolute opacity-10"/>
    <div class="flex flex-col justify-center items-center gap-2 bg-amber-300">
      <h1 class="text-3xl text-black font-bold underline">Login v.1</h1>
      <p>Insira seu email para entrar com magic link!</p>
    </div>
  </div>
</template>
