<template>
	<v-banner>
		<v-btn @click="logOut" outlined>Logo out</v-btn>
	</v-banner>
</template>

<script>
	import firebase from 'firebase'
	export default {
		name: "LogOutButton",
		methods: {
			logOut() {
				let val = null
				this.$store.commit('users/setCurrentUser', val)
				firebase.auth().signOut()
				this.$router.go('/')
			}
		},
	}
</script>

<style scoped>

</style>
