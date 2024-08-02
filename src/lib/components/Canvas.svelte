<script lang="ts">
	import { onMount } from 'svelte'
	import { fillCanvas, type CanvasConfiguration } from '$lib/canvas/canvas'
	import Button from './Button.svelte'
	export let configuration: CanvasConfiguration

	let canvas: HTMLCanvasElement

	onMount(() => {
		if (canvas) {
			const canvasContext = canvas.getContext('2d')
			if (canvasContext) {
				fillCanvas(canvasContext, configuration)
			}

			if (canvas.parentElement) {
				canvas.parentElement.style.aspectRatio = `${configuration.dimensions.width / configuration.dimensions.height}`
			}
		}
	})

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
	<Button text={'Save'} onClick={downloadImage} />
</div>

<style>
	canvas {
		border-radius: 1rem;
		box-shadow: white 0px 0px 10px;
		max-width: 100%;
		max-height: 100%;
	}

	.buttonContainer {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>
