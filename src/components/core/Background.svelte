<script lang="ts">
	import * as Three from 'three';
	import * as Threlte from '@threlte/core';

	export let color: Three.ColorRepresentation = '#ffffff';

	const { scene } = Threlte.useThrelte();
	scene.background = new Three.Color(color);

	function addStar() {
    
		const geometry = new Three.BoxGeometry(1, 20, 1);
		const material = new Three.MeshStandardMaterial({
			color: Three.MathUtils.randInt(0xf58A07, 0xFE6544)
		});
		const star = new Three.Mesh(geometry, material);

		const [x, y, z] = Array(3)
			.fill()
			.map(() => Three.MathUtils.randFloatSpread(60));

		star.position.set(Math.floor(Math.random() * 10) - 20, -20, z);
		scene.add(star);
	}

	Array(50).fill().forEach(addStar);
</script>
