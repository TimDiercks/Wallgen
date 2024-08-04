<script lang="ts">
	import { onMount } from 'svelte'
	import { fillCanvas, type CanvasConfiguration } from '$lib/canvas/canvas'
	import Button from './inputs/Button.svelte'
	export let configuration: CanvasConfiguration

	let canvas: HTMLCanvasElement

	onMount(() => {
		updateCanvas(canvas, configuration)
	})

	const updateCanvas = (canvas: HTMLCanvasElement, configuration: CanvasConfiguration) => {
		if (canvas) {
			const canvasContext = canvas.getContext('2d')
			if (canvasContext) {
				fillCanvas(canvasContext, configuration)
			}

			if (canvas.parentElement) {
				canvas.parentElement.style.aspectRatio = `${configuration.dimensions.width / configuration.dimensions.height}`
			}
		}

		// if (browser) {
		// 	const configString = configToString(configuration)
		// 	window.history.replaceState(
		// 		{},
		// 		'null',
		// 		window.location.href.split('?')[0] + `?config=${configString}`,
		// 	)
		// }
	}

	$: updateCanvas(canvas, configuration)

	const downloadImage = () => {
		if (canvas) {
			const canvasUrl = canvas.toDataURL()

			const downloadButton = document.createElement('a')
			downloadButton.href = canvasUrl
			downloadButton.download = 'wallpaper.png'
			downloadButton.click()
			downloadButton.remove()
		}
	}
</script>

<canvas
	bind:this={canvas}
	width={configuration.dimensions.width}
	height={configuration.dimensions.height}
/>

<div class="buttonContainer">
	<Button text={'Refresh'} onClick={() => updateCanvas(canvas, configuration)} />
	<Button text={'Save'} onClick={downloadImage} />
</div>

<style>
	canvas {
		background-color: black;
		border-radius: 1rem;
		box-shadow: white 0px 0px 10px;
		max-width: 100%;
		max-height: 100%;
	}

	.buttonContainer {
		display: flex;
		gap: 0.5rem;
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>
