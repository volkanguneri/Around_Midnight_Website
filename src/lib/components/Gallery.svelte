<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n/language.svelte';

	interface GalleryImage {
		src: string;
		altKey: string;
		captionKey: string;
	}

	const images: GalleryImage[] = [
		{
			src: '/images/main.jpg',
			altKey: 'banner.title',
			captionKey: 'banner.title'
		},
		{
			src: '/images/trio-photo.jpg',
			altKey: 'menu.trio',
			captionKey: 'menu.trio'
		},
		{
			src: '/images/juliette.jpg',
			altKey: 'musicians.juliette.name',
			captionKey: 'musicians.juliette.name'
		},
		{
			src: '/images/arnaud.jpg',
			altKey: 'musicians.arnaud.name',
			captionKey: 'musicians.arnaud.name'
		},
		{
			src: '/images/hugues.jpg',
			altKey: 'musicians.hugues.name',
			captionKey: 'musicians.hugues.name'
		}
	];

	let imageLoaded = Array(images.length).fill(false);

	const handleImageLoad = (index: number) => {
		imageLoaded[index] = true;
	};
</script>

<section class="bg-black" id="gallery">
	<div class="container mx-auto px-4">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each images as image, i}
				<div class="group relative aspect-square overflow-hidden rounded-lg">
					<img
						src={image.src}
						alt={t(image.altKey)}
						class="h-full w-full object-cover transition-all duration-1000 {imageLoaded[i]
							? 'scale-100 opacity-100'
							: 'scale-105 opacity-0'} group-hover:scale-110"
						onload={() => handleImageLoad(i)}
					/>
					<div
						class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<p class="text-lg text-white">{t(image.captionKey)}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
