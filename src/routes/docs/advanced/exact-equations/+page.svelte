<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
	import HiddenSolution from '@components/core/HiddenSolution.svelte';
	import Image from '@components/core/Image.svelte';
</script>

<div class="class-placeholder">
	<h1>ECUACIONES EXACTAS</h1>
	<div>
        <li><a href="#s1">Definición</a></li>
        <li><a href="#s2">Resolución</a></li>
		<li><a href="#s3">Ejemplo</a></li>
		<li><a href="#s4">Reducción a ecuaciones exactas</a></li>
    </div>
	<Divider />

	<h2 id="s1">1. Definición</h2>
	<p>Son las ecuaciones que tienen la siguiente forma:</p>

	<Formula math={'M(x,y)dx+N(x,y)dy=0'} />
	<p>
		Y también tiene que cumplirse la condición de que la derivada parcial de la parte M respecto a
		Y, tiene que ser igual a la derivada parcial de la parte N respecto a X
	</p>
	<Formula math={'\\frac{dM}{dy}=\\frac{dN}{dx}'} />

	<Divider />
	<h2 id="s2">2. Resolución</h2>

	<p>Primero se debe comprobar que es una ecuación exacta, con la comprobación mencionaba.</p>
	<p>Luego se debe integrar la parte M respecto a X y la parte de N respecto a Y</p>
	<p>
		Al terminar de integrar, se debe verificar que los términos que incluyan X y Y, sean iguales en
		ambas partes
	</p>
	<p>
		Finalmente se construye la solución, primero los términos que tengan X y Y, luego los que tengan
		X, los que tengan Y y por último agregar la constante de integración
	</p>

	<Divider />
	<h2 id="s3">3. Ejemplo</h2>
	<p>Resolver la siguiente ecuación</p>
	<Formula math={'(2xy²+3x²)dx+(2x²y+4y³)dy=0'} />
	<p>Primero se debe comprobar si se trata de una ecuación exacta:</p>
	<Formula math={'\\frac{dM}{dy}=2xy²+3x²'} />
	<Formula math={'\\frac{dN}{dx}=2x²y+4y³'} />
	<Formula math={'2xy²+3x²=2x²y+4y³'} />
	<Formula math={'4xy+0=4xy+0'} />
	<p>Como las derivadas parciales son iguales, si es una ecuación exacta.</p>
	<Divider />
	<p>Para la resolución ahora se tiene que integrar cada parte</p>
	<Formula math={'\\int 2xy²+3x²dx'} />
	<Formula math={'\\frac{2}{2}x²y²+\\frac{3}{3}x³'} />
	<Formula math={'x²y²+x³'} />
	<Divider />
	<Formula math={'\\int 2x²y+4y³dy'} />
	<Formula math={'\\frac{2}{2}x²y²+\\frac{4}{4}y⁴'} />
	<Formula math={'x²y²+y⁴'} />
	<p>
		Como la parte de que lleva los dos términos X y Y son iguales, si se verifica que esta correcta
		la solución de la ecuación exacta
	</p>
	<p>Y se escribe ya la solución completa</p>
	<Formula math={'x²y²+x³+y⁴+C = 0'} />

	<Divider />
	<h2 id="s4">4. Reducción a ecuaciones exactas</h2>
	<p>
		Estas son ecuaciones que tienen la forma de las ecuaciones exactas, pero al realizar la
		verificación de si sus variables parciales son iguales, no se cumple.
	</p>
	<p>
		Por ello es que se busca un factor integrante con las siguientes fórmulas y multiplicarlo para
		convertirla en exacta.
	</p>
	<Formula math={'u(x)=e^{\\int \\frac{My-Nx}{N}}dx'} />
	<Formula math={'u(y)=e^{\\int \\frac{Nx-My}{M}}dy'} />

	<h2>5. Ejemplo</h2>
	<p>Resolver</p>
	<Formula math={'(3x²-y²)dy+2xydx=0'} />
	<p>Se comienza por verificar si es exacta</p>
	<Formula math={'\\frac{dM}{dy}=6x'} />
	<Formula math={'\\frac{dN}{dx}=-2x'} />
	<p>Como no es exacta, se utiliza la fórmula para encontrar el factor integrante</p>
	<Formula math={'\\frac{(\\frac{dM}{dy}-\\frac{dN}{dx})}{N}'} />
	<Formula math={'\\frac{-2x-6x}{3x^2-y²}'} />
	<Formula math={'-\\frac{8x}{3x²-y²}'} />
	<p>El factor que se encontró no sirve porque es para X solo pero incluye una Y</p>
	<p>El factor integrante para Y si cumple porque esta en solo términos de Y</p>
	<Formula math={'\\frac{(\\frac{dN}{dx}-\\frac{dM}{dy})}{M}'} />
	<Formula math={'\\frac{6x+2x}{2xy}'} />
	<Formula math={'-\\frac{8x}{2xy}'} />
	<Formula math={'-\\frac{4}{y}'} />
	<p>
		Luego se obtiene el factor integrante cuando integramos lo que ya se encontró y queda como
		exponente de la exponencial
	</p>
	<Formula math={'u(y)=e^{\\int \\frac{4}{y}dy}'} />
	<Formula math={'u(y)=y^{-4}'} />
	<Formula math={'u(y)=\\frac{1}{y⁴}'} />
	<p>Ahora se multiplica la ecuación por el factor, y se verifica si ya es exacta</p>
	<Formula math={'\\frac{1}{y⁴}(3x²-y²)dy+(\\frac{1}{y⁴})2xydx=0'} />
	<Formula math={'\\frac{dM}{dy}=\\frac{6x}{y⁴}'} />
	<Formula math={'\\frac{dN}{dx}=\\frac{6x}{y⁴}'} />
	<p>Cómo es exacta, ya se puede trabajar como tal</p>
  <Formula math={'\\int \\frac{3x²}{y⁴}dy-\\int \\frac{1}{y²}dy'} />
  <Formula math={'-\\frac{\\frac{3}{3}x²}{y³}+\\frac{1}{y}'} />
  <Divider />
  <Formula math={'\\int -\\frac{2xy}{y⁴}dx'} />
  <Formula math={'-\\frac{\\frac{2}{2}x²}{y³}'} />
  <Formula math={'-\\frac{x²}{y³}'} />
  <p>Se construye la respuesta final</p>
  <Formula math={'-\\frac{x²}{y³}+\\frac{1}{y}+C'} />
  
</div>
