<template>
	<div
		class="min-h-fit block p-6 mx-2 max-w-sm bg-grayblue rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
	>
		<slot name="stats"></slot>
		<h4 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
			<slot name="header"></slot>
		</h4>
		<p class="font-normal text-gray-700 dark:text-gray-400">
			<slot name="paragraph"></slot>
			<br />
			<slot class="mt-2" name="description"></slot>
		</p>
	</div>
</template>
<script>
	export default {
		name: "TaskCard",
	};
</script>
