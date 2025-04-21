<script lang="ts">
	import { onMount } from 'svelte';

	interface GalleryImage {
		src: string;
		alt: string;
		caption: string;
	}

	const images: GalleryImage[] = [
		{
			src: '/images/main.jpg',
			alt: 'Around Midnight',
			caption: 'Around Midnight'
		},
		{
			src: '/images/trio-photo.jpg',
			alt: 'Le Trio',
			caption: 'Le Trio'
		},
		{
			src: '/images/juliette.jpg',
			alt: 'Juliette Chevalier',
			caption: 'Juliette Chevalier'
		},
		{
			src: '/images/arnaud.jpg',
			alt: 'Arnaud Lacarte',
			caption: 'Arnaud Lacarte'
		},
		{
			src: '/images/hugues.jpg',
			alt: 'Hugues Lasserre',
			caption: 'Hugues Lasserre'
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
						alt={image.alt}
						class="h-full w-full object-cover transition-all duration-1000 {imageLoaded[i]
							? 'scale-100 opacity-100'
							: 'scale-105 opacity-0'} group-hover:scale-110"
						onload={() => handleImageLoad(i)}
					/>
					<div
						class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<p class="text-lg text-white">{image.caption}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
