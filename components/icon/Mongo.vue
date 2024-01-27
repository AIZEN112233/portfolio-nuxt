<template>
	<div
		class="relative w-fit p-2 border-#48a547 border-4 rounded-xl after:(absolute duration-400 content-[''] h-0 w-0 rounded-[100px] left-1/2 top-1/2 bg-#48a547 -z-100) after:hover:(w-full h-full top-0 left-0 rounded-md)">
		<svg
			@mouseenter="hover = true"
			@mouseleave="hover = false"
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 32 32">
			<path
				class="duration-400"
				:fill="!hover ? '#999875' : '##fff'"
				d="m16.62 30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741 3.423-.149a2.712 2.712 0 0 0-1.333 1.523A14.1 14.1 0 0 0 16.62 30" />
			<path
				class="duration-400"
				:fill="!hover ? '#48a547' : '#fff'"
				d="M17.026 26.329a13.223 13.223 0 0 0 5-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a9.792 9.792 0 0 1-.825-1.6l.277 18.069s-.574 5.522.874 6.187" />
			<path
				:fill="!hover ? '#69b655' : '#fff'"
				class="duration-400"
				d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 0 1 5.519-11.648A1.725 1.725 0 0 0 15.846 2c.381.82.319 12.243.359 13.579c.155 5.197-.289 10.009-.718 10.99" />
		</svg>
	</div>
</template>

<script lang="ts" setup>
	const hover = ref(false);
</script>
