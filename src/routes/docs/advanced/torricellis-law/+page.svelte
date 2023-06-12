<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
	import Image from '@components/core/Image.svelte';
</script>

<div class="h-screen 2xl:mx-[600px] xl:mx-96 md:mx-40 p-16">
	<h1>ELIMINACIÓN DE UN MEDICAMENTO</h1>
	<div>
        <li><a href="#s1">Definición</a></li>
        <li><a href="#s2">La ecuación</a></li>
		<li><a href="#s3">Ejemplo</a></li>
		<li><a href="#s4">Solución</a></li>
		
    </div>
	<Divider />

	<h2 id="s1">1. Definición</h2>
	<p>
		La ley de Torricelli define el tiempo en el cual se vaciará un volumen de agua de un recipiente,
		dependiendo del tamaño del orificio por el cuál el agua va saliendo.
	</p>

	<p>La resolución del modelo es el siguiente:</p>
	<Formula math={'Vf^2=Vo^2+2ax'} />
	<Formula math={'Vf=\\sqrt{2gy}'} />
	<Formula math={'-\\frac{dv}{dt}αV'} />
	<Formula math={'\\frac{dV}{dt}=-αv'} />
	<Formula math={'\\frac{dV}{dt}=-a\\sqrt{2gy}'} />
	<Formula math={'V = Ah'} />
	<Formula math={'\\frac{dV}{dt}=\\frac{A(y)dy}{dt}'} />
	<Formula math={'\\frac{dV}{dt}=-a\\sqrt{2gy}'} />
	<Formula math={'\\frac{A(y)dy}{dt}=-a\\sqrt{2gy}'} />

	<Divider />
	<h2 id="s2">2. La ecuación</h2>

	<p>
		Para resolver problemas de la ley de Torricelli de vaciado de tanques, es necesario entender la
		fórmula para luego construirla
	</p>
	<li>
		<strong>A(y)</strong> será el área vista desde arriba en función de la altura, por ejemplo el área
		superior de un cono invertido ira en disminución junto con la altura
	</li>
	<li>
		<strong>a</strong> será el área por donde sale el agua
	</li>
	<li>
		<strong>g</strong> será la gravedad ya sea en medidas internacionales o inglesas.
	</li>
	<Formula math={'\\frac{A(y)dy}{dt}=-a\\sqrt{2gy}'} />

	<Divider />
	<h2 id="s3">3. Ejemplo</h2>
	<p>
		En el tiempo t = 0 se retira el tapón del fondo (en el vértice) de un tanque cónico de 16 ft de
		altura, lleno de agua. Después de 1 h el agua del tanque tiene altura de 9 ft. ¿Cuándo quedará
		vacío?
	</p>
	<li>t = 0 altura 16ft</li>
	<li>t = 1 altura 9ft</li>
	<li>t = ? altura 0ft</li>

	<Divider />
	<h2 id="s4">4. Solución</h2>
	<p>
		Primero siempre debemos obtener el modelo a utilizar en base a la ecuación diferencial con
		variable separable en ecuaciones de física
	</p>
	<Formula math={'Vf^2=Vo^2+2ax'} />
	<Formula math={'Vf=\\sqrt{2gy}'} />
	<Formula math={'-\\frac{dv}{dt}αV'} />
	<Formula math={'\\frac{dV}{dt}=-αv'} />
	<Formula math={'\\frac{dV}{dt}=-a\\sqrt{2gy}'} />
	<Formula math={'V = Ah'} />
	<Formula math={'\\frac{dV}{dt}=\\frac{A(y)dy}{dt}'} />
	<Formula math={'\\frac{dV}{dt}=-a\\sqrt{2gy}'} />
	<Formula math={'\\frac{A(y)dy}{dt}=-a\\sqrt{2gy}'} />

	<p>
		Para visualizar mejor estos ejercicios es recomendable hacer una gráfica, de la parte lateral y
		de la figura vista desde arriba
	</p>
	<h4>Vista desde arriba</h4>
	<Image src="/images/trcl.png" alt="Area" />

	<h4>Volumen</h4>
	<Image src="/images/trcl2.png" alt="Area" />

	<h4>Vista lateral</h4>
	<Image src="/images/trcl3.png" alt="Area" />
	<p>
		Y luego hay que definir A(y): el área vista desde arriba es sencillo, es el área de un circulo
		(πr^2) pero en este caso el radio corresponde a X, que también depende de Y en la vista lateral
	</p>
	<p>La relación del área desde arriba y el área lateral sería de la siguiente manera</p>
	<Formula math={'\\frac{r}{16}=\\frac{x}{y}'} />
	<Formula math={'x=\\frac{ry}{16}'} />
	<Formula math={'A(y)=π(\\frac{ry}{16})^2'} />
	<Formula math={'A(y)=\\frac{πr²y²}{256}'} />
	<p>
		Ahora cambiando valores en la ecuación con la función de área ya definida y separando variables.
	</p>
	<Formula math={'\\frac{A(y)dy}{dt}=-a\\sqrt{2gy}'} />
	<Formula math={'\\frac{πr²y²dy}{256dt}=-a\\sqrt{2(32)y}'} />
	<Formula math={'\\frac{y²dy}{\\sqrt{y}}=-\\frac{a(8)(256)}{πr²}dt'} />
	<p>La parte derecha se elimina ya que es constante por lo que se considera k</p>
	<Formula math={'\\frac{y²dy}{\\sqrt{y}}=kdt'} />
	<p>Se integran ambas partes</p>
	<Formula math={'\\int y^{\\frac{3}{2}dy}=\\int kdt'} />
	<Formula math={'\\frac{2}{5}y^{\\frac{5}{2}}=kt+c'} />
	<p>Ya con la formula construida se obtiene C y K con los valores iniciales que da el problema</p>
	<Formula math={'\\frac{2}{5}(16)^{\\frac{5}{2}}=k(0)+c'} />
	<Formula math={'\\frac{2048}{5}=c'} />
	<Divider />
	<Formula math={'\\frac{2}{5}y^{\\frac{5}{2}}=k(1)+\\frac{2048}{5}'} />
	<Formula math={'\\frac{2(9)^{\\frac{5}{2}}}{5}=k+\\frac{2048}{5}'} />
	<Formula math={'-\\frac{1562}{5}=k'} />
	<p>La formula ya con todos los datos de constantes quedaría:</p>
	<Formula math={'\\frac{2}{5}y^{\\frac{5}{2}}=-\\frac{1562t}{5}+\\frac{2048}{5}'} />
	<p>
		Ya solo queda obtener el tiempo en la altura que deseamos, como es cuando esta vació, la altura
		tiene que ser y = 0
	</p>
	<Formula math={'2(0)^{\\frac{5}{2}}=-1562t+2048'} />
	<Formula math={'1562t=2048'} />
	<Formula math={'t=\\frac{2048}{1562}'} />
	<Formula math={'t=1.31'} />
	<h4>El tiempo que tardaría el tanque en vaciarse es de 1.31 horas</h4>
</div>
