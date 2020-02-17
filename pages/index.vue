<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <h1 v-if="currentUser" class="mb-5">Welcome user id: {{ currentUser.uid }}</h1>
          <h2 v-if="credential" class="mb-5">{{ credential.name }}</h2>
        </v-col>
        <v-col md="6" cols="12">
          <login-form
            class="mb-5"
            v-if="!currentUser"
            @updateUser = getDataFromChild />
        </v-col>
        <v-col md="6" cols="12">
          <register-form v-if="!currentUser" class="mb-5" />
        </v-col>
        <v-col cols="12">
          <log-out-button v-if="currentUser" />
        </v-col>
        <v-col cols="12">
          <v-card v-if="currentUser" class="mt-3">
            <v-card-title>What next?</v-card-title>
            <v-card-text>Lest go to the dashboard!</v-card-text>
            <v-card-actions>
              <nuxt-link to="/db">Dashboard</nuxt-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
    import loginForm from "../components/loginForm"
    import registerForm from "../components/registerForm"
    import logOutButton from "../components/logOutButton"

		export default {
				components: {
				    loginForm, registerForm, logOutButton
				},
        middleware: 'router-auth',
				data() {
						return {
						    currentUser: null,
                credential: null,
						}
				},
        created: function () {
            this.getDataFromChild()
        },
				methods: {
            getDataFromChild() {
                this.currentUser = this.$store.state.users.currentUser
                this.credential = this.$store.state.users.credentials
            },
				},
		}
</script>
