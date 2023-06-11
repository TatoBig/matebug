<script lang="ts">
	import Katex from './Katex.svelte';

	export let math: string;
</script>
<div class="my-4 flex justify-center items-center rounded bg-gray-100 hover:bg-gray-200 transition-colors">
	<Katex {math} />
</div>
