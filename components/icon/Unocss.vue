<template>
	<div
		class="relative w-fit p-2 border-#858585 border-4 rounded-xl after:(absolute duration-400 content-[''] h-0 w-0 rounded-[100px] left-1/2 top-1/2 bg-#858585 -z-100) after:hover:(w-full h-full top-0 left-0 rounded-md)">
		<svg
			@mouseenter="hover = true"
			@mouseleave="hover = false"
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 32 32">
			<g stroke-width=".13">
				<path
					:fill="!hover ? '#858585' : '#fff'"
					class="duration-400"
					d="M17.007 23.491a6.52 6.52 0 1 1 13.04 0a6.52 6.52 0 0 1-13.04 0"></path>
				<path
					:fill="!hover ? '#ccc' : '#fff'"
					class="duration-400"
					d="M17.007 8.51a6.52 6.52 0 0 1 13.04 0v5.867c0 .36-.292.652-.652.652H17.659a.652.652 0 0 1-.652-.652z"></path>
				<path
					:fill="!hover ? '#4d4d4d' : '#fff'"
					class="duration-400"
					d="M14.993 23.491a6.52 6.52 0 1 1-13.04 0v-5.868c0-.36.292-.652.652-.652h11.736c.36 0 .652.292.652.652z"></path>
			</g>
		</svg>
	</div>
</template>
<script lang="ts" setup>
	const hover = ref(false);
</script>
