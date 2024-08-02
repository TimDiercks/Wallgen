<script lang="ts">
	export const style = ''
</script>

<div {style}>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		align-items: center;
	}
</style>
