<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n'; // Removed .svelte from the import statement
	let imageLoaded = false;

	onMount(() => {
		imageLoaded = true;
	});
</script>

<section class="relative" id="trio">
	<div class="relative w-full">
		<img
			src="/images/trio-photo.jpg"
			alt="Around Midnight Trio"
			class="w-full transition-opacity duration-1000 {imageLoaded ? 'opacity-100' : 'opacity-0'}"
			onload={() => (imageLoaded = true)}
		/>
		<div class="absolute inset-0 bg-black/60"></div>
		<div class="absolute inset-0 flex items-center justify-center py-8 md:py-16">
			<div class="mx-auto max-w-4xl px-4">
				<div class="space-y-3 text-center md:space-y-8">
					<h2 class="font-moon text-xl text-white md:text-3xl lg:text-5xl">
						{t('trio.title')}
					</h2>
					<div class="text-xs leading-tight text-gray-100 md:text-lg md:leading-relaxed">
						<p>{t('trio.description')}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
