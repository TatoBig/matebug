<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
</script>

<div class="class-placeholder">
	<h1>LEY DE ENFRIAMIENTO DE NEWTON</h1>
	<Divider />

	<h2>1. Definición</h2>
	<p>
		Ley de enfriamiento de newton se utiliza para determinar la temperatura de un objeto luego de
		cierto tiempo, dependiendo de la temperatura ambiente, por lo que si lo que puede hacer que
		aumente o disminuya.
	</p>
	<li><strong>Ta</strong> es la temperatura ambiente o del entorno</li>
	<li><strong>T</strong> es la temperatura de cierto cuerpo o elemento</li>

	<p>La resolución del modelo es el siguiente:</p>
	<Formula math={'\\frac{dT}{dt}αT-Ta'} />
	<Formula math={'\\frac{dT}{dt}αTa-T'} />
	<Formula math={'\\frac{dT}{dt}=k(T-Ta)'} />
	<Formula math={'\\int \\frac{dT}{(T-Ta)}=\\int kdt'} />
	<Formula math={'\\text{ln}|T-Ta|=kt+C'} />
	<Formula math={'T-Ta = e^{kt+C}'} />
	<Formula math={'T = e^{kt}C+Ta'} />

	<Divider />
	<h2>2. DETERMINAR SI LA TEMPERATURA BAJA O SUBE RESPECTO AL AMBIENTE</h2>
	<p>
		El planteamiento del problema puede variar dependiendo de si la temperatura incrementara o
		descenderá, solucionando esto poniendo el signo menos al que disminuye.
	</p>
	<Formula math={'-\\frac{dT}{dt}αT-Ta\\hspace{0.5cm}T>Ta'} />
	<Formula math={'\\frac{dT}{dt}αTa-T\\hspace{0.5cm}Ta>T'} />
	<Divider />

	<h2>3. Ejemplo 1</h2>

	<p>
		La temperatura normal del cuerpo es de 98.6°F. Inmediatamente después del a muerte el cuerpo
		empieza a enfriarse. Se ha determinado experimental que la constante de la Ley De Newton de
		Enfriamiento es de aproximadamente k = 0.1947, suponiendo que el tiempo se mida en horas.
		Supongaq ue la temperatura del entorno es 60°F. a) Encuentre la función T(t) que modele la
		temperatura t horas después de fallecer. Si la temperatura del cuerpo es de ahora 72°F cuanto
		tiempo transcurrio desde la muerte?
	</p>
	<li>k = 0.1947</li>
	<li>T(0) = 98.6°F</li>
	<li>Ta = 60°F</li>
	<li>T(t) = 72°F t = ?</li>

	<Divider />
	<h2>4. Solución</h2>
	<p>
		Primero siempre debemos obtener el modelo a utilizar en base a la ecuación diferencial con
		variable separable. En este caso la temperatura disminuye
	</p>
	<Formula math={'-\\frac{dT}{dt}αT-Ta'} />
	<Formula math={'\\frac{dT}{dt}=-k(T-Ta)'} />
	<Formula math={'\\int \\frac{dT}{(T-Ta)}=\\int -kdt'} />
	<Formula math={'\\text{ln}|T-Ta|=-kt+C'} />
	<Formula math={'T-Ta = e^{-kt+C}'} />
	<Formula math={'T = e^{-kt}C+Ta'} />

	<p>
		Ya teniendo el modelo resuelto, solo debemos reemplazar los datos con los que nos proporciona el
		problema para obtener primero la constante. Luego ya tenemos todos los datos para encontrar el
		dato que necesitamos.
	</p>
	<Formula math={'T(0) = e^{-k(0)}C+Ta'} />
	<Formula math={'98.6=C+60'} />
	<Formula math={'C=38.6'} />
	<Divider />
	<Formula math={'T(t) = 60+38.6e^{-0.1947t}'} />
	<Formula math={'72 = 60+38.6e^{-0.1947t}'} />
	<Formula math={'\\frac{\\text{ln}(\\frac{72-60}{38.6})}{0.1947} = 0.1947t'} />
	<Formula math={'t = 6'} />

	<Divider />
	<h2>5. Ejemplo 2</h2>
	<p>
		Un termómetro que indica 70°F se coloca en un horno precalentado a una temperatura constante. A
		través de una ventana de vidrio en la puerta del horno, un observador registra que el termómetro
		lee 110°F después de ½ minuto y 145°F después de un minuto. ¿Cuál es la temperatura del horno?
	</p>
	<li>Ta = 20°C</li>
	<li>T(15) = 75°C</li>
	<li>T(0) = 100°C</li>
	<li>T(25) = ?</li>
	<p>En este caso la temperatura disminuye</p>
	<Formula math={'-\\frac{dT}{dt}αT-Ta'} />

	<Divider />
	<h2>6. Solución</h2>

	<HiddenSolution>
		<p>
			Primero siempre debemos obtener el modelo a utilizar en base a la ecuación diferencial con
			variable separable. También es posible utilizar la solución implícita si es más sencillo para
			el problema.
		</p>
		<Formula math={'-\\frac{dT}{dt}=kT-Ta'} />
		<Formula math={'-\\int \\frac{dT}{T-Ta}=k \\int dt'} />
		<Formula math={'-\\text{ln}(T-Ta)=kt+C'} />
		<p>Obtenemos C y K con los valores iniciales que nos da el problema</p>
		<Formula math={'-\\text{ln}(100-20)=k(0)+C'} />
		<Formula math={'-\\text{ln}(80)=C'} />
		<Divider />
		<Formula math={'\\text{ln}(72-20)=k(15)-\\text{ln}(80)'} />
		<Formula math={'\\text{ln}(80)-\\text{ln}(72-20)=k(15)'} />
		<Formula math={'\\frac{\\text{ln}(\\frac{80}{55})}{15}=k'} />
		<p>
			Luego reemplazamos los valores obtenidos para completar la ecuación y despejar para obtener la
			solución.
		</p>
		<Formula math={'\\frac{\\text{ln}(80)}{T-20}=\\frac{\\text{ln}(\\frac{80}{55}25)}{15}'} />
		<Formula math={'\\frac{\\text{ln}(80)}{T-20}=0.6244'} />
		<Formula math={'\\frac{80}{T-20}=e^0.6244'} />
		<Formula math={'20+\\frac{80}{1.867}=T-20'} />
		<p>
			Se redacta una respuesta final, que dependiendo de lo que tratemos, se podrá dar en decimales
			o no.
		</p>
		<h4>T = 62.84°C después de 25 minutos</h4>
	</HiddenSolution>
</div>
