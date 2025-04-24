<script lang="ts">
	import { onMount } from 'svelte';
	let imageLoaded = false;

	onMount(() => {
		imageLoaded = true;
	});
</script>

<section class="relative">
	<div class="relative w-full">
		<img
			src="/images/contact.jpg"
			alt="Contact Around Midnight"
			class="w-full transition-opacity duration-1000 {imageLoaded ? 'opacity-100' : 'opacity-0'}"
			onload={() => (imageLoaded = true)}
		/>
		<div class="absolute inset-0 bg-black/60"></div>
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="mx-auto max-w-xl px-4">
				<div class="rounded-lg p-8">
					<h2 class="font-moon mb-12 text-center text-4xl text-white">Contact</h2>
					<div class="space-y-4 text-center text-lg text-white">
						<p>+33 6 58 78 25 61</p>
						<p>juliette-chevalier35@hotmail.fr</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
