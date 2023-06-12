<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
	import Image from '@components/core/Image.svelte';
</script>

<div class="class-placeholder">
	<h1>ELIMINACIÓN DE UN MEDICAMENTO</h1>
	<Divider />

	<h2>1. Definición</h2>
	<p>
		Este modelo aplica para queremos saber el tiempo en el que se elimina por completo una sustancia
		aplicada en el cuerpo, generalmente un medicamento. Aplica el mismo concepto del de la
		desintegración radiactiva, ya que es un decrecimiento.
	</p>

	<p>La resolución del modelo es el siguiente:</p>
	<Formula math={'-\\frac{dM}{dt}αM'} />
	<Formula math={'\\frac{dM}{dt}=-kM'} />
	<Formula math={'\\int \\frac{dM}{M}=-k\\int dt'} />
	<Formula math={'\\text{ln}(M)=-kt+c'} />
	<Formula math={'M(t)=e^{-kt+C}'} />
	<Formula math={'M(t)=e^{-kt}e^C'} />
	<Formula math={'M(t)=Ce^{-kt}'} />

	<Divider />
	<h2>2. Ejemplo</h2>

	<p>
		A una persona le recetan que se tome unas capsulas que contienen 800 mg de un medicamento. De
		acuerdo a las evaluaciones realizadas en otros pacientes, después de una hora de haberlas tomado
		en la sangre hay un nivel de 750 mg aún. Suponiendo que se toma la cápsula a las 5 de la mañana,
		¿a qué hora debe tomarse la siguiente cápsula si no debe tener en la sangre menos de 250 mg?
	</p>

	<li>M(0) = 800mg</li>
	<li>M(1) = 750mg</li>
	<li>M(?) = 250mg</li>

	<Divider />
	<h2>3. Solución</h2>
	<p>
		Primero siempre debemos obtener el modelo a utilizar en base a la ecuación diferencial con
		variable separable
	</p>
	<Formula math={'-\\frac{dM}{dt}αM'} />
	<Formula math={'\\frac{dM}{dt}=-kM'} />
	<Formula math={'\\int \\frac{dM}{M}=-k\\int dt'} />
	<Formula math={'\\text{ln}(M)=-kt+c'} />
	<Formula math={'M(t)=e^{-kt+C}'} />
	<Formula math={'M(t)=Ce^{-kt}'} />

	<p>Luego se encuentran las constantes K y C con los valores iniciales del problema</p>
	<Formula math={'800=e^{-k(0)C}'} />
	<Formula math={'800=C'} />
	<Divider />
	<Formula math={'750=e^{-k(1)}800'} />
	<Formula math={'\\frac{750}{800}=e^{-k(1)}'} />
	<Formula math={'-\\text{ln}(\\frac{750}{800})=k'} />
	<p>Se reemplazan los valores con los deseados y se despeja t</p>
	<Formula math={'250=e^{-(-\\text{ln}(\\frac{750}{800}))t}800'} />
	<Formula math={'\\frac{250}{800}=e^{-(-\\text{ln}(\\frac{750}{800}))t}'} />
	<Formula math={'\\text{ln}(\\frac{250}{800})=\\text{ln}e^{-(-\\text{ln}(\\frac{750}{800}))t}'} />
	<Formula math={'\\text{ln}(\\frac{250}{800})=-(-\\text{ln}(\\frac{750}{800}))t'} />
	<Formula math={'\\frac{\\text{ln}(\\frac{250}{800})}{\\text{ln}(\\frac{750}{800})}=t'} />
	<Formula math={'t=18.02'} />
	<h4>
		Como nuestro tiempo inicial era a las 5 de la mañana, entonces 18 horas después son las 11 de la
		noche a la hora que debería de tomar otra cápsula
	</h4>
</div>
