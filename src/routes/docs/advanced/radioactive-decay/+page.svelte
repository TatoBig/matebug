<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
</script>

<div class="class-placeholder">
	<h1>DESINTEGRACIÓN RADIACTIVA</h1>
	<Divider />

	<h2>1. Definición</h2>
	<p>
		Este postulado relaciona la tasa a la cual un elemento se desintegra, con la más total del
		elemento.
	</p>
	<p>La resolución del modelo es el siguiente:</p>
	<Formula math={'-\\frac{dm}{dt}αm'} />
	<Formula math={'\\frac{dm}{dt}=-km'} />
	<Formula math={'\\int \\frac{dm}{m}=-k\\int dt'} />
	<Formula math={'\\text{ln}(m)=-kt+C'} />
	<Formula math={'m(t)=e^{-kt+C}'} />
	<Formula math={'m(t)=e^{-kt}e^C'} />
	<Formula math={'m(t)=Ce^{-kt}'} />

	<Divider />
	<h2>2. Ejemplo</h2>

	<p>
		La vida media del estroncio 90 es de 28 años. ¿Cuánto tiempo tardará una muestra de 50mg en
		desintegrarse a una masa de 32mg?
	</p>

	<Divider />
	<h2>3. Solución</h2>
	<p>
		El procedimiento es muy similar al del crecimiento poblacional, ya que es lo mismo solo que es
		un decrecimiento.
	</p>
	<p>
		Primero siempre debemos obtener el modelo a utilizar en base a la ecuación diferencial con
		variable separable
	</p>
	<Formula math={'-\\frac{dm}{dt}αm'} />
	<Formula math={'\\frac{dm}{dt}=-km'} />
	<Formula math={'\\int \\frac{dm}{m}=-k\\int dt'} />
	<p>Para este caso, se utilizará esta fórmula</p>
	<Formula math={'\\text{ln}(m)=-kt+C'} />

	<p>
		Luego aplicamos el modelo con las variables que nos da el problema. Primero debemos obtener la
		constante con el valor inicial y luego la constante de desintegración.
	</p>
	<Formula math={'\\text{ln}(m)=-kt+C'} />
	<Formula math={'\\text{ln}(50)=-k(0)+C'} />
	<Formula math={'\\text{ln}(50)=C'} />
	<Divider />
	<Formula math={'\\text{ln}(m)=-kt+\\text{ln}(50)'} />
	<Formula math={'\\text{ln}(25)=-k(28)+\\text{ln}(50)'} />
	<Formula math={'\\frac{\\text{ln}(25)-\\text{ln}(50)}{-28}=k'} />
	<Formula math={'\\frac{\\text{ln}(\\frac{1}{2})}{-28}=k'} />
  <p>
    Luego tenemos que utilizar las constantes para tener la ecuación en el tiempo deseado
  </p>
	<Formula math={'\\text{ln}(m)=-kt+C'} />
	<Formula math={'\\text{ln}(m)=\\frac{\\text{ln}(\\frac{1}{2})}{-28}t+\\text{ln}(50)'} />
	<Formula math={'\\text{ln}(32)=\\frac{\\text{ln}(\\frac{1}{2})}{-28}t+\\text{ln}(50)'} />
  <Formula math={"\\frac{\\text{ln}(32)-\\text{ln}(50)}{\\frac{\\text{ln}(\\frac{1}{2})}{28}}=t"} />
  <Formula math={"18.03=t"} />


	<p>
		Se redacta una respuesta final, que dependiendo de lo que tratemos, se podrá dar en decimales o
		no.
	</p>
  <h4>El estroncio tardó 18.03 años en desintegrarse de 50mg a 32mg</h4>
</div>
