<script lang="ts">
	import Canvas from '$lib/components/Canvas.svelte'
	import { defaultConfiguration } from '$lib/canvas/canvas'

	const canvasOptions = defaultConfiguration()
</script>

<h1>Welcome to Wallgen!</h1>

<div class="canvasContainer">
	<Canvas configuration={canvasOptions} />
</div>

<style>
	.canvasContainer {
		position: absolute;
		width: 50%;
		right: 1rem;
		bottom: 1rem;
	}
</style>
