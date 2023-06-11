<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
</script>

<div class="class-placeholder">
	<h1>CONCEPTOS DE FACTORIZACIÓN</h1>
	<div class="jumper">
		<li><a href="#s1">FACTOR COMÚN</a></li>
		<li><a href="#s2">CARACTERISTICAS DE FACTOR COMÚN</a></li>
	</div>
	<Divider />
	<h2 id="s1">1. FACTOR COMÚN</h2>
	<p>
		Este caso se aplica cuando hay un factor que se repite en todos los términos de una expresión:
	</p>
	<h4>Aparición en múltiples términos:</h4>
	<p>
		Un factor común es aquel que aparece en dos o más términos de una expresión algebraica. Puede
		ser un número, una variable o una combinación de ambos.
	</p>
	<h4>Simplificación:</h4>
	<p>
		Al factorizar utilizando un factor común, se simplifica la expresión al extraer el factor común
		y dividir cada término por él. Esto ayuda a simplificar la expresión y reducir la complejidad.
	</p>
	<h4>Flexibilidad:</h4>
	<p>
		Puede haber más de un factor común en una expresión algebraica. En este caso, se puede extraer
		cada factor común por separado y simplificar la expresión aún más.
	</p>
	<h4>Utilidad en la resolución de ecuaciones:</h4>
	<p>
		En el proceso de resolución de ecuaciones, identificar y extraer factores comunes puede ser útil
		para simplificar la expresión y facilitar la obtención de soluciones.
	</p>

	<Formula math={'2x + 4xy = 0'} />
	<Formula math={'2x(1 + 2y)=0'} />

	<Divider />
	<h2 id="s2">2. CARACTERISTICAS DE FACTOR COMÚN</h2>
	<p>
		Una característica clave de un factor común es que es un término que se puede dividir entre dos
		o más términos algebraicos
	</p>
	<p>
		Un factor común es un término o una combinación de términos que aparece en varios términos de
		una expresión algebraica. Al extraer el factor común, se simplifica la expresión y se facilita
		el trabajo con ella.
	</p>
	<h4 class="font-normal">Ejercicio 1</h4>
	<Formula math={'3a^²-6ab =0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={'3a(a-2b)=0'} />
	</HiddenSolution>

	<h4 class="font-normal">Ejercicio 2</h4>
	<Formula math={'5c+10d=0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={'5(c+2d)=0'} />
	</HiddenSolution>
</div>
