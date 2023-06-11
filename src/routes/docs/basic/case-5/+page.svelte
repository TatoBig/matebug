<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
</script>

<div class="h-screen 2xl:mx-[600px] xl:mx-96 md:mx-40 p-16">
	<h1>CONCEPTOS DE FACTORIZACIÓN</h1>

	<Divider />
	<h2>1. TRINOMIO DE LA FORMA ax² + bx + c:</h2>
	<p>
		Similar al caso anterior, pero ahora se deben encontrar dos factores binomios donde los
		coeficientes a, b y c se ajusten correctamente.
	</p>
	<h4>Grado y términos:</h4>
	<p>
		Un trinomio de esta forma es de grado 2, ya que el término de mayor grado es ax². Tiene tres
		términos: el término cuadrado (ax²), el término lineal (bx) y el término constante (c).
	</p>
	<h4>Coeficientes:</h4>
	<p>
		"a", "b" y "c" son los coeficientes reales del trinomio. El coeficiente "a" no puede ser igual a
		cero, ya que eso convertiría al trinomio en una expresión de grado menor.
	</p>
	<h4>Factorización:</h4>
	<p>
		Un trinomio de esta forma puede factorizarse utilizando técnicas como factorización cuadrada,
		factorización por agrupación, factorización por descomposición en factores primos o utilizando
		la fórmula cuadrática, dependiendo de los valores de "a", "b" y "c".
	</p>
	<h4>Propiedad de la factorización:</h4>
	<p>
		Un trinomio cuadrado perfecto puede factorizarse como el producto de dos binomios idénticos o
		conjugados. Por ejemplo, (a + b)^2 se factoriza como (a + b)(a + b), y (a - b)^2 se factoriza
		como (a - b)(a - b).
	</p>
	<h4>Discriminante y naturaleza de las soluciones:</h4>
	<p>
		Al analizar las características del trinomio, se puede calcular el discriminante, que es la
		parte bajo la raíz cuadrada en la fórmula cuadrática. El discriminante se calcula como b² - 4ac,
		y su valor determina la naturaleza de las soluciones de la ecuación cuadrática asociada. Si el
		discriminante es mayor que cero, las soluciones son reales y diferentes. Si el discriminante es
		igual a cero, las soluciones son reales e iguales. Si el discriminante es menor que cero, las
		soluciones son complejas o imaginarias conjugadas.
	</p>
	<h4>Soluciones y raíces:</h4>
	<p>
		Si el trinomio se factoriza, las soluciones o raíces del trinomio se pueden obtener encontrando
		los valores de "x" que hacen que cada factor sea igual a cero. Estos valores representan los
		puntos donde el trinomio se cruza con el eje x.
	</p>
	<h4>Aplicaciones:</h4>
	<p>
		Los trinomios de esta forma son comunes en problemas que involucran fenómenos cuadráticos en
		física, como el lanzamiento de proyectiles, y en problemas matemáticos relacionados con el
		análisis de funciones cuadráticas.
	</p>
	<h4 class="font-normal">EJEMPLO</h4>
	<Formula math={'2x² + 7x + 3  = 0'} />
	<h4 class="font-normal">SOLUCION</h4>
	<Formula math={'(2x + 1)(x + 3)=0'} />

	<Divider />
	<h2>2. CARACTERISTICAS DE TRINOMIO DE LA FORMA x² + bx + c</h2>
	<p>
		Un trinomio de la forma ax² + bx + c, donde "a", "b" y "c" son coeficientes reales y "a" no es
		igual a cero, es un trinomio de grado 2 con un término cuadrado, un término lineal y un término
		constante. Se puede factorizar y se utilizan en la resolución de ecuaciones cuadráticas y en
		problemas matemáticos y físicos relacionados con funciones cuadráticas.
	</p>

	<h4 class="font-normal">Ejercicio 1</h4>
	<Formula math={'4x² + 12x + 9  = 0'} />
	<!-- Esta es la solucion -->
	<h4>Solución</h4>
	<Formula math={'(2x + 3)(2x + 3)=0'} />
	<!-- Aqui termine -->

	<h4 class="font-normal">Ejercicio 2</h4>
	<Formula math={' 3x² - 5x - 2  = 0'} />
	<!-- Esta es la solucion -->
	<h4>Solución</h4>
	<Formula math={'(3x + 1)(x - 2)=0'} />
	<!-- Aqui termine -->
</div>
