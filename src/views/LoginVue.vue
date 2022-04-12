<template>
	<div class="bg-grayblue font-poppins h-screen">
		<div class="flex justify-center min-h-screen antialiased container mx-auto">
			<div class="container sm:mt-40 mt-24 my-auto max-w-md p-3 rounded-lg shadow-lg">
				<!-- header -->
				<div class="text-center m-6">
					<h1 class="text-3xl font-semibold text-gray-700 hover:text-blue-300 my-5">
						Login
					</h1>
					<p class="text-gray-500 my-4">
						You can use the following trial account :
						<br />
						<span class="text-gray-600"
							>Username : <span class="text-blue-700"> trytaskify</span></span
						>
						<br />
						<span class="text-gray-600"
							>Password : <span class="text-blue-700">taskify</span></span
						>
					</p>
				</div>
				<!-- sign-in -->
				<div class="m-6 mt-16">
					<!-- username-->
					<div class="mb-6">
						<label
							for="email"
							class="block mb-2 text-sm text-gray-600 dark:text-gray-400 text-left"
							>Username</label
						>
						<input
							type="text"
							name="username"
							ref="username"
							placeholder="Your username"
							class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
						/>
					</div>
					<!--pass-->
					<div class="mb-6">
						<label
							for="email"
							class="block mb-2 text-sm text-gray-600 dark:text-gray-400 text-left"
							>Password</label
						>
						<input
							type="password"
							name="password"
							ref="password"
							placeholder="Your password"
							class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
						/>
					</div>
					<div class="mb-6 mt-16">
						<button
							type="button"
							class="w-1/3 px-3 mr-5 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none duration-100 ease-in-out"
						>
							Login
						</button>

						<button
							type="button"
							class="w-1/3 px-3 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none duration-100 ease-in-out"
						>
							Register
						</button>
					</div>

					<!-- seperator -->
					<div class="flex flex-row justify-center mb-8 mt-10">
						<span class="absolute px-4 text-gray-500">or sign-in with</span>
						<div class="w-full bg-gray-200 mt-3 h-px"></div>
					</div>
					<!-- alternate sign-in -->
					<div class="flex flex-row gap-2">
						<button
							disabled="true"
							aria-disabled="true"
							class="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								class="w-5"
								viewBox="0 0 48 48"
							>
								<defs>
									<path
										id="a"
										d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
									/>
								</defs>
								<clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath>
								<path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
								<path
									clip-path="url(#b)"
									fill="#EA4335"
									d="M0 11l17 13 7-6.1L48 14V0H0z"
								/>
								<path
									clip-path="url(#b)"
									fill="#34A853"
									d="M0 37l30-23 7.9 1L48 0v48H0z"
								/>
								<path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
							</svg>
							Google
						</button>
					</div>
					<span class="text-sm text-gray-400">Temporarly unavailble </span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "LoginVue",
	};
</script>
