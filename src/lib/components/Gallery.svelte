<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n/language.svelte';
	import { getOptimizedImagePath } from '$lib/utils/images';

	interface GalleryImage {
		src: string;
		altKey: string;
	}

	const images: GalleryImage[] = [
		{
			src: getOptimizedImagePath('/images/main.jpg'),
			altKey: 'banner.title'
		},
		{
			src: getOptimizedImagePath('/images/trio-photo.jpg'),
			altKey: 'menu.trio'
		},
		{
			src: getOptimizedImagePath('/images/juliette.jpg'),
			altKey: 'musicians.juliette.name'
		},
		{
			src: getOptimizedImagePath('/images/arnaud.jpg'),
			altKey: 'musicians.arnaud.name'
		},
		{
			src: getOptimizedImagePath('/images/hugues.jpg'),
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

<section class="relative bg-black overflow-hidden" id="gallery">
	<div class="container mx-auto px-4 max-w-[90vw]">
		<div class="relative flex items-center justify-center gap-4">
			<!-- Previous Image -->
			<button
				type="button"
				class="relative h-32 w-40 cursor-pointer opacity-40 transition-all hover:opacity-60 focus:outline-none"
				onclick={() => {
					currentIndex = getPreviousIndex(currentIndex);
					imageLoaded = Array(3).fill(false);
				}}
				aria-label={t(images[getPreviousIndex(currentIndex)].altKey)}
			>
				<img
					src={images[getPreviousIndex(currentIndex)].src}
					alt={t(images[getPreviousIndex(currentIndex)].altKey)}
					class="h-full w-full rounded-lg object-cover transition-opacity duration-500"
				/>
				<div class="absolute inset-0 rounded-lg bg-black/20"></div>
			</button>

			<!-- Main Image and Navigation -->
			<div class="flex flex-col items-center">
				<div class="relative h-[28rem] w-[36rem] overflow-hidden">
					<a
						href={images[currentIndex].src}
						target="_blank"
						rel="noopener noreferrer"
						class="block h-full w-full"
					>
						<img
							src={images[currentIndex].src}
							alt={t(images[currentIndex].altKey)}
							class="h-full w-full rounded-lg object-contain transition-opacity duration-500 hover:opacity-90"
						/>
					</a>
				</div>

				<!-- Navigation Buttons -->
				<div class="mt-4 flex justify-center gap-4">
					<button
						type="button"
						class="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
						onclick={previousImage}
						aria-label={t('gallery.previous')}
					>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
					<button
						type="button"
						class="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
						onclick={nextImage}
						aria-label={t('gallery.next')}
					>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</div>

			<!-- Next Image -->
			<button
				type="button"
				class="relative h-32 w-40 cursor-pointer opacity-40 transition-all hover:opacity-60 focus:outline-none"
				onclick={() => {
					currentIndex = getNextIndex(currentIndex);
					imageLoaded = Array(3).fill(false);
				}}
				aria-label={t(images[getNextIndex(currentIndex)].altKey)}
			>
				<img
					src={images[getNextIndex(currentIndex)].src}
					alt={t(images[getNextIndex(currentIndex)].altKey)}
					class="h-full w-full rounded-lg object-cover transition-opacity duration-500"
				/>
				<div class="absolute inset-0 rounded-lg bg-black/20"></div>
			</button>
		</div>
	</div>
</section>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
