<script lang="ts">
	import Canvas from '$lib/components/Canvas.svelte'
	import { defaultConfiguration } from '$lib/canvas/canvas'
	import Tabs from '$lib/components/tabs/Tabs.svelte'
	import type { TabItem } from '$lib/components/tabs/Tabs'
	import Background from '$lib/components/tabs/Background.svelte'

	// export let data: { config: CanvasConfiguration } // gets data from ./+page.ts

	let canvasOptions = defaultConfiguration()

	const tabs: TabItem[] = [
		{
			label: 'Background',
			value: 1,
			component: Background,
		},
	]
</script>

<Tabs items={tabs} bind:canvasOptions />

<div class={'canvasContainer'}>
	<Canvas bind:configuration={canvasOptions} />
</div>

<style>
	.canvasContainer {
		display: flex;
		position: absolute;
		min-width: 300px;
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
