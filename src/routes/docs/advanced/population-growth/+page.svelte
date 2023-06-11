<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
</script>

<div class="class-placeholder">
	<h1>CRECIMIENTO POBLACIONAL</h1>
	<div>
        <li><a href="#s1">Definición</a></li>
        <li><a href="#s2">Ejemplo</a></li>
		<li><a href="#s3">Solución</a></li>
    </div>
	<Divider />

	<h2 id="s1">1. Definición</h2>
	<p>
		Este modelo se utiliza para determinar el crecimiento de población constante a través del tiempo
		utilizando ecuaciones diferenciales de variables separables.
	</p>
	<p>La resolución del modelo es el siguiente:</p>
	<Formula math={'\\frac{dP}{dt}αP'} />
	<Formula math={'\\frac{dP}{dt}kP'} />
	<Formula math={'\\int \\frac{dP}{P}=k\\int dt'} />
	<Formula math={'\\text{ln}P=kt+C'} />
	<Formula math={'P(t)=e^{kt+C}'} />
	<Formula math={'P(t)=e^{kt}e^C'} />
	<Formula math={'P(t)=Ce^{kt}'} />

	<Divider />
	<h2 id="s2">2. Ejemplo</h2>

	<p>
		La población de Estados Unidos en 1980 era de alrededor de 231 millones y ha crecido
		continuamente a razón de 1.03% anual. Pronostique la población N(t) en el año 2020 si continúa
		esta tendencia.
	</p>
	<p>Variables que tenemos</p>
	<li>N(0) = 231 millones de personas</li>
	<li>K = 0.0103 (crecimiento)</li>
	<li>N(40) = ?</li>
	<li>(La referencia es que si 1980 es el año 0, 2020 será el año 40)</li>

	<Divider />
	<h2 id="s3">3. Solución</h2>
	<p>Primero se obtiene el modelo</p>
	<Formula math={'\\frac{dP}{dt}αP'} />
	<Formula math={'\\frac{dP}{dt}kP'} />
	<Formula math={'\\int \\frac{dP}{P}=k\\int dt'} />
	<Formula math={'\\text{ln}P=kt+C'} />
	<Formula math={'P(t)=Ce^{kt}'} />

	<p>
		Luego aplicamos el modelo con las variables que nos da el problema. Primero debemos obtener la
		constante con el valor inicial.
	</p>
	<Formula math={'P(t)=Ce^{kt}'} />
	<Formula math={'P(0)=Ce^{0.0103(0)}'} />
	<Formula math={'P(0)=C(1)'} />
	<Formula math={'231 = C'} />
	<p>Luego tenemos que utilizar la constante para tener la ecuación en el tiempo deseado</p>
	<Formula math={'P(t)=Ce^{kt}'} />
	<Formula math={'P(40)=(231)e^{0.0103(40)}'} />
	<Formula math={'P(40)=348.77'} />
	<p>
		Se redacta una respuesta final, que dependiendo de lo que tratemos, se podrá dar en decimales o
		no.
	</p>
	<h4 class="fo">La población creció hasta 348.77 millones de personas para el 2020.</h4>
</div>
