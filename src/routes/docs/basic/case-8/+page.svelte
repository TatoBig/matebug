<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
</script>

<div class="class-placeholder">
	<h1>CONCEPTOS DE FACTORIZACIÓN</h1>
	<div class="jumper">
        <li><a href="#s1">SUMA O DIFERENCIA DE POTENCIAS IGUALES</a></li>
        <li><a href="#s2">CARACTERISTICAS SUMA O DIFERENCIA DE POTENCIAS IGUALES</a></li>
    </div>
	<Divider />
	<h2 id="s1">1. SUMA O DIFERENCIA DE POTENCIAS IGUALES:</h2>
	<p>
		Sucede cuando tienes una expresión de la forma aⁿ + bⁿ o aⁿ - bⁿ, y se factoriza en función de
		una identidad algebraica específica.
	</p>
	<h4>Forma algebraica:</h4>
	<p>
		Una suma o diferencia de potencias iguales se presenta en la forma de una expresión donde los
		exponentes de los términos son iguales. Por ejemplo, a^m + b^m o a^m - b^m, donde "a" y "b" son
		bases y "m" es un exponente común a ambos términos.
	</p>
	<h4>Factorización:</h4>
	<p>
		Una suma o diferencia de potencias iguales puede ser factorizada utilizando las fórmulas
		específicas para cada caso. Para una suma de potencias iguales (a^m + b^m), no hay una
		factorización general. Sin embargo, para una diferencia de potencias iguales (a^m - b^m), se
		puede utilizar la fórmula de factorización de diferencia de cuadrados o la fórmula de
		factorización de diferencia de cubos, dependiendo del valor de "m".
	</p>
	<h4>Propiedad de la factorización:</h4>
	<p>
		La factorización de una suma o diferencia de potencias iguales es única y permite simplificar la
		expresión y reducir su complejidad.
	</p>
	<h4>Relación con identidades algebraicas:</h4>
	<p>
		Las sumas y diferencias de potencias iguales están relacionadas con identidades algebraicas
		específicas, como las identidades de suma y diferencia de cuadrados o las identidades de suma y
		diferencia de cubos. Estas identidades pueden utilizarse para factorizar y simplificar las
		expresiones.
	</p>
	<h4>Aplicaciones:</h4>
	<p>
		Las sumas y diferencias de potencias iguales se utilizan en diversas áreas de las matemáticas y
		las ciencias, especialmente en el álgebra y el cálculo. Son útiles para simplificar expresiones,
		resolver ecuaciones y realizar manipulaciones algebraicas.
	</p>

	<h4 class="font-normal">EJEMPLO</h4>
	<Formula math={' (x² + 4)(x + 2)(x - 2) = 0'} />
	<h4 class="font-normal">SOLUCION</h4>
	<Formula math={'(x² + 4)(x² - 4) =0'} />
	<Formula math={'x⁴ + 16=0'} />

	<Divider />
	<h2 id="s2">2. CARACTERISTICAS SUMA O DIFERENCIA DE POTENCIAS IGUALES</h2>
	<p>
		Las sumas y diferencias de potencias iguales son expresiones algebraicas donde los exponentes de
		los términos son iguales. Se pueden factorizar utilizando fórmulas específicas, y su
		factorización permite simplificar la expresión. Están relacionadas con identidades algebraicas
		específicas y tienen diversas aplicaciones en matemáticas y ciencias.
	</p>

	<h4 class="font-normal">Ejercicio 1</h4>
	<Formula math={'(a - b)(a² + ab + b²)(a³ + b³)=0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={'(a³ - b³)(a³ + b³) =0'} />
		<Formula math={'a⁶ - b⁶ =0'} />
	</HiddenSolution>

	<h4 class="font-normal">Ejercicio 2</h4>
	<Formula small math={' (2x - y)(2x + y)(4x² + 2xy + y²)(16x⁴ + 4x²y² + y⁴) = 0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={'(4x² - y²)(16x⁴ + 4x²y² + y⁴) =0'} />
		<Formula math={' 64x⁶ - y⁶ =0'} />
	</HiddenSolution>
</div>
