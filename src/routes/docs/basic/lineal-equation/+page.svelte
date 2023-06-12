<script>
	import Divider from '@components/core/Divider.svelte';
	import Formula from '@components/core/Formula.svelte';
</script>

<div class="h-screen 2xl:mx-[600px] xl:mx-96 md:mx-40 p-16">
	<h1>CONCEPTOS BÁSICOS. ECUACIÓN LINEAL</h1>

	<Divider />
	<h2>1. Definición</h2>
	<p>
		Una ecuación algebraica de una variable  es un enunciado de la forma
	</p>
	<Formula math={'A = B'} />
    <p>
		En donde A y B son expresiones algebraicas con una sola variable.  A continuación se muestran algunos ejemplos de ecuaciones con una variables.
	</p>
	<Formula math={"2x-5 = 4x-8"} />
    <p>
		Tambien es aquella donde la(s) variable(s) están multiplicadas por números o sumadas a números, con nada más complicado que eso (sin exponentes, raíces cuadradas, 1/ x , 
        o cualquier otra situación complicada.
	</p>
	<Divider />
	<h2>Su objetivo</h2>
	<p> Es encontrar los valores de las variables que hacen que la igualdad sea verdadera. 
        Donde se busca encontrar las soluciones que satisfacen todas las ecuaciones simultáneamente.</p>
	<h3 class="font-normal">Ejemplo</h3>
    <h4>Sustituir 2 por x en 3 x + 5 = 11 nos da</h4>
	<Formula math={"3(2) + 5 = 11 -> 6 +5 = 11"} />
    <Divider />
	<h2>2. Consideraciones</h2>
    <h3>Ecuaciones equivalentes</h3>
	<p> si tienen exactamente las mismas soluciones, ejemplo: </p>
    <Formula math={"6x-12=0 -> x-1=1"} />
    <h4>equivalentes al tener solución al número x = 2</h4>
    <br>
	<h3>identidad</h3>
	<p>una identidad, cuando cualquier valor que tome la variable da como resultado un enunciado verdadero.  Por ejemplo, la ecuación:</p>
    <Formula math={"x^{2}-4 = (x-2)(x+2)"} />
	<h4>al sustituir x por numero reales da verdadero</h4>
    <br>

	<h3>Ecuación Condicional</h3>
	<p>
		 se llama ecuación condicional  o simplemente ecuación, 
         cuando solamente algunos números son soluciones de la misma.  
	</p>
	<Formula math={'yx^{2}-x-6=0'} />
    <h4>solo dos soluciones que son x=3 y x=-2 </h4>
    <Divider />
    <h2>3. Propiedades</h2>
	<p>
		1. Simplificar cualquiera de los lados de la ecuación utilizando las operaciones algebraicas  y las propiedades de los números reales. 
         Las dos ecuaciones siguientes son equivalentes 
	</p>

    <Formula math={'2x+6=8'} />
	<p>
		2. Sumar o restar la misma cantidad a ambos lados de una ecuación produce ecuaciones equivalentes, 
        como se ilustra con  el siguiente ejemplo
    </p>
	<Formula math={"2x+6=8"} />
    <Formula math={"2x+6-6=8-6"} />
    <Formula math={"2x = 2"} />

	<h5>En general si a=b entonces a+c = b+c</h5>
	<p>
		3. Multiplicar o dividir ambos lados de una ecuación por una cantidad diferente de cero, 
        produce ecuaciones equivalentes, como por ejemplo
    </p>
    <Formula math={"2x+6-6=2"} />
    <Formula math={"\\frac{2x}{2} = \\frac{2}{2}"} />
    <h5>En general si a=b y c≠0 entonces ac = bc</h5>
	<Divider />
	<h2>4. Ejemplos</h2>

	<h3>Resolver con uso de las propieades:</h3>
    <Formula math={"2x+4(50-x) = 140"} />
    <h4>Desarrollando el producto entre paréntesis y sumando términos semejantes se tiene  </h4>
	<Formula math={'2x+200-4x = 140'} />
    <Formula math={'-2x+200 = 140'} />
	<h4>Ahora se resta 200 a ambos lados de la ecuación (propiedad aditiva) y luego simplificando </h4>
	<Formula math={'-2x+200 -200=140-200'} />
    <Formula math={'-2x = -60'} />
    <h4>Dividiendo ambos lados de la ecuación anterior entre -2, se obtiene el valor de x </h4>
	<Formula math={'-2x = -60'} />
    <Formula math={'x = 30'} />
    <!--comprobacion ocualta-->
    <h4>Comprobacion</h4>
    <Formula math={'2(30) + 4(50-30) = 140'}  />
    <Formula math={'60 + 2(20) = 140'} />
    <Formula math={'60+80=140'} />
    <Formula math={'140=140'} />
    <!--comprobacion ocualta-->

    <Divider />
	<h3>Resolver ecuacion con productos:</h3>
    <Formula math={'(x+2)(5x-1) = 5x(x+1)'}  />
    <h4>efectuando ambos lados:</h4>
    <Formula math={'5x^{2} + 10x -x -2 = 5x^{2} + 5x'}  />
    <Formula math={'5x^{2} + 9x -2 = 5x^{2} + 5x'}  />
	<h4>Restando</h4>
	<Formula math={"9x-2=5x"} />
    <Formula math={"9x=5x+2"} />
    <Formula math={"4x = 2"} />
    <h4>dividiendo ambos lados</h4>
    <Formula math={"\\frac{4x}{4} = \\frac{2}{4}  -> x=\\frac{1}{2}"} />
          <!--comprobacion ocualta-->
	<h4>Comprobacion del resultado:</h4>
	<Formula math={"(x+2)(5x-1) = 5x(x+1)"} />
    <Formula math={"(\\frac{1}{2}+2)(\\frac{5}{2}-1)=5(\\frac{1}{2})(\\frac{1}{2}+1)"} />
    <Formula math={"(\\frac{5}{2})(\\frac{3}{2}) =\\frac{5}{2}(\\frac{3}{2})"} />
    <Formula math={"\\frac{15}{4}=\\frac{15}{4}"} />
      <!--comprobacion ocualta-->

    <Divider />
    <h2>Resolver una solucion con fracciones algebraicas: </h2>
    <Formula math={'(\\frac{2}{2x-1})+(\\frac{2}{x-7}) =1 - (\\frac{2x^{2} -1 }{2x^{2} - 15x +7})'}  />
    <h4>por medio de los casos de factorizacion tomamos el trinomio y se factoriza:</h4>
    <!--comprobacion ocualta-->
    <Formula math={"2x^{2} -15x + 7 = (2x-1)(x-7)"} />
    <h4>comprobando</h4>
    <Formula math={"2x^{2} -15x + 7 = (2x-)(2x-) ="} />
    <Formula math={"(2x-1)(2x-14) = /2 = (2x-1)(x-7)"} />
<!--comprobacion ocualta-->
<Formula math={'(2x-1)(x-7)((\\frac{2}{2x-1})+(\\frac{2}{x-7})) =(2x-1)(x-7)(1 - (\\frac{2x^{2} -1 }{2x^{2} - 15x +7}))'}  />
<Formula math={"2(x-7)+2(2x-1) = (2x-1)(x-7)-(2x^{2})"} />
<h4>Multiplicamos:</h4>
<Formula math={"2x-14+4x-2 = 2x^{2} -x -14x+7-2x^{2} +1"} />
<Formula math={"6x-16=-15x+8"} />
<Formula math={"6x + 15x = 8 + 16"} />
<Formula math={"21x = 24"} />
<Formula math={"x=\\frac{24}{21} = \\frac{8}{7}  "} />
   

<Divider />
<Divider />
<h2>Ejercicios de tarea </h2>
<h3>1. </h3>
<Formula math={'\\frac{2x}{x^{2}-4}-\\frac{4}{2-x} =\\frac{12}{2x-3}'}  />
<h3>2. </h3>
<Formula math={'\\frac{5x}{2}-5 =\\frac{2x-4}{6}'}  />
</div>
