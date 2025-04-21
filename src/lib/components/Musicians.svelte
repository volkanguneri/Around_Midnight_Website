<script lang="ts">
	interface Musician {
		name: string;
		imageSrc: string;
		bioFr: string;
		bioEn: string;
	}

	const musicians: Musician[] = [
		{
			name: 'Hugues Lassere',
			imageSrc: '/images/hugues.jpg',
			bioFr: `Né à Vannes en Bretagne en 1984, Hugues Lassere grandit au sein d'une famille de musiciens. Il débute son apprentissage musical dès l'âge de 8 ans en étudiant la guitare et le piano classique. À 15 ans, il commence à se produire avec des groupes locaux et fait la découverte du jazz et de la basse électrique. Cependant, c'est la contrebasse qui capte particulièrement son attention et qu'il choisit d'approfondir.

Son parcours musical le conduit au Conservatoire Royal de Bruxelles, puis au CRR de Saint-Maur-des-Fossés, où il se consacre à l'étude de la contrebasse classique pendant 7 ans. Après cette période, Hugues décide de revenir dans sa région d'origine, la Bretagne, où il collabore avec de nombreux musiciens et ensembles. Parmi ses projets, on peut citer l'Orchestre Symphonique de Saint-Malo, le Opus Swing Trio (jazz manouche), Monsieur Roux (chanson), le Erwan Menguy Quartet (musique traditionnelle), le Benjamin Coum Trio (jazz), le Galaad Moutoz Orchestra, ainsi que l'organisation de la jam session du dimanche au Penny Lane à Rennes.`,
			bioEn: `Born in Vannes, Brittany in 1984, Hugues Lassere grew up in a family of musicians. He began his musical journey at the age of 8, studying classical guitar and piano. At 15, he started performing with local bands and discovered jazz and electric bass. However, it was the double bass that particularly captured his attention and became his chosen focus.

His musical path led him to the Royal Conservatory of Brussels, then to the CRR of Saint-Maur-des-Fossés, where he devoted himself to studying classical double bass for 7 years. After this period, Hugues decided to return to his native region, Brittany, where he collaborates with numerous musicians and ensembles. Among his projects are the Saint-Malo Symphony Orchestra, Opus Swing Trio (gypsy jazz), Monsieur Roux (chanson), Erwan Menguy Quartet (traditional music), Benjamin Coum Trio (jazz), Galaad Moutoz Orchestra, as well as organizing the Sunday jam session at Penny Lane in Rennes.`
		},
		{
			name: 'Juliette Chevalier',
			imageSrc: '/images/juliette.jpg',
			bioFr: `Évoluant dans le monde artistique depuis l'enfance, je débute tout naturellement la musique à l'âge de 7 ans au conservatoire de Rennes où j'obtiens mon diplôme de guitare classique. En parallèle de ces études de guitare je commence le chant et intègre rapidement plusieurs formations dans différents styles : Pop, rock, chanson française puis jazz et bossa nova. En 2023, j'obtiens mon diplôme de Jazz vocal (DEM) au conservatoire de Rennes.

Je fais parti actuellement de plusieurs ensemble, Quartet vocal Sweet Poppins, The Strawberry Fields (tribute de The Beatles). Riche de tous ces apprentissages, je cherche pendant plusieurs années des musiciens avec qui créer un projet qui me ressemble, ou ma voix pourra être écoutée et appréciée. C'est à l'été 2025 que je rencontre Arnaud Lacarte avec qui le rêve deviendra réalité.`,
			bioEn: `Growing up in the artistic world since childhood, I naturally began music at the age of 7 at the Rennes Conservatory, where I obtained my classical guitar diploma. Alongside these guitar studies, I started singing and quickly joined several formations in different styles: Pop, rock, French chanson, then jazz and bossa nova. In 2023, I obtained my Jazz Vocal diploma (DEM) at the Rennes Conservatory.

I am currently part of several ensembles, including the Sweet Poppins Vocal Quartet and The Strawberry Fields (Beatles tribute). Enriched by all these learning experiences, I spent several years looking for musicians with whom to create a project that reflects who I am, where my voice could be heard and appreciated. It was in the summer of 2025 that I met Arnaud Lacarte, with whom the dream would become reality.`
		},
		{
			name: 'Arnaud Lacarte',
			imageSrc: '/images/arnaud.jpg',
			bioFr: `C'est à l'été 1996, à l'âge de 13 ans, qu'Arnaud découvre la guitare. Très vite, il intègre une école de musique pour en maîtriser les fondements. Fasciné par les harmonies jazz, il poursuit son apprentissage dans une école spécialisée, puis au Conservatoire de Nantes, affinant peu à peu son style et son langage musical.

Depuis plus de vingt ans, Arnaud se produit sur scène aux côtés de nombreux groupes, explorant de divers styles musicaux. Il partage notamment la scène avec le contrebassiste Hugues Lassere au sein du trio manouche Opus Swing. L'été 2025 marque sa rencontre avec Juliette Chevalier, avec qui il fonde le trio Around Midnight, mêlant élégance, sensibilité et passion pour les musiques aux teintes feutrées.`,
			bioEn: `It was in the summer of 1996, at the age of 13, that Arnaud discovered the guitar. He quickly joined a music school to master its foundations. Fascinated by jazz harmonies, he continued his learning at a specialized school, then at the Nantes Conservatory, gradually refining his style and musical language.

For more than twenty years, Arnaud has performed on stage alongside numerous groups, exploring various musical styles. He notably shares the stage with double bassist Hugues Lassere in the gypsy jazz trio Opus Swing. The summer of 2025 marks his encounter with Juliette Chevalier, with whom he founded the Around Midnight trio, blending elegance, sensitivity, and passion for music with muted tones.`
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
							alt={musician.name}
							class="aspect-[3/4] w-full rounded-lg object-cover shadow-xl"
						/>
					</div>
					<div class="md:w-2/3">
						<div class="space-y-6 px-4 md:px-8">
							<h3 class="font-moon text-3xl text-white">{musician.name}</h3>
							<div class="grid gap-8 md:grid-cols-2">
								<div class="space-y-4">
									<h4 class="font-moon text-lg text-gray-300">Français</h4>
									<div class="space-y-4 text-gray-300">
										{#each musician.bioFr.split('\n\n') as paragraph}
											<p>{paragraph}</p>
										{/each}
									</div>
								</div>
								<div class="space-y-4">
									<h4 class="font-moon text-lg text-gray-300">English</h4>
									<div class="space-y-4 text-gray-300">
										{#each musician.bioEn.split('\n\n') as paragraph}
											<p>{paragraph}</p>
										{/each}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
