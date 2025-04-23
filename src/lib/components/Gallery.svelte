<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n/language.svelte';

	interface GalleryImage {
		src: string;
		altKey: string;
	}

	const images: GalleryImage[] = [
		{
			src: '/images/main.jpg',
			altKey: 'banner.title'
		},
		{
			src: '/images/trio-photo.jpg',
			altKey: 'menu.trio'
		},
		{
			src: '/images/juliette.jpg',
			altKey: 'musicians.juliette.name'
		},
		{
			src: '/images/arnaud.jpg',
			altKey: 'musicians.arnaud.name'
		},
		{
			src: '/images/hugues.jpg',
			altKey: 'musicians.hugues.name'
		}
	];

	let currentIndex = 0;
	let imageLoaded = Array(3).fill(false);

	function getPreviousIndex(current: number): number {
		return current === 0 ? images.length - 1 : current - 1;
	}

	function getNextIndex(current: number): number {
		return current === images.length - 1 ? 0 : current + 1;
	}

	function nextImage() {
		currentIndex = getNextIndex(currentIndex);
		imageLoaded = Array(3).fill(false);
	}

	function previousImage() {
		currentIndex = getPreviousIndex(currentIndex);
		imageLoaded = Array(3).fill(false);
	}

	const handleImageLoad = (index: number) => {
		imageLoaded[index] = true;
	};
</script>

<section class="relative bg-black py-16" id="gallery">
	<div class="container mx-auto px-4">
		<div class="relative flex items-center justify-center gap-4">
			<!-- Image précédente -->
			<button
				type="button"
				class="relative h-48 w-32 cursor-pointer opacity-40 transition-all hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-white/20"
				onclick={previousImage}
				aria-label={t('gallery.previous')}
			>
				<img
					src={images[getPreviousIndex(currentIndex)].src}
					alt={t(images[getPreviousIndex(currentIndex)].altKey)}
					class="h-full w-full object-cover transition-opacity duration-500 {imageLoaded[0]
						? 'opacity-100'
						: 'opacity-0'}"
					onload={() => handleImageLoad(0)}
				/>
				<div class="absolute inset-0 bg-black/60"></div>
			</button>

			<!-- Image principale -->
			<div class="relative h-96 w-[32rem] overflow-hidden">
				<img
					src={images[currentIndex].src}
					alt={t(images[currentIndex].altKey)}
					class="h-full w-full object-cover transition-opacity duration-500 {imageLoaded[1]
						? 'opacity-100'
						: 'opacity-0'}"
					onload={() => handleImageLoad(1)}
				/>
			</div>

			<!-- Image suivante -->
			<button
				type="button"
				class="relative h-48 w-32 cursor-pointer opacity-40 transition-all hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-white/20"
				onclick={nextImage}
				aria-label={t('gallery.next')}
			>
				<img
					src={images[getNextIndex(currentIndex)].src}
					alt={t(images[getNextIndex(currentIndex)].altKey)}
					class="h-full w-full object-cover transition-opacity duration-500 {imageLoaded[2]
						? 'opacity-100'
						: 'opacity-0'}"
					onload={() => handleImageLoad(2)}
				/>
				<div class="absolute inset-0 bg-black/60"></div>
			</button>
		</div>
	</div>
</section>
