<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
</script>

<div class="class-placeholder">
	<h1>CONCEPTOS DE FACTORIZACIÓN</h1>
	<div class="jumper">
        <li><a href="#s1">TRINOMIO DE LA FORMA x² + bx + c</a></li>
        <li><a href="#s2">CARACTERISTICAS DE TRINOMIO DE LA FORMA x² + bx + c </a></li>
    </div>
	<Divider />
	<h2 id="s1">1. TRINOMIO DE LA FORMA x² + bx + c:</h2>
	<p>
		En este caso, se busca encontrar dos factores binomios que, al multiplicarse, den el trinomio.
	</p>
	<h4>Grado y términos:</h4>
	<p>
		Un trinomio de la forma x² + bx + c es de grado 2, ya que el término de mayor grado es x². Tiene
		tres términos: el término cuadrado (x²), el término lineal (bx) y el término constante (c).
	</p>
	<h4>Coeficientes:</h4>
	<p>
		El coeficiente del término cuadrado es siempre 1, ya que la forma del trinomio es x² + bx + c.
		El coeficiente del término lineal es b, y el coeficiente del término constante es c.
	</p>
	<h4>Factorización:</h4>
	<p>
		Un trinomio de esta forma se puede factorizar de diferentes maneras, dependiendo de los valores
		de b y c. Puede factorizarse utilizando técnicas como factorización por agrupación,
		factorización cuadrada, factorización por descomposición en factores primos, entre otras.
	</p>
	<h4>Propiedad de la factorización:</h4>
	<p>
		Un trinomio cuadrado perfecto puede factorizarse como el producto de dos binomios idénticos o
		conjugados. Por ejemplo, (a + b)^2 se factoriza como (a + b)(a + b), y (a - b)^2 se factoriza
		como (a - b)(a - b).
	</p>
	<h4>Discusión de las soluciones:</h4>
	<p>
		Al analizar las características del trinomio, se puede determinar si tiene soluciones reales,
		imaginarias o no tiene soluciones. Esto se hace a través del discriminante, que es la parte bajo
		la raíz cuadrada en la fórmula cuadrática. El discriminante se calcula como b² - 4ac, y su valor
		determina la naturaleza de las soluciones.
	</p>
	<h4>Soluciones y raíces:</h4>
	<p>
		Si el trinomio se factoriza, las soluciones o raíces del trinomio se pueden obtener encontrando
		los valores de x que hacen que cada factor sea igual a cero. Estos valores representan los
		puntos donde el trinomio se cruza con el eje x
	</p>
	<h4>Aplicaciones:</h4>
	<p>
		Los trinomios de esta forma son comunes en problemas que involucran áreas, volúmenes y otros
		conceptos matemáticos. También se utilizan en la resolución de ecuaciones cuadráticas y en el
		estudio de gráficas de funciones cuadráticas.
	</p>
	<h4 class="font-normal">EJEMPLO</h4>
	<Formula math={'x² + 5x + 6 = 0'} />
	<h4 class="font-normal">SOLUCION</h4>
	<Formula math={'(x + 2)(x + 3)=0'} />

	<Divider />
	<h2 id="s2">2. CARACTERISTICAS DE TRINOMIO DE LA FORMA x² + bx + c </h2>
	<p>
		Un trinomio de la forma x² + bx + c es de grado 2 y consta de un término cuadrado, un término
		lineal y un término constante. Se puede factorizar de diferentes maneras y se utiliza en la
		resolución de ecuaciones cuadráticas y en problemas matemáticos relacionados con áreas y
		volúmenes.
	</p>

	<h4 class="font-normal">Ejercicio 1</h4>
	<Formula math={'x² + 7x + 10 = 0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={'(x + 2)(x + 5)=0'} />
	</HiddenSolution>

	<h4 class="font-normal">Ejercicio 2</h4>
	<Formula math={'x² - 9x + 20 = 0'} />
	<HiddenSolution>
		<h4>Solución</h4>
		<Formula math={'(x - 4)(x - 5)=0'} />
	</HiddenSolution>
</div>
