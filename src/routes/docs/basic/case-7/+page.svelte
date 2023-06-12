<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
</script>

<div class="h-screen 2xl:mx-[600px] xl:mx-96 md:mx-40 p-16">
	<h1>CONCEPTOS DE FACTORIZACIÓN</h1>
	<div>
        <li><a href="#s1">DIFERENCIA DE CUBOS</a></li>
        <li><a href="#s2">CARACTERISTICAS DIFERENCIA DE CUBOS</a></li>
    </div>
	<Divider />
	<h2 id="s1">1. DIFERENCIA DE CUBOS:</h2>
	<p>
		Se aplica cuando tienes una expresión de la forma a³ - b³, que se factoriza como (a - b)(a² + ab
		+ b²).
	</p>
	<h4>Forma algebraica:</h4>
	<p>
		Una diferencia de cubos se presenta en la forma de una resta entre dos términos que son cubos
		perfectos. La forma general es a^3 - b^3.
	</p>
	<h4>Factorización:</h4>
	<p>
		Una diferencia de cubos puede ser factorizada utilizando la fórmula para la factorización de
		diferencia de cubos, que es (a - b)(a^2 + ab + b^2).
	</p>
	<h4>Términos cúbicos:</h4>
	<p>
		En una diferencia de cubos, tanto el primer término (a^3) como el segundo término (b^3) son
		cubos perfectos.
	</p>
	<h4>Signo:</h4>
	<p>
		La diferencia de cubos se caracteriza por tener un signo negativo (-) entre los dos términos.
		Esto indica que se está restando un cubo del otro.
	</p>
	<h4>Propiedad de la factorización:</h4>
	<p>
		La factorización de una diferencia de cubos es única y se puede utilizar para simplificar la
		expresión y reducir su complejidad.
	</p>
	<h4>Aplicaciones:</h4>
	<p>
		Las diferencias de cubos son útiles en matemáticas y ciencias para simplificar expresiones
		algebraicas y resolver ecuaciones cúbicas. También pueden ser utilizadas en el cálculo de
		volúmenes y áreas en problemas de geometría.
	</p>

	<h4 class="font-normal">EJEMPLO</h4>
	<Formula math={'(2x - 3)(4x² + 6x + 9) = 0'} />
	<h4 class="font-normal">SOLUCION</h4>
	<Formula math={'8x³ - 27=0'} />

	<Divider />
	<h2 id="s2">2. CARACTERISTICAS DIFERENCIA DE CUBOS</h2>
	<p>
		Una diferencia de cubos es una expresión algebraica en la forma a^3 - b^3, donde ambos términos
		son cubos perfectos. Se puede factorizar utilizando la fórmula de diferencia de cubos, y su
		factorización es única. Las diferencias de cubos son útiles para simplificar expresiones y
		resolver ecuaciones cúbicas en diversas aplicaciones matemáticas y científicas.
	</p>

	<h4 class="font-normal">Ejercicio 1</h4>
	<Formula math={'(3y - 4)(9y² + 12y + 16) =  0'} />
	<!-- Esta es la solucion -->
	<h4>Solución</h4>
	<Formula math={'27y³ - 64=0'} />
	<!-- Aqui termine -->

	<h4 class="font-normal">Ejercicio 2</h4>
	<Formula math={' (5a - 4b)(25a² + 20ab + 16b²) = 0'} />
	<!-- Esta es la solucion -->
	<h4>Solución</h4>
	<Formula math={'  125a³ - 64b³ =0'} />
	<!-- Aqui termine -->
</div>
