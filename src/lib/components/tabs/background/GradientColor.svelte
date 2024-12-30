<script lang="ts">
	import { BackgroundTypes } from '$lib/canvas/background'
	import type { CanvasConfiguration } from '$lib/canvas/canvas'
	import FlexCol from '$lib/components/FlexCol.svelte'
	import type { Selection } from '$lib/components/inputs/SelectField'
	import SelectField from '$lib/components/inputs/SelectField.svelte'

	export let canvasOptions: CanvasConfiguration

	const gradientTypes: Selection[] = [
		{
			name: 'Linear',
			value: 0,
		},
		{
			name: 'Radial',
			value: 1,
		},
	]
</script>

<FlexCol>
	<h3>Background Color</h3>

	{#if canvasOptions.background.type === BackgroundTypes.gradient}
		<SelectField
			style="width: 200px"
			bind:value={canvasOptions.background.gradient.type}
			options={{
				label: 'Gradient Type',
				selections: gradientTypes,
			}}
		/>

		<!-- Array selection for colors -->
		<!--  -->
	{/if}
</FlexCol>
