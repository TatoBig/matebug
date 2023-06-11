<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
</script>

<div class="class-placeholder">
	<h1>CONCEPTOS DE FACTORIZACIÓN</h1>

	<Divider />
	<h2>1. AGRUPACIÓN:</h2>
	<p>
		Consiste en agrupar términos de una expresión y encontrar un factor común dentro de cada grupo.
	</p>
	<h4>Reorganización de términos:</h4>
	<p>
		La agrupación implica reorganizar los términos de una expresión algebraica de manera que se
		puedan agrupar ciertos términos en común.
	</p>
	<h4>Agrupación por pares:</h4>
	<p>
		Se agrupan los términos de la expresión en pares, de modo que se puedan extraer factores comunes
		de cada par.
	</p>
	<h4>Factorización:</h4>
	<p>
		Una vez que se han agrupado los términos en pares, se busca un factor común en cada par y se
		extrae ese factor común mediante factorización.
	</p>
	<h4>Simplificación de la expresión:</h4>
	<p>
		Al extraer los factores comunes de los pares de términos, se simplifica la expresión algebraica,
		reduciendo su complejidad y facilitando su manipulación.
	</p>
	<h4>Eliminación de términos redundantes:</h4>
	<p>
		En ocasiones, al agrupar términos, se pueden cancelar o eliminar términos redundantes, lo que
		simplifica aún más la expresión.
	</p>
	<h4>Utilidad en la resolución de ecuaciones:</h4>
	<p>
		La agrupación también se puede utilizar para resolver ecuaciones mediante la simplificación de
		la expresión original y la búsqueda de soluciones más sencillas.
	</p>

	<h4 class="font-normal">EJEMPLO</h4>
	<Formula math={'xy + 3x - 2y - 6= 0'} />
	<h4 class="font-normal">SOLUCION</h4>
	<Formula math={'x(y + 3) - 2(y + 3)=0'} />
	<Formula math={' (x - 2)(y + 3)=0'} />

	<Divider />
	<h2>2. CARACTERISTICAS DE AGRUPACIÓN</h2>
	<p>
		La agrupación en álgebra implica reorganizar términos en pares para extraer factores comunes y
		simplificar la expresión. Es una técnica útil para simplificar expresiones y resolver
		ecuaciones.
	</p>

	<h4 class="font-normal">Ejercicio 1</h4>
	<Formula math={'2a³b - 4ab + 5a² - 10 =  0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={'2ab(a² - 2) + 5(a² - 2)=0'} />
		<Formula math={'(2ab + 5)(a² - 2)=0'} />
	</HiddenSolution>

	<h4 class="font-normal">Ejercicio 2</h4>
	<Formula math={'3x² - 6xy + 2x - 4y = 0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={' 3x(x - 2y) + 2(x - 2y) =0'} />
		<Formula math={' (3x + 2)(x - 2y) = 0'} />
	</HiddenSolution>
</div>
