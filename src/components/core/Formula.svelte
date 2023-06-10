<script lang="ts">
	import Katex from './Katex.svelte';

	export let math: string;
</script>
<div class="p-4 my-4 flex justify-center items-center rounded bg-gray-100">
	<Katex {math} />
</div>
