<script lang="ts">
	import type { CanvasConfiguration } from '$lib/canvas/canvas'
	import { primary, font } from '$lib/colors'
	import type { TabItem } from './Tabs'

	export let items: TabItem[] = []
	export let activeTabValue = 1

	export let canvasOptions: CanvasConfiguration

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue)
</script>

<ul>
	{#each items as item}
		<li class={activeTabValue === item.value ? 'active' : ''}>
			<button style="--color: {font};--primary:{primary}" on:click={handleClick(item.value)}
				>{item.label}</button
			>
		</li>
	{/each}
</ul>
{#each items as item}
	{#if activeTabValue === item.value}
		<div class="box">
			<svelte:component this={item.component} bind:canvasOptions />
		</div>
	{/if}
{/each}

<style>
	.box {
		border-radius: 10px;
		padding: 0.5rem 1rem;
		background-color: #585858;
		box-shadow: white 0 0 10px;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		padding-left: 10px;
		margin-bottom: 0;
		list-style: none;
	}
	li {
		margin-bottom: -1px;
	}

	button {
		background-color: #585858;
		border: 2px solid transparent;
		border-radius: 0.25rem 0.25rem 0.1rem 0.1rem;
		display: block;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	li.active > button {
		color: var(--primary);
		border: 2px solid;
		border-color: var(--primary) var(--primary) #585858 var(--primary);
	}
</style>
