<script>
	import NavBar from '$lib/components/NavBar.svelte'
</script>

<NavBar />

<div class="content">
	<slot />
</div>

<style>
	@font-face {
		font-family: 'Source Code Pro';
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQtMlrTA.woff2)
			format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304,
			U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
			U+FEFF, U+FFFD;
	}

	:global(*) {
		padding: 0;
		margin: 0;
	}

	:global(body) {
		background-color: #0a1a3b;
		color: #d9d9d9;
		font-family: 'Source Code Pro';
	}

	:global(.content) {
		padding: 0 2rem;
	}

	@media only screen and (max-width: 768px) {
		:global(.content) {
			padding: 0 1rem;
		}
	}
</style>
