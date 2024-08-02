<script lang="ts">
	export const style = ''
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
