<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen bg-zinc-900 font-sans text-white">
	<Header />
	<main class="pt-16">
		{@render children()}
	</main>

	<Footer />
</div>
