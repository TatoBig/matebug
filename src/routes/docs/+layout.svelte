<script>
	import Drawer from "@components/layout/Drawer.svelte";
	import Footer from "@components/layout/Footer.svelte";
	import Header from "@components/layout/Header.svelte";
</script>

<Header />

<div class="flex">
	<Drawer />
	<main>
		<slot />
	</main>
</div>



<Footer/>

