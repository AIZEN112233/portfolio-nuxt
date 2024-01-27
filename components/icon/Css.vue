<template>
	<svg
		@mouseenter="hover = true"
		@mouseleave="hover = false"
		xmlns="http://www.w3.org/2000/svg"
		width="50"
		height="50"
		viewBox="0 0 128 128">
		<path
			class="duration-400"
			:fill="!hover ? '#1572B6' : '#EBEBEB'"
			d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"></path>
		<path
			class="duration-400"
			:fill="!hover ? '#1572B6' : '#fff'"
			d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"></path>
		<path
			class="duration-400"
			:fill="!hover ? '#EBEBEB' : '#1572B6'"
			d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"></path>
		<path
			class="duration-400"
			:fill="!hover ? '#EBEBEB' : '#1572B6'"
			d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"></path>
		<path
			class="duration-400"
			:fill="!hover ? '#fff' : '#1572B6'"
			d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"></path>
		<path
			class="duration-400"
			:fill="!hover ? '#fff' : '#1572B6'"
			d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"></path>
	</svg>
</template>

<script lang="ts" setup>
	const hover = ref(false);
</script>
