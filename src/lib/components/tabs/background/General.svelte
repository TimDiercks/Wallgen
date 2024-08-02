<script lang="ts">
	import type { CanvasConfiguration } from '$lib/canvas/canvas'
	import InputField from '../../inputs/InputField.svelte'
	import { InputFieldType } from '../../inputs/InputField'
	import SelectField from '../../inputs/SelectField.svelte'
	import {
		getIdFromPresetSize,
		getPresetFromId,
		preConfiguredDimensions,
	} from '$lib/canvas/dimensions'
	import type { Selection } from '$lib/components/inputs/SelectField'

	export let canvasOptions: CanvasConfiguration

	const updatePreset = (selectedPreset: number) => {
		const preset = getPresetFromId(selectedPreset)
		if (!preset) {
			return
		}
		canvasOptions.dimensions.width = preset.width
		canvasOptions.dimensions.height = preset.height
	}

	const sizePresets: Selection[] = preConfiguredDimensions.map((dimension, i) => ({
		name: `${dimension.width}x${dimension.height}px`,
		value: i,
	}))

	let selectedPreset =
		getIdFromPresetSize(canvasOptions.dimensions.width, canvasOptions.dimensions.height) ?? -1

	$: updatePreset(selectedPreset)

	const backgroundTypes: Selection[] = [
		{
			name: 'Solid',
			value: 0,
		},
		{
			name: 'Gradient',
			value: 1,
		},
	]
</script>

<h3>Wallpaper size</h3>

<div class="wrapper">
	<SelectField
		style="width: 200px"
		bind:value={selectedPreset}
		options={{
			label: 'Presets',
			selections: sizePresets,
		}}
	/>

	<InputField
		bind:value={canvasOptions.dimensions.width}
		options={{
			type: InputFieldType.number,
			min: 100,
			max: 10_000,
			label: 'Width',
		}}
	/>

	<InputField
		bind:value={canvasOptions.dimensions.height}
		options={{
			type: InputFieldType.number,
			min: 100,
			max: 10_000,
			label: 'Height',
		}}
	/>
</div>
<SelectField
	style="width: 200px"
	bind:value={canvasOptions.background.type}
	options={{
		label: 'Background Type',
		selections: backgroundTypes,
	}}
/>

<style>
	.wrapper {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}

	@media only screen and (max-width: 768px) {
		.wrapper {
			flex-direction: columns;
			gap: 1rem;
		}
	}
</style>
