<script lang="ts">
	import { onMount } from 'svelte'
	export let width = 1920
	export let height = 1080

	let canvas: HTMLCanvasElement

	onMount(() => {
		if (canvas) {
			const canvasContext = canvas.getContext('2d')
			if (canvasContext) {
				canvasContext.font = '120px Source Code Pro'
				canvasContext.fillStyle = 'white'
				canvasContext.textAlign = 'center'
				canvasContext.fillText('Working Canvas!', width / 2, height / 2)
			}
		}
	})
</script>

<canvas bind:this={canvas} {width} {height} />

<style>
	canvas {
		margin-top: 2rem;
		border-radius: 1rem;
		box-shadow: white 0px 0px 10px;
		width: 80%;
	}
</style>
