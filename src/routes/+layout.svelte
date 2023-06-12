<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	let hide: boolean = false;

	onMount(() => {
		setTimeout(() => {
			hide = true
		}, 10);
	})
</script>

<body>
	<div class={`${hide ? '-translate-y-full pointer-events-none' : 'translate-y-0'} transition-all duration-1000 bg-white w-screen max-w-full h-screen z-[100000] absolute justify-center items-center flex flex-col-reverse`}>
		<div class="w-96 h-40">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 3367.76 1124.07"
				stroke="#F58A07"
				width="100%"
				height="100%"
				stroke-width="70px"
				fill="none"
				stroke-linecap="round"
			>
				<path
					class="path"
					d="m23.83,295.45s161.03-210.58,198.19-126.97-43.35,603.87-43.35,603.87c0,0,72.77-639,298.84-635.9,0,0,69.68-5.13,78.97,112.55s-68.13,523.35-68.13,523.35c0,0,133.16-545.03,247.74-597.68s130.06,46.45,130.06,46.45l-55.74,334.45s-34.06,136.26,21.68,167.23,148.65,3.1,188.9-43.35"
				/>
				<path
					class="path3"
					d="m1232.83,454.95s-202.54,36.68-200.26,178.51,42.62,126.99,42.62,126.99c0,0,67.03,23.71,137.85-104.83,44.7-81.13,62.84-164.45,54.15-195.02-5.08-17.87-60.66,1.31-60.66,1.31"
				/>
				<path
					class="path"
					d="m1257.08,478.85s-62.38,202.74,12.94,257,175.21-128.5,175.21-128.5c0,0,30.54-98.34,16.26-228.38-14.83-135.02,82.96-316.87,130.08-246.22,30.42,45.61,23.22,87.58-10.06,166.28-33.57,79.39-136.28,161.57-136.28,161.57"
				/>
				<line class="path" x1="1338.38" y1="436.51" x2="1675.19" y2="436.51" />
				<path
					class="path2"
					d="m1464.83,469.42s-14.96,256.3,59.37,266.43,192.79-73.49,192.79-73.49c0,0,185.83-55.75,185.83-144.03s-104.53-57.74-104.53-57.74c0,0-104.53,48.45-90.59,157.62s137.05,118.48,137.05,118.48c0,0,134.72-2.34,209.05-167.26s241.57-315.9,153.31-506.37-192.79,504.05-192.79,504.05c0,0-16.26,164.95,120.79,169.58s120.79-185.84,120.79-185.84c0,0,32.52-82.96-76.65-90.26s134.72,139.04,134.72,139.04c0,0,66.48-4.66,89.74-125.64,30.5-158.64,30.82-71.6,14.93-55.54,0,0-41.67,260.16,0,299.64s171.74-116.14,192.65-285.71-83.62,258.48-20.91,303.45,158.61-89.98,158.61-89.98c11.56-73.48-29.38,31.62,48.12,89.98,68.57,51.65,155.63-122.27,155.63-122.27,0,0,21.1,43.67,0-152.97-23.03-214.58-262.03,124.57-181.18,238.92"
				/>
				<path
					class="path"
					d="m2966.16,568.45s-99.36,507.37-176.02,523.63-78.98-72.01-78.98-72.01c0,0-2.32-144.01,383.26-376.3s197.44-111.5,197.44-111.5"
				/>
			</svg>
		</div>
		<div class="w-40">
			<img src="/images/logo-orange.png" alt="logo" />
		</div>
	</div>
	<slot />
</body>

<style>
	body {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	.path {
		stroke-dasharray: 4000;
		stroke-dashoffset: 0;
		animation: dash 2s linear forwards;
	}

	@keyframes dash {
		from {
			display: none;
			stroke-dashoffset: 4000;
		}
		to {
			stroke-dashoffset: 0;
		}
	}

	.path3 {
		stroke-dasharray: 4000;
		stroke-dashoffset: 0;
		animation: dash 2s linear forwards;
	}

	@keyframes dash3 {
		from {
			display: none;
			stroke-dashoffset: 4000;
		}
		to {
			stroke-dashoffset: 0;
		}
	}

	.path2 {
		stroke-dasharray: 7000;
		stroke-dashoffset: 0;
		animation: dash2 3s linear forwards;
	}

	@keyframes dash2 {
		from {
			display: none;
			stroke-dashoffset: 7000;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
</style>
