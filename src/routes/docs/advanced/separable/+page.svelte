<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
</script>

<div class="class-placeholder">
	<h1>Ecuaciones separables</h1>
	<div>
        <li><a href="#s1">Definición</a></li>
        <li><a href="#s2">Resolución</a></li>
		<li><a href="#s3">Ejercicio: Encontrar constante</a></li>
    </div>
	<Divider />

	<h2 id="s1">1. Definición</h2>
	<p>
		Una ecuación separable es aquella donde sus dos variables se pueden separar en ambos lados de la
		ecuación con su respectivo diferencial
	</p>

	<Divider />
	<h2 id="s2">2. Resolución</h2>
	<Formula math={'\\frac{dy}{dx}=2xsec(y)'} />
	<h4>Separación de variables</h4>
	<Formula math={'\\frac{dy}{sec(y)}=2xdx'} />

	<h4>Se integran ambas partes</h4>
	<Formula math={'\\int\\frac{dy}{sec(y)}=\\int2xdx'} />
	<Formula math={'\\int cos(x)y=2\\int xdx'} />
	<Formula math={'sin(y)=\\frac{2x^2}{2}+C'} />
	<Formula math={'y=sin^{-1}x²+C'} />

	<h2 id="s3">3. Ejercicio: Encontrar constante</h2>
	<p>
		Este tipo de ejercicios nos da valores iniciales para encontrar una solución específica para la
		ecuación Se obtiene el valor de la constante
	</p>
  <Formula math={'\\frac{dy}{dx}=\\sqrt{x}\\hspace{0.5cm}y(4)=0'} />
  <Divider />

  <HiddenSolution>
		<h4>Obtener la ecuación separable y se integra</h4>
		<Formula math={"\\int dy= \\int \\sqrt{x}dx"} />
		<Formula math={"y=\\frac{2}{3}\\sqrt{x^3}+C"} />
		<Formula math={"0=\\frac{2}{3}\\sqrt{4^3}+C"} />
		<Formula math={"\\frac{16}{3}+C"} />
		<Formula math={"C=-\\frac{16}{3}"} />

		<h4>Escribir la respuesta con la constante</h4>
		<Formula math={"y=\\frac{2}{3}\\sqrt{x³}-\\frac{16}{3}"} />
	</HiddenSolution>
</div>
