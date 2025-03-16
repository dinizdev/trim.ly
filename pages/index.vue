<template>
	<div
		class="grid grid-cols-1 md:grid-cols-2 min-h-screen relative overflow-hidden"
	>
		<!-- Elementos decorativos de fundo -->
		<div
			class="absolute bg-amber-400 opacity-4 left-99 top-99 w-120 h-120 rounded-full blur-3xl"
		/>
		<div
			class="absolute bg-amber-400 opacity-4 left-1 top-4 w-120 h-120 rounded-full blur-3xl"
		/>

		<!-- Lado Esquerdo -->
		<div
			class="flex flex-col justify-center items-center md:p-12 gap-5 text-center bg-zinc-950 relative"
		>
			<div
				class="absolute bg-amber-400 opacity-4 left-99 top-99 w-120 h-120 rounded-full blur-3xl"
			/>
			<div
				class="absolute bg-amber-400 opacity-4 left-1 top-4 w-120 h-120 rounded-full blur-3xl"
			/>
			<h1
				class="text-3xl font-bold bg-amber-400 text-zinc-950 px-4 py-2 rounded-lg shadow"
			>
				Trim.ly 🔗
			</h1>
			<p class="text-gray-300">
				"Simplifique seus links. Amplifique seus resultados. Experimente agora!"
			</p>
			<strong class="text-white"
				>🚀 Rápido e eficiente - Crie links curtos em segundos.</strong
			>
			<img
				src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
				width="80"
				height="80"
				alt="emoji"
			/>
			<p class="text-gray-400 text-sm max-w-md">
				A ferramenta está em desenvolvimento, com foco em proporcionar uma
				solução eficiente e escalável. Estamos trabalhando em novos recursos e
				melhorias para oferecer uma experiência intuitiva e de alto desempenho.
				Fique ligado para atualizações!
			</p>
			<img
				src="../public/imgs/back.svg"
				class="absolute w-full h-screen opacity-5 pointer-events-none"
				alt="background"
			/>
		</div>

		<!-- Lado Direito -->
		<div
			class="flex flex-col justify-center items-center p-8 md:p-12 gap-5 bg-neutral-950 relative"
		>
			<div class="flex flex-col gap-4 w-full max-w-sm">
				<img
					src="../public/imgs/back.svg"
					class="absolute w-screen h-screen opacity-8 pointer-events-none"
					alt="background"
				/>
				<h1 class="text-2xl font-bold underline underline-offset-4 text-white">
					Login v1.0
				</h1>
				<p class="text-gray-300 text-sm">
					Para entrar com magic link, insira seu melhor e-mail abaixo:
				</p>

				<form @submit.prevent class="flex flex-col gap-4">
					<label for="email" class="text-gray-300 text-left text-xs"
						>Email:</label
					>
					<input
						id="email"
						type="email"
						placeholder="trim.ly@mail.com"
						class="p-2 border-b-2 bg-transparent text-white outline-none placeholder-gray-400 text-xs"
					/>
					<button
						class="bg-amber-400 text-black cursor-pointer p-3 font-bold rounded hover:bg-amber-500 transition"
						type="submit"
					>
						Entrar com Email
					</button>
				</form>
			</div>
		</div>
	</div>
</template>
