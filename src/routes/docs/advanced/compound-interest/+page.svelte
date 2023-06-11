<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
</script>

<div class="h-screen 2xl:mx-[600px] xl:mx-96 md:mx-40 p-16">
	<h1>INTERÉS COMPUESTO</h1>
	<Divider />

	<h2>1. Definición</h2>
	<p>
		El interés compuesto es determinado a través de un modelado ya que se va aplicando continuamente
		a un interés inicial. Aplica el mismo concepto del crecimiento poblacional.
	</p>

	<p>La resolución del modelo es el siguiente:</p>
	<Formula math={'\\frac{dA}{dt}αA'} />
	<Formula math={'\\frac{dA}{dt}=rA'} />
	<Formula math={'\\frac{dA}{A}=rdt'} />
	<Formula math={'\\text{ln}(A)=rt+C'} />
	<Formula math={'A=e^{rt}C'} />

	<Divider />
	<h2>2. Ejemplo 1</h2>

	<p>
		Una suma de $12000 se invierte a una tasa de 10% anual capitalizable continuamente. Encuentre la
		cantidad de dinero acumulada después de 3 años.
	</p>
	<li>C = $12000.00</li>
	<li>r = 10%</li>
	<li>A(3) = ?</li>
	<Divider />

	<h2>3. Solución</h2>
	<p>
		Primero siempre debemos obtener el modelo a utilizar en base a la ecuación diferencial con
		variable separable
	</p>
	<Formula math={'\\frac{dA}{dt}αA'} />
	<Formula math={'\\frac{dA}{dt}=rA'} />
	<Formula math={'\\frac{dA}{A}=rdt'} />
	<Formula math={'\\text{ln}(A)=rt+C'} />
	<Formula math={'A=e^{rt}C'} />

	<p>
		Para este ejercicio sencillo solo habrá que reemplazar los datos, sabiendo que la constante es
		el valor inicial de la inversión.
	</p>
	<Formula math={'A=Ce^{rt}'} />
	<Formula math={'A=(12000)e^{0.1(3)}'} />
	<Formula math={'A=16198.30'} />

	<Divider />
	<h2>4. Ejemplo 2</h2>
	<p>
		Una suma de $5000 se invierte a una tasa de 8.5% anual capitalizable continuamente. Encuentre la
		cantidad de dinero acumulada después de un año y medio y el tiempo que se necesita para que
		llegue a acumularse $7000
	</p>
	<li>C = 5000</li>
	<li>r = 8.5%</li>
	<li>a) A(1.5) = ?</li>
	<li>b) A(t) = 7000</li>

	<Divider />
	<h2>5. Solución</h2>

	<HiddenSolution>
		<p>
			Primero siempre debemos obtener el modelo a utilizar en base a la ecuación diferencial con
			variable separable
		</p>
		<Formula math={'\\frac{dA}{dt}αA'} />
		<Formula math={'\\frac{dA}{dt}=rA'} />
		<Formula math={'\\frac{dA}{A}=rdt'} />
		<Formula math={'\\text{ln}(A)=rt+C'} />
		<Formula math={'A=e^{rt}C'} />

		<p>
			Utilizando la cantidad inicial como nuestra C, solo debemos aplicar la fórmula obtenida con el
			tiempo que deseemos para ver cuánto dinero habrá en ese tiempo.
		</p>

		<Formula math={'A(1.5)=5000e^{0.085(1.5)}'} />
		<h4>Q5679.92 después de año y medio</h4>

		<p>
			Sabiendo el resultado y la constante, solo habrá que despejar t para obtener el tiempo en el
			cual se obtendrá el resultado.
		</p>
    <Formula math={'7000=5000e^{0.085t}'} />
    <Formula math={'\\frac{7000}{5000}=e^0.085t'} />
    <Formula math={'\\frac{\\text{ln}(1.4)}{0.085}=t'} />
    <Formula math={'3.96=t'} />

    <h4>Tardará 3.96 años para llegar a $7000.00</h4>
	</HiddenSolution>
</div>
