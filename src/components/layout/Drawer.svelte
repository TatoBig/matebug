<script>
	import ArrowIcon from '@components/core/ArrowIcon.svelte';
	import MenuIcon from '@components/core/MenuIcon.svelte';

	let innerWidth = 0;

	let openDrawer = false;

	$: console.log(openDrawer);

	$: if (innerWidth > 1024) {
		openDrawer = false;
	} else {
		openDrawer = true;
	}
</script>

<svelte:window bind:innerWidth />
<button
	on:click={() => (openDrawer = false)}
	class="marker:text-white p-5 focus:outline-none h-16 w-16 focus:bg-black grid-flow-col bg-yellow-500 absolute top-2 left-2 z-10 lg:hidden"
>
	<MenuIcon />
</button>
<div
	class={`${
		openDrawer ? '-translate-x-full' : 'translate-x-0'
	} bg-white xl:w-80 lg:w-64 w-80 overflow-y-scroll lg:mt-20 space-y-6 py-2 left-0 pb-32 transition duration-200 ease-in-out absolute h-screen z-[9999]`}
>
	<div class="text-black flex items-center pl-6 justify-between">
		<a href="/" class="lg:mt-4"><span class="text-2xl font-extrabold lg:hidden">Imagen</span></a>
		<button
			class="h-16 w-16 flex justify-center items-center lg:hidden"
			on:click={() => (openDrawer = true)}
		>
			<div class="h-8 w-8">
				<ArrowIcon />
			</div>
		</button>
	</div>
	<nav>
		<h4 class="mt-2 pl-4 py-1">Matemáticas básicas</h4>
		<a href="/" class="drawer-link"> Mate 1 </a>
		<h4 class="mt-2 pl-4 py-1">Casos de Factorización</h4>
		<a href="/docs/basic/case-1" class="drawer-link"> Factor común </a>
		<a href="/docs/basic/case-2" class="drawer-link"> Diferencia de cuadrados </a>
		<a href="/docs/basic/case-3" class="drawer-link"> Trinomio cuadrado perfecto </a>
		<a href="/docs/basic/case-4" class="drawer-link"> Trinomio de la forma x² + bx + c </a>
		<a href="/docs/basic/case-5" class="drawer-link"> Trinomio de la forma ax² + bx + c </a>
		<a href="/docs/basic/case-6" class="drawer-link"> Agrupación </a>
		<a href="/docs/basic/case-7" class="drawer-link"> Diferencia de cubos </a>
		<a href="/docs/basic/case-8" class="drawer-link">
			Suma o diferencia de potencias <br /> iguales
		</a>
		<a href="/docs/basic/case-9" class="drawer-link"> Cuadrado de binomio </a>
		<a href="/docs/basic/case-10" class="drawer-link"> Diferencia de dos cuadrados </a>

		<h4 class="mt-2 pl-4 py-1">Ecuaciones diferenciales</h4>
		<a href="/docs/advanced/concepts" class="drawer-link"> Conceptos básicos </a>
		<a href="/docs/advanced/resolutions" class="drawer-link"> Resoluciones </a>
		<a href="/docs/advanced/separable" class="drawer-link"> Ecuaciones separadables </a>

		<h4 class="mt-2 pl-4 py-1">Aplicaciones de ecuaciones diferenciales</h4>
		<a href="/docs/advanced/population-growth" class="drawer-link"> Crecimiento poblacional </a>
		<a href="/docs/advanced/radioactive-decay" class="drawer-link"> Desintegración radiactiva </a>
		<a href="/docs/advanced/newtons-law" class="drawer-link"> Ley de enfriamiento de Newton </a>
		<a href="/docs/advanced/compound-interest" class="drawer-link"> Interés compuesto </a>
		<a href="/docs/advanced/torricellis-law" class="drawer-link"> Ley de Torricelli </a>
		<a href="/docs/advanced/medical-disposal" class="drawer-link">
			Eliminación de un medicamento
		</a>

		<h4 class="mt-2 pl-4 py-1">Ecuaciones exactas</h4>
		<a href="/docs/advanced/exact-equactions" class="drawer-link"> Conceptos básicos </a>
	</nav>
</div>
