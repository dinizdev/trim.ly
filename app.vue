<script setup>
import Back from './assets/imgs/back2.svg'
</script>

<template>
  <div class="flex flex-col justify-center items-center p-3">
  
    <Back class="absolute top-1/2 left-1/2 w-auto h-auto max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2" />

    <!-- Conteúdo -->
    <div class="flex flex-col justify-center gap-4 items-center max-w-3xl z-10 p-5 rounded-3xl text-white">
      <h1 class="text-4xl font-bold bg-amber-500 text-zinc-950 p-2">Trim.ly 🚀</h1>
      <img src="./assets/imgs/main.png" alt="">
      <p>Trim.ly é uma plataforma moderna de encurtamento de URLs que transforma links longos e complicados em versões curtas, elegantes e fáceis de compartilhar. Com um painel intuitivo, você pode gerenciar seus links, acompanhar estatísticas de cliques em tempo real e personalizar URLs para fortalecer sua marca.</p>
      <strong> Rápido e eficiente  Crie links curtos em segundos.</strong>
      
    </div>
  </div>
</template>
