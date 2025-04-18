<script lang="ts">
	import { onMount } from 'svelte';
	let imageLoaded = false;

	onMount(() => {
		imageLoaded = true;
	});
</script>

<section class="relative" id="banner">
	<div class="relative w-full h-screen">
		<img
			src="/images/main.jpg"
			alt="Around Midnight Banner"
			class="w-full h-full object-cover transition-opacity duration-1000 {imageLoaded ? 'opacity-100' : 'opacity-0'}"
			onload={() => (imageLoaded = true)}
		/>
		<div class="absolute inset-0 bg-black/60"></div>
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="mx-auto max-w-4xl px-4">
				<div class="space-y-8 text-center">
					<h1 class="font-moon text-6xl text-white md:text-7xl">Around Midnight</h1>
					<p class="text-xl md:text-2xl text-gray-200">Trio Blues, Jazz & Soul</p>
				</div>
			</div>
		</div>
	</div>
</section>
