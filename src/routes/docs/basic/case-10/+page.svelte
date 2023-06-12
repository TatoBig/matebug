<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
</script>

<div class="class-placeholder">
	<h1>CONCEPTOS DE FACTORIZACIÓN</h1>

	<Divider />
	<h2>1. DIFERENCIA DE DOS CUADRADOS:</h2>
	<p>
		Sucede cuando tienes una expresión de la forma a⁴ - b⁴, que se factoriza utilizando la identidad
		algebraica correspondiente.
	</p>
	<h4>Forma algebraica:</h4>
	<p>
		La diferencia de dos cuadrados se presenta en la forma de una expresión donde se resta el
		cuadrado de un término del cuadrado de otro término. Por ejemplo, a^2 - b^2.
	</p>
	<h4>Términos cuadrados:</h4>
	<p>
		En la diferencia de dos cuadrados, hay dos términos cuadrados, uno correspondiente al primer
		término y otro correspondiente al segundo término. Por ejemplo, en a^2 - b^2, los términos
		cuadrados son a^2 y b^2.
	</p>
	<h4>Signo:</h4>
	<p>
		La diferencia de dos cuadrados se caracteriza por tener un signo de resta (-) entre los dos
		términos. Esto indica que se está restando el cuadrado de un término del cuadrado de otro
		término.
	</p>
	<h4>Propiedad de la factorización:</h4>
	<p>
		La diferencia de dos cuadrados se puede factorizar utilizando la fórmula de diferencia de
		cuadrados, que es (a + b)(a - b). Esta fórmula permite simplificar y factorizar la expresión.
	</p>
	<h4>Aplicaciones:</h4>
	<p>
		La diferencia de dos cuadrados se utiliza en álgebra para simplificar expresiones y factorizar
		polinomios. También es útil en áreas como el cálculo y la geometría, donde se pueden encontrar
		diferencias de cuadrados en problemas de áreas o volúmenes.
	</p>
	<h4>Relación con identidades algebraicas:</h4>
	<p>
		La diferencia de dos cuadrados está relacionada con la identidad algebraica conocida como la
		identidad de diferencia de cuadrados. Esta identidad establece cómo factorizar y simplificar la
		diferencia de dos cuadrados utilizando la fórmula mencionada anteriormente.
	</p>

	<h4 class="font-normal">EJEMPLO</h4>
	<Formula math={'(x² + 4)(x + 2)(x - 2)= 0'} />
	<h4 class="font-normal">SOLUCION</h4>
	<Formula math={' (x² + 4)(x² - 4)=0'} />
	<Formula math={'x⁴ - 16=0'} />

	<Divider />
	<h2>2. CARACTERISTICAS DE DIFERENCIA DE DOS CUADRADOS</h2>
	<p>
		La diferencia de dos cuadrados es una expresión algebraica en la forma a^2 - b^2, donde se resta
		el cuadrado de un término del cuadrado de otro término. Se puede factorizar utilizando la
		fórmula de diferencia de cuadrados, y su factorización permite simplificar y factorizar la
		expresión. La diferencia de dos cuadrados se aplica en álgebra y otras áreas de las matemáticas,
		y está relacionada con la identidad de diferencia de cuadrados.
	</p>

	<h4 class="font-normal">Ejercicio 1</h4>
	<Formula math={'(2y + 3z)(2y - 3z)(4y² - 9z²) =  0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={' (4y² + 9z²)(4y² - 9z²)=0'} />
		<Formula math={' 16y⁴ - 81z⁴=0'} />
	</HiddenSolution>

	<h4 class="font-normal">Ejercicio 2</h4>
	<Formula math={'(√5a⁴ + 2√2b⁴)(√5a⁴ - 2√2b⁴)= 0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={' (5a⁴ + 8b⁴)(5a⁴ - 8b⁴)=0'} />
		<Formula math={'25a⁸ - 64b⁸=0'} />
	</HiddenSolution>
</div>
