<template>
	<div id="title">
		<div v-if="openDialog" class="backdrop" @click="$emit('close')"></div>
		<transition name="modal">
			<dialog open v-if="openDialog">
				<slot></slot>
			</dialog>
		</transition>
	</div>
</template>

<script>
	export default {
		props: ["openDialog", "title"],
		emits: ["close"],
	};
</script>

<style scoped>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 10;
		background-color: rgba(0, 0, 0, 0.75);
	}

	dialog {
		position: fixed;
		top: 30vh;
		width: 45rem;
		left: 60vh;
		margin: 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 12px;
		padding: 1.5rem;
		background-color: white;
		z-index: 100;
		border: none;
		/* animation: modal 0.3s ease-out forwards; */
	}
	@media only screen and (max-width: 600px) {
		dialog {
			top: 20vh;
			left: 0;
			margin: 0 auto;
			width: 80vw;
		}
	}

	.modal-enter-active {
		animation: modal 0.3s ease-out;
	}

	.modal-leave-active {
		animation: modal 0.3s ease-in reverse;
	}

	@keyframes modal {
		from {
			opacity: 0;
			transform: translateY(-50px) scale(0.9);
		}

		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
</style>
