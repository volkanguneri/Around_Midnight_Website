<script lang="ts">
	import { onMount } from 'svelte';
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
						Jazz & Blues pour danser
					</h2>
					<div class="text-xs leading-tight text-gray-100 md:text-lg md:leading-relaxed">
						<p>
							Envie d'une soirée où la musique vous fait vibrer autant que la danse ? Around
							Midnight est le trio idéal pour donner vie à vos événements blues.
						</p>
						<p>
							Avec un répertoire éclectique mêlant Amy Winehouse, David Bowie, Ella Fitzgerald et
							bien d'autres, le groupe tisse un univers à la fois envoûtant et énergique.
						</p>
						<p>
							La voix intense et expressive de Juliette Chevalier, portée par le jeu virtuose
							d'Arnaud Lacarte à la guitare et les Hugues Lasserre à la contrebasse, crée une
							ambiance irrésistible.
						</p>
						<p>
							Entre joie, intensité et émotion, laissez-vous emporter par la profondeur d'une
							musique vivante, faite pour être partagée pleinement.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
