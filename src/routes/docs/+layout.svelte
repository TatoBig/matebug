<script>
	import Drawer from '@components/layout/Drawer.svelte';
	import Footer from '@components/layout/Footer.svelte';
	import Header from '@components/layout/Header.svelte';
</script>

<div class="flex flex-col h-screen justify-between">
	<div>
		<div class="mb-20">
			<Header />
		</div>
		<div class="fixed top-0">
			<Drawer />
		</div>
		<main class="w-full flex justify-center md:pt-20 pt-8 pb-32">
			<div class="2xl:w-1/3 xl:w-2/5 md:w-1/2 w-4/5">
				<slot />
			</div>
			<div class="w-px bg-primary h-screen ml-4 lg:block hidden"/>
		</main>
	</div>
	<div>
		<Footer />
	</div>
</div>
