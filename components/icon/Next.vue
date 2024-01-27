<template>
	<div
		class="relative w-fit p-2 border-#fff border-4 rounded-xl after:(absolute duration-400 content-[''] h-0 w-0 rounded-[100px] left-1/2 top-1/2 bg-#fff -z-100) after:hover:(w-full h-full top-0 left-0 rounded-md)">
		<svg
			@mouseenter="hover = true"
			@mouseleave="hover = false"
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 512 512">
			<path
				:fill="!hover ? '#fff' : '#000'"
				class="duration-400"
				d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064m-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z"></path>
		</svg>
	</div>
</template>

<script lang="ts" setup>
	const hover = ref(false);
</script>
