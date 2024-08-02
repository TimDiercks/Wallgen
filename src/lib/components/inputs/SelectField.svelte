<script lang="ts">
	import type { SelectFieldOptions } from './SelectField'

	export let value: string | number
	export let options: SelectFieldOptions
	export let style: string = ''
</script>

<div {style} class="input-container">
	{#if options.label}
		<span>{options.label}</span>
	{/if}

	<select bind:value>
		{#each options.selections as option}
			<option value={option.value}>
				{option.name}
			</option>
		{/each}
	</select>
</div>

<style>
	select {
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 10px;
		font-size: 14px;
		background-color: #1d1d1d;
	}

	.input-container {
		display: flex;
		flex-direction: column;
		width: inherit;
	}

	.input-container > span {
		font-size: 16px;
		margin-left: 1rem;
	}
</style>
