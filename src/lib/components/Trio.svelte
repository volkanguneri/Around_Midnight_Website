<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';
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
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="mx-auto max-w-lg px-6 sm:px-8">
				<div class="space-y-3 text-center md:space-y-8">
					<div
						class="space-y-4 px-2 text-justify text-xs leading-tight text-gray-100 md:text-lg md:leading-relaxed"
					>
						{#each t('trio.description') as paragraph}
							<p>{paragraph}</p>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
