<template>
	<div
		class="relative w-fit p-2 border-#e44f26 border-4 rounded-xl after:(absolute duration-400 content-[''] h-0 w-0 rounded-[100px] left-1/2 top-1/2 bg-#e44f26 -z-100) after:hover:(w-full h-full top-0 left-0 rounded-md)">
		<svg
			@mouseenter="hover = true"
			@mouseleave="hover = false"
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 32 32">
			<path
				class="duration-400"
				:fill="!hover ? '#e44f26' : '#fff'"
				d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"></path>
			<path
				class="duration-400"
				:fill="!hover ? '#f1662a' : '#fff'"
				d="m16 27.858l8.17-2.265l1.922-21.532H16z"></path>
			<path
				class="duration-400"
				:fill="!hover ? '#ebebeb' : '#e44f26'"
				d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z"></path>
			<path
				class="duration-400"
				:fill="!hover ? '#fff' : '#f1662a'"
				d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-.833zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z"></path>
		</svg>
	</div>
</template>
<script lang="ts" setup>
	const hover = ref(false);
</script>
