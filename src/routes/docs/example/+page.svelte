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
</div>
