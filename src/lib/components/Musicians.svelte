<script lang="ts">
	import { t } from '$lib/i18n/language.svelte';
	import { getAssetPath } from '$lib/utils/paths';

	interface Musician {
		id: string;
		imageSrc: string;
	}

	const musicians: Musician[] = [
		{
			id: 'juliette',
			imageSrc: getAssetPath('/images/juliette.jpg')
		},
		{
			id: 'arnaud',
			imageSrc: getAssetPath('/images/arnaud.jpg')
		},
		{
			id: 'hugues',
			imageSrc: getAssetPath('/images/hugues.jpg')
		}
	];
</script>

<section class="relative bg-black bg-opacity-90">
	<div class="relative z-10">
		<div class="mx-auto max-w-7xl">
			{#each musicians as musician, i}
				<div
					class="mb-16 flex flex-col gap-8 px-4 sm:px-6 lg:px-8 {i === 1
						? 'md:ml-auto'
						: ''} md:w-3/4 md:flex-row md:items-start"
				>
					<div class="{i === 1 ? 'md:order-2' : ''} md:w-2/5">
						<img
							src={musician.imageSrc}
							alt={t(`musicians.${musician.id}.name`)}
							class="aspect-[3/4] w-full rounded-lg object-cover shadow-xl"
						/>
					</div>
					<div class="{i === 1 ? 'md:order-1' : ''} md:w-3/5">
						<div class="space-y-6 px-4 md:px-12">
							<h3 class="font-moon text-3xl">{t(`musicians.${musician.id}.name`)}</h3>
							<div class="space-y-4">
								<h4 class="font-moon text-lg text-gray-300">
									{t(`musicians.${musician.id}.instrument`)}
								</h4>
								<div class="space-y-4 text-gray-300">
									<p class="mb-10 text-justify">{t(`musicians.${musician.id}.bio`)}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
