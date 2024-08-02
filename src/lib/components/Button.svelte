<script lang="ts">
	import { primary, secondary, font } from '$lib/colors'

	export let text = 'Button'
	export let onClick = () => {}
</script>

<button style="--primary:{primary};--secondary:{secondary};--font:{font}" on:click={onClick}
	>{text}</button
>

<style>
	button {
		padding: 0.5rem 1rem;
		border-radius: 10px;
		font-weight: 700;
		font-size: medium;
		border: none;
		color: var(--font);
		background: var(--primary);
	}

	button:hover {
		box-shadow: var(--secondary) 0px 0px 5px;
	}
</style>
