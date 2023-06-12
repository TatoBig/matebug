<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
</script>

<div class="h-screen 2xl:mx-[600px] xl:mx-96 md:mx-40 p-16">
	<h1>RESOLUCIÓN DE ECUACIONES DIFERENCIALES</h1>
	<div>
        <li><a href="#s1">Ejercicio: verificar</a></li>
        <li><a href="#s2">Comprobar</a></li>
    </div>
	<Divider />

	<h2 id="s1">1. Ejercicio: verificar</h2>
	<p>
		En estos ejercicios solo se busca igualar una expresión en base a la solución, y verificar si
		ésta es válida:
	</p>
	<h4 id="s2">2. Comprobar</h4>
	<Formula math={"y'=3x^2(y^2+1)"} />

	<h4>Corresponde a la siguiente solución</h4>
	<Formula math={'y(x)=tan(x^3+C)'} />

	<Divider />
	<HiddenSolution>
		<h4>Obtener la derivada de la solución</h4>
		<Formula math={"y'(x)=3x^2sec^2(x^3+C)"} />

		<h4>Reemplazar valores</h4>
		<Formula math={'3x^2sec^2(x^3+C)=3x^2(tan^2(x^3+C))+1'} />

		<h4>Verificar si las expresiones son equivalentes</h4>
		<Formula math={'sec^2(x^3+C)=sec^2(x^3+C)'} />
	</HiddenSolution>
</div>
