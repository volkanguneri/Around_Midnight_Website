<script lang="ts">
	const videos = [
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
