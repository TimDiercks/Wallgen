<script lang="ts">
	import { BackgroundTypes } from '$lib/canvas/background'
	import type { CanvasConfiguration } from '$lib/canvas/canvas'
	import FlexCol from '$lib/components/FlexCol.svelte'
	import FlexRow from '$lib/components/FlexRow.svelte'
	import { InputFieldType } from '$lib/components/inputs/InputField'
	import InputField from '$lib/components/inputs/InputField.svelte'

	export let canvasOptions: CanvasConfiguration
</script>

<FlexCol>
	<h3>Background Color</h3>

	{#if canvasOptions.background.type === BackgroundTypes.solid}
		<FlexRow>
			<InputField
				style="width: 200px"
				options={{ type: InputFieldType.string, label: 'Color' }}
				bind:value={canvasOptions.background.color}
			/>
			<InputField
				style="margin-top: 20px;"
				options={{ type: InputFieldType.color }}
				bind:value={canvasOptions.background.color}
			/>
		</FlexRow>
	{/if}
</FlexCol>
