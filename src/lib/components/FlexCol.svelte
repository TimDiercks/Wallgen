<script lang="ts">
	export let style: string = ''
</script>

<div {style}>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
