<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
</script>

<div class="class-placeholder">
	<h1>CONCEPTOS DE FACTORIZACIÓN</h1>
	<div>
        <li><a href="#s1">Factor Común</a></li>
        <li><a href="#s2">CARACTERISTICAS DE CUADRADO DE UN BINOMIO</a></li>
    </div>
	<Divider />
	<h2 id="s1">1. CUADRADO DE BINOMIO:</h2>
	<p>
		Se aplica cuando tienes una expresión de la forma (a + b)² o (a - b)², y se factoriza utilizando
		la identidad algebraica correspondiente.
	</p>
	<h4>Forma algebraica:</h4>
	<p>
		El cuadrado de un binomio se presenta en la forma de una expresión elevada al cuadrado, donde un
		binomio está multiplicado por sí mismo. Por ejemplo, (a + b)^2 o (x - y)^2.
	</p>
	<h4>Términos cuadrados:</h4>
	<p>
		En el cuadrado de un binomio, hay dos términos cuadrados, uno en el primer término del binomio y
		otro en el segundo término del binomio. Por ejemplo, en (a + b)^2, los términos cuadrados son
		a^2 y b^2.
	</p>
	<h4>Término cruzado:</h4>
	<p>
		En el cuadrado de un binomio, hay un término cruzado que resulta de la multiplicación de los
		términos del primer y segundo término del binomio. Por ejemplo, en (a + b)^2, el término cruzado
		es 2ab.
	</p>
	<h4>Propiedad de la factorización:</h4>
	<p>
		El cuadrado de un binomio se puede factorizar utilizando la fórmula de cuadrado de binomio, que
		es (a + b)^2 = a^2 + 2ab + b^2. Esta fórmula proporciona una forma de simplificar y factorizar
		la expresión.
	</p>
	<h4>Aplicaciones:</h4>
	<p>
		El cuadrado de un binomio es una expresión algebraica común que se utiliza en diversas áreas de
		las matemáticas, como el álgebra y el cálculo. Se aplica en la simplificación de expresiones, la
		resolución de ecuaciones y la manipulación algebraica.
	</p>
	<h4>Relación con identidades algebraicas:</h4>
	<p>
		El cuadrado de un binomio está relacionado con la identidad algebraica conocida como la
		identidad de cuadrado de binomio, que establece cómo expandir y simplificar el cuadrado de un
		binomio. Esta identidad es útil en la factorización y simplificación de expresiones.
	</p>

	<h4 class="font-normal">EJEMPLO</h4>
	<Formula math={'  x² + 4x + 4 = 0'} />
	<h4 class="font-normal">SOLUCION</h4>
	<Formula math={' (x + 2)²=0'} />

	<Divider />
	<h2 id="s2">2. CARACTERISTICAS DE CUADRADO DE UN BINOMIO</h2>
	<p>
		El cuadrado de un binomio es una expresión algebraica que resulta de multiplicar un binomio por
		sí mismo. Tiene términos cuadrados, un término cruzado y se puede factorizar utilizando la
		fórmula de cuadrado de binomio. El cuadrado de un binomio se utiliza en diversas aplicaciones
		matemáticas y está relacionado con identidades algebraicas específicas.
	</p>

	<h4 class="font-normal">Ejercicio 1</h4>
	<Formula math={'9y² - 30y + 25 =  0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={' (3y - 5)² =0'} />
	</HiddenSolution>

	<h4 class="font-normal">Ejercicio 2</h4>
	<Formula math={' 4a² + 12ab + 9b² = 0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={' (2a + 3b)² =0'} />
	</HiddenSolution>
</div>
