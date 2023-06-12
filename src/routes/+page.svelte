<script>
	import Background from '@components/core/Background.svelte';
	import Header from '@components/layout/Header.svelte';
	import { Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { OrthographicCamera } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';

	const scale = spring(1);
</script>

<main class="w-screen max-w-full max-h-full h-screen flex justify-center items-center">
	<div class="w-full bg-black h-full">
		<Canvas>
			<OrthographicCamera
				position={{ x: 40, y: 20, z: 20 }}
				lookAt={{ x: 0, y: 0, z: 0 }}
				zoom={50}
			/>

			<T.DirectionalLight castShadow position={[3, 10, 10]} />
			<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
			<T.AmbientLight intensity={0.2} />

			<Background color="#F5F5F5" />
		</Canvas>
	</div>
</main>

<div class="absolute top-20 h-20 lg:w-[600px] w-[500px] left-[10%]">
	<img src="/images/logo-full-orange.png" alt="" />
	<p class="text-lg">
		Descubre el fascinante mundo de las matemáticas básicas: tu guía confiable para comprender,
		aprender y disfrutar de los fundamentos numéricos que rigen nuestro universo.
	</p>
	<p class="text-lg">
		Comenzemos con temas basicos, lo cuales podemos agregar soluciones rapidas y efectivas pára que
		podamos realizar comprension.
	</p>
	<div class="w-full flex flex-row-reverse justify-between">
		<button
			class="bg-primary mr-8 px-4 py-2 rounded-full text-xl hover:bg-orange-500 transition duration-300 text-white"
		>
			<a href="/docs/basic/lineal-equation"><h4>Comencemos</h4></a>
		</button>
		<div class="flex justify-center flex-col items-center">
      <h4>Código</h4>
			<div class="h-8 w-8">
				<a href="https://github.com/TatoBig/matebug" target="_blank" rel="noopener noreferrer">
					<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"
						><path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/></svg
					>
				</a>
			</div>
		</div>
	</div>
</div>
