<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
</script>

<div class="h-screen 2xl:mx-[600px] xl:mx-96 md:mx-40 p-16">
	<h1>CONCEPTOS BÁSICOS DE UNA ECUACIÓN DIFERENCIAL</h1>

	<Divider />
	<h2>1. Definición</h2>
	<p>
		Es una ecuación matemática, pero que relaciona funciones con sus derivadas en la misma
		expresión, como por ejemplo las siguientes:
	</p>
	<Formula math={'\\frac{dx}{dy}=x+y'} />
	<Formula math={"(x+5)y'=y-1"} />
	<Formula math={'(x+y+4)dx+(-x-3y+2)dy=0'} />

	<Divider />
	<h2>2. Características de una ecuación diferencial</h2>

	<h3>Orden</h3>
	<p>El orden lo define el orden de la derivada más alta encontrada en la expresión.</p>
	<h4 class="font-normal">Ecuación diferencial de primer orden.</h4>
	<Formula math={"y'=3x^2(y^2+1)"} />
	<h4>Ecuación diferencial de segundo orden.</h4>
	<Formula math={"y''+3y'+2y=sin(x)"} />

	<h3>Grado</h3>
	<p>Este está condicionado por el exponente de la derivada de mayor orden.</p>
	<h4>Ecuación diferencial de grado 4</h4>
	<Formula math={"(4y')^3+(5y'')^4+4y^2=2x"} />
	<h4>Ecuación diferencial de grado 1</h4>
	<Formula math={'\\frac{dy}{dx}=2xy^2+3x^2y^2'} />

	<h3>Ordinaria o Parcial</h3>
	<p>
		Las ecuaciones ordinarias son las que definen a su variable dependiente solo con una variable
		independiente:
	</p>
	<Formula math={'y=5x^2+2x+3'} />
	<p>
		Las variables dependientes de las ecuaciones parcial están definidas por mas de una variable
		independiente:
	</p>
	<Formula math={'z^2+2y+7x=4x^2+5y^2'} />

	<h3>Linealidad</h3>
	<p>
		Si es lineal, la variable dependiente no está modificada y no tiene exponentes ni divisiones.
	</p>
	<h4>Ecuación lineal</h4>
	<Formula math={"y'-xy=(x-1)e^x"} />

	<h4>Ecuación no lineal</h4>
	<Formula math={"y''+\\frac{yy'}{x^4}+\\frac{e^xy^2}{(y')^2}"} />

	<Divider />
	<h2>3. Tipos de soluciones para una ecuación diferencial</h2>

	<h3>General</h3>
	<p>
		Estas soluciones cumplen para la función de la que se resuelven, pero puede que difieran en las
		constantes, ya que sin datos, es imposible determinar la constante de integración cuando se
		realiza esta operación.
	</p>
	<Formula math={'\\frac{dy}{dx}=x+y+4'} />

	<h4>Solución general</h4>
	<Formula math={'y=e^xC-x-5'} />

	<h3>Específica</h3>
	<p>
		Dados valores iniciales, se puede especificar el valor que hace falta de una solución general, y
		así obteniendo la solución específica para esa expresión
	</p>

	<h4>Valores iniciales</h4>
	<Formula math={"y(1)=0\\hspace{0.5cm}(x+5)y'=y-1"} />

	<h4>Solución específica</h4>
	<Formula math={"y=-\\frac{1}{6}(x+5)+1"} />


</div>
