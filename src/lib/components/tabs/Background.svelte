<script lang="ts">
	import { BackgroundTypes } from '$lib/canvas/background'
	import type { CanvasConfiguration } from '$lib/canvas/canvas'
	import FlexCol from '../FlexCol.svelte'
	// import InputField from '../inputs/InputField.svelte'
	// import { InputFieldType } from '../inputs/InputField'
	// import { BackgroundTypes } from '$lib/canvas/background'
	import General from './background/General.svelte'
	import SolidColor from './background/SolidColor.svelte'

	export let canvasOptions: CanvasConfiguration
</script>

<FlexCol style="gap: 2rem">
	<General bind:canvasOptions />

	{#if canvasOptions.background.type === BackgroundTypes.solid}
		<SolidColor bind:canvasOptions />
	{/if}
</FlexCol>
