<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
</script>

<div class="h-screen 2xl:mx-[600px] xl:mx-96 md:mx-40 p-16">
	<h1>CONCEPTOS DE FACTORIZACIÓN</h1>
	<div>
        <li><a href="#s1">TRINOMIO CUADRADO PERFECTO</a></li>
        <li><a href="#s2">CARACTERISTICAS DE TRINOMIO PERFECTO</a></li>
    </div>
	<Divider />
	<h2 id="s1">1. TRINOMIO CUADRADO PERFECTO</h2>
	<p>
		Es cuando tienes una expresión de la forma a² + 2ab + b² o a² - 2ab + b², que se factoriza como
		(a + b)² o (a - b)².
	</p>
	<h4>Forma algebraica:</h4>
	<p>
		Un trinomio cuadrado perfecto tiene la forma de un binomio al cuadrado. La forma general es (a +
		b)^2 o (a - b)^2.
	</p>
	<h4>Términos cuadrados:</h4>
	<p>
		Un trinomio cuadrado perfecto tiene dos términos cuadrados, uno en el primer término y otro en
		el segundo término. Por ejemplo, en (a + b)^2, a^2 y b^2 son los términos cuadrados.
	</p>
	<h4>Término cruzado:</h4>
	<p>
		En un trinomio cuadrado perfecto, el término cruzado es el doble producto de los dos términos en
		el binomio. En (a + b)^2, el término cruzado es 2ab, mientras que en (a - b)^2, el término
		cruzado es -2ab.
	</p>
	<h4>Propiedad de la factorización:</h4>
	<p>
		Un trinomio cuadrado perfecto puede factorizarse como el producto de dos binomios idénticos o
		conjugados. Por ejemplo, (a + b)^2 se factoriza como (a + b)(a + b), y (a - b)^2 se factoriza
		como (a - b)(a - b).
	</p>
	<h4>Simplificación de expresiones:</h4>
	<p>
		Los trinomios cuadrados perfectos son útiles para simplificar expresiones algebraicas. Al
		factorizar un trinomio cuadrado perfecto, se puede reducir la complejidad y facilitar el cálculo
		posterior.
	</p>
	<h4>Relación con identidades algebraicas:</h4>
	<p>
		Los trinomios cuadrados perfectos están relacionados con identidades algebraicas específicas,
		como la identidad (a + b)^2 = a^2 + 2ab + b^2 y la identidad (a - b)^2 = a^2 - 2ab + b^2.
	</p>
	<h4 class="font-normal">EJEMPLO</h4>
	<Formula math={' x² + 6x + 9 = 0'} />
	<h4 class="font-normal">SOLUCION</h4>
	<Formula math={'(x + 3)²=0'} />

	<Divider />
	<h2 id="s2">2. CARACTERISTICAS DE TRINOMIO PERFECTO</h2>
	<p>
		Un trinomio cuadrado perfecto es un binomio al cuadrado que tiene términos cuadrados, un término
		cruzado y se puede factorizar como el producto de dos binomios idénticos o conjugados. Tienen
		aplicaciones en la simplificación de expresiones algebraicas y están relacionados con
		identidades algebraicas específicas.
	</p>

	<h4 class="font-normal">Ejercicio 1</h4>
	<Formula math={'4y² - 12yz + 9z² = 0'} />
	<!-- Esta es la solucion -->
	<h4>Solución</h4>
	<Formula math={'(2y - 3z)²=0'} />
	<!-- Aqui termine -->

	<h4 class="font-normal">Ejercicio 2</h4>
	<Formula math={'16a⁴ - 64a²b + 64b² = 0'} />
	<!-- Esta es la solucion -->
	<h4>Solución</h4>
	<Formula math={'(4a² - 8b)²=0'} />
	<!-- Aqui termine -->
</div>
