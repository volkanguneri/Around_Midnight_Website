<script lang="ts">
	import { t } from '$lib/i18n/language.svelte';

	interface Musician {
		id: string;
		imageSrc: string;
	}

	const musicians: Musician[] = [
		{
			id: 'juliette',
			imageSrc: '/images/juliette.jpg'
		},
		{
			id: 'arnaud',
			imageSrc: '/images/arnaud.jpg'
		},
		{
			id: 'hugues',
			imageSrc: '/images/hugues.jpg'
		}
	];
</script>

<section class="relative bg-black bg-opacity-90 py-16">
	<div class="absolute inset-0 z-0">
		<img
			src="/images/texture-bg.jpg"
			alt=""
			class="h-full w-full object-cover opacity-20"
			aria-hidden="true"
		/>
	</div>

	<div class="relative z-10">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			{#each musicians as musician, i}
				<div class="flex flex-col gap-8 md:flex-row {i % 2 === 1 ? 'md:flex-row-reverse' : ''}">
					<div class="md:w-1/3">
						<img
							src={musician.imageSrc}
							alt={t(`musicians.${musician.id}.name`)}
							class="aspect-[3/4] w-full rounded-lg object-cover shadow-xl"
						/>
					</div>
					<div class="md:w-2/3">
						<div class="space-y-6 px-4 md:px-8">
							<h3 class="font-moon text-3xl text-white">{t(`musicians.${musician.id}.name`)}</h3>
							<div class="space-y-4">
								<h4 class="font-moon text-lg text-gray-300">
									{t(`musicians.${musician.id}.instrument`)}
								</h4>
								<div class="space-y-4 text-gray-300">
									<p class="mb-10">{t(`musicians.${musician.id}.bio`)}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
