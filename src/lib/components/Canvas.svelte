<script lang="ts">
	import { onMount } from 'svelte'
	import { fillCanvas, type CanvasConfiguration } from '$lib/canvas/canvas'
	export let configuration: CanvasConfiguration

	let canvas: HTMLCanvasElement

	onMount(() => {
		if (canvas) {
			const canvasContext = canvas.getContext('2d')
			if (canvasContext) {
				fillCanvas(canvasContext, configuration)
			}
		}
	})
</script>

<canvas
	bind:this={canvas}
	width={configuration.dimensions.width}
	height={configuration.dimensions.height}
/>

<style>
	canvas {
		margin-top: 2rem;
		border-radius: 1rem;
		box-shadow: white 0px 0px 10px;
		width: 100%;
		height: 100%;
	}
</style>
