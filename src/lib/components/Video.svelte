<script lang="ts">
	const videos = [
		{
			id: 'sg6SeqeDu84',
			title: 'Around Midnight - Performance 1'
		},
		{
			id: 'R7KdJwApM6c',
			title: 'Around Midnight - Performance 2'
		},
		{
			id: 'JmfZPyS6g0Y',
			title: 'Around Midnight - Performance 3'
		},
		{
			id: 'Z4QIOxXzsSU',
			title: 'Around Midnight - Performance 4'
		},
		{
			id: 'SJvCj6vMY5E',
			title: 'Around Midnight - Performance 5'
		},
		{
			id: 'Rvmab45fgeg',
			title: 'Around Midnight - Performance 6'
		},
		{
			id: 'Mn6HL3cAN1s',
			title: 'Around Midnight - Performance 7'
		},
		{
			id: 'flbVSP-csX8',
			title: 'Around Midnight - Performance 8'
		}
	];
</script>

<section class="relative bg-black py-24" id="videos">
	<div class="container mx-auto px-4">
		<h2 class="font-moon mb-16 text-center text-4xl text-white md:text-5xl">Vidéos</h2>
		<div class="grid gap-8 md:grid-cols-2">
			{#each videos as video}
				<div class="aspect-video w-full overflow-hidden rounded-lg">
					<iframe
						class="h-full w-full"
						src="https://www.youtube.com/embed/{video.id}"
						title={video.title}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			{/each}
		</div>
	</div>
</section>
