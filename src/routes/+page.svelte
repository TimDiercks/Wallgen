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
		display: flex;
		position: absolute;
		max-width: 20%;
		max-height: 80%;
		right: 1rem;
		bottom: 1rem;
		transition: max-width 500ms ease-in-out;
	}
	.canvasContainer:hover {
		max-width: 90%;
	}
</style>
