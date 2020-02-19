<template>
	<v-banner>
		<v-btn @click="logOut" outlined>Logo out</v-btn>
	</v-banner>
</template>

<script>
	export default {
		name: "LogOutButton",
		methods: {
			logOut() {
				let val = null
				this.$store.commit('users/setCurrentUser', val)
				this.$router.go('/')
			}
		},
	}
</script>

<style scoped>

</style>
