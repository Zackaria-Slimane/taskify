<template>
	<div>
		<nav
			class="bg-grayblue w-full rounded px-4 py-4 text-white shadow-md dark:bg-gray-800 sm:px-4"
		>
			<div class="container mx-auto flex flex-wrap items-center justify-between">
				<router-link
					id="logo"
					class="font-lobster cursor-pointer self-center whitespace-nowrap text-4xl hover:text-blue-300 dark:text-white"
					to="/"
					>Taskify
				</router-link>

				<button
					type="button"
					class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-white md:hidden"
					@click="toggleMenu"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="text-mainblue h-6 w-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/>
					</svg>
					<svg
						class="hidden h-6 w-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				<div
					class="font-atitle w-full md:block md:w-auto"
					:class="{ hidden: !isOpen }"
					id="mobile-menu"
				>
					<nav
						class="mt-4 p-3 flex flex-col font-bold md:mt-0 md:flex-row md:space-x-10 h-10"
					>
						<router-link
							class="font-poppins text-mainblue block cursor-pointer py-2 pr-4 pl-3 text-xl hover:text-blue-500 dark:text-white md:p-0"
							to="/"
							>Home
						</router-link>
						<router-link
							class="font-poppins text-mainblue block cursor-pointer py-2 pr-4 pl-3 text-xl hover:text-blue-500 dark:text-white md:p-0"
							to="/login"
							>Login
						</router-link>
					</nav>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "appHeader",
		data() {
			return {
				isOpen: false,
			};
		},
		methods: {
			toggleMenu() {
				this.isOpen = !this.isOpen;
			},
		},
	};
</script>

<style scoped>
	#logo {
		color: #264653;
	}
	.router-link-active {
		color: #0070f3;
	}
</style>
