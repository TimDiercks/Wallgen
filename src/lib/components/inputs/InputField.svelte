<script lang="ts">
	import { type InputFieldOptions, InputFieldType } from './InputField'

	export let options: InputFieldOptions
	export let value: number | string
</script>

<div class="input-container">
	{#if options.label}
		<span>{options.label}</span>
	{/if}

	{#if options.type === InputFieldType.number}
		<input class="text-based" type="number" bind:value />
	{:else if options.type === InputFieldType.string}
		<input class="text-based" type="text" bind:value />
	{:else if options.type === InputFieldType.color}
		<input class="color-based" type="color" bind:value />
	{/if}
</div>

<style>
	input {
		max-width: 100px;
	}

	input.text-based {
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
