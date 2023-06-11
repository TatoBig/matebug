<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
</script>

<div class="h-screen 2xl:mx-[600px] xl:mx-96 md:mx-40 p-16">
	<h1>CONCEPTOS DE FACTORIZACIÓN</h1>

	<Divider />
	<h2>1. DIFERENCIA DE CUADRADOS</h2>
	<p>
		Sucede cuando tienes una expresión de la forma a² - b², que puede factorizarse como (a + b)(a -
		b):
	</p>
	<h4>Forma algebraica:</h4>
	<p>
		Una diferencia de cuadrados se presenta en la forma de una resta entre dos términos que son
		cuadrados perfectos. La forma general es a^2 - b^2.
	</p>
	<h4>Factores binomiales:</h4>
	<p>
		Una diferencia de cuadrados se puede factorizar como el producto de dos binomios conjugados. Los
		binomios conjugados tienen la misma forma, pero con signos opuestos en el segundo término. La
		factorización de una diferencia de cuadrados es (a + b)(a - b).
	</p>
	<h4>Propiedad del producto de binomios conjugados:</h4>
	<p>
		La multiplicación de dos binomios conjugados siempre da como resultado una diferencia de
		cuadrados. Es decir, (a + b)(a - b) es igual a a^2 - b^2.
	</p>
	<h4>Simplificación de expresiones:</h4>
	<p>
		Las diferencias de cuadrados son útiles para simplificar expresiones algebraicas. Al factorizar
		una diferencia de cuadrados, se puede reducir la complejidad y facilitar el cálculo posterior.
	</p>
	<h4>Utilidad en la resolución de ecuaciones:</h4>
	<p>
		Utilidad en la resolución de ecuaciones: Al identificar una diferencia de cuadrados en una
		ecuación, se puede aplicar la factorización correspondiente para resolverla de manera más
		sencilla.
	</p>
	<h4 class="font-normal">EJEMPLO</h4>
	<Formula math={' x² - 4 = 0'} />
	<h4 class="font-normal">SOLUCION</h4>
	<Formula math={'(x + 2)(x - 2)=0'} />

	<Divider />
	<h2>2. CARACTERISTICAS DE DIFERENCIA DE CUADRADOS</h2>
	<p>
		Las diferencias de cuadrados son expresiones algebraicas que se presentan en la forma a^2 - b^2
		y pueden factorizarse como el producto de dos binomios conjugados. Tienen aplicaciones en la
		simplificación de expresiones y la resolución de ecuaciones, además de estar relacionadas con
		identidades trigonométricas específicas.
	</p>

	<h4 class="font-normal">Ejercicio 1</h4>
	<Formula math={'9a² - 16b⁴=0'} />
	<!-- Esta es la solucion -->
	<h4>Solución</h4>
	<Formula math={'(3a + 4b²)(3a - 4b²)=0'} />
	<!-- Aqui termina -->

	<h4 class="font-normal">Ejercicio 2</h4>
	<Formula math={'16a⁴ - 25b⁶=0'} />
	<!-- Esta es la solucion -->
	<h4>Solución</h4>
	<Formula math={'(4a² + 5b³)(4a² - 5b³)=0'} />
	<!-- Aqui termina -->
</div>
