<script lang="ts">
	let hide = true;
</script>

<div class="w-full flex justify-center mb-4">
	{#if hide}
		<button
			on:click={() => (hide = false)}
			class="border-solid border-2 mb-8 border-gray-300 hover:border-gray-800 p-4 rounded pointer-events-auto transition-colors"
		>
			<p class="m-0 p-0">Revelar solución</p>
		</button>
	{/if}
</div>
<div class={`${hide ? 'hidden max-h-0' : 'block max-h-fit'} transition-all duration-1000 overflow-hidden`}>
	<slot />
</div>
