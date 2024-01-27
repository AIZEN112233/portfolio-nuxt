<template>
	<header
		ref="header"
		class="fixed top-10 flex w-full justify-center">
		<ul
			class="navlink flex gap-52px font-600 border-4 border-primary rounded-full px-62px hover:(shadow-[0_0_10px_4px_#57084A]) duration-400 py-17px">
			<li
				ref="link"
				class="text-20px hover:(scale-110) duration-400"
				v-for="link in navLinks"
				:key="link.path">
				<NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
			</li>
		</ul>
	</header>
	<slot />
</template>

<script lang="ts" setup>
	const header = ref();
	const link = ref();

	import { navLinks } from "@/constants";
	import gsap from "gsap";
	onMounted(() => {
		gsap.from(header.value, {
			y: -100,
			duration: 1,
		});

		gsap.from(link.value, {
			opacity: 0,
			delay: 0.5,
			stagger: 0.2,
		});
		gsap.to(link.value, {
			duration: 1,
			opacity: 1,
			delay: 0.5,
			stagger: 0.2,
		});
	});
</script>
