<template>
	<div
		class="relative w-fit p-2 border-#41b883 border-4 rounded-xl after:(absolute duration-400 content-[''] h-0 w-0 rounded-[100px] left-1/2 top-1/2 bg-#41b883 -z-100) after:hover:(w-full h-full top-0 left-0 rounded-md)">
		<svg
			@mouseenter="hover = true"
			@mouseleave="hover = false"
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 128 128">
			<path
				fill="none"
				d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"></path>
			<path
				fill="#35495e"
				class="duration-400"
				d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"></path>
			<path
				:fill="!hover ? '#41b883' : '#fff'"
				class="duration-400"
				d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"></path>
		</svg>
	</div>
</template>

<script lang="ts" setup>
	const hover = ref(false);
</script>
