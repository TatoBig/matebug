<script lang="ts">
	import katex from 'katex';
	export let math: string;
	export let small: boolean = false;

	const options = {
		displayMode: true,
		throwOnError: false
	};

	$: katexString = katex.renderToString(math, options);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
		integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class={`${small ? 'text-base' : '2xl:text-2xl text-xl -z-10'}`}>
	{@html katexString}
</div>
