<template>
	<v-card>
		<v-card-title v-if="!isRegistered">Register</v-card-title>
		<v-card-text>
			<v-form v-if="!isRegistered" @submit.prevent class="mb-5">
				<v-text-field
					v-model.trim="registerForm.name"
					type="text"
					placeholder="Your name and surname"
					solo-inverted
				/>
				<v-text-field
					v-model.trim="registerForm.title"
					type="text"
					placeholder="Title"
					solo-inverted
				/>
				<v-text-field
					v-model.trim="registerForm.email"
					type="text"
					placeholder="Email"
					solo-inverted
				/>
				<v-text-field
					v-model="registerForm.password"
					:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
					:type="showPassword ? 'text' : 'password'"
					name="input-10-1"
					label="Password"
					hint="At least 6 characters"
					counter
					solo-inverted
					@click:append="showPassword = !showPassword"
				/>
				<v-text-field
					v-model="registerForm.passwordConfirm"
					:append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
					:type="showPassword2 ? 'text' : 'password'"
					name="input-10-1"
					label="Password confirmation"
					hint="At least 6 characters"
					counter
					solo-inverted
					@click:append="showPassword2 = !showPassword2"
				/>
				<v-btn @click="signUp" depressed large color="primary">Sign Up</v-btn>
			</v-form>
			<v-app-bar v-if="registerError.length > 0">
				<strong>{{ registerError }}</strong>
			</v-app-bar>
			<v-app-bar v-if="isRegistered">
				<strong>Registration was successful, continue to login form</strong>
			</v-app-bar>
		</v-card-text>
	</v-card>
</template>

<script>
	import firebase from 'firebase'

	export default {
		name: "RegisterForm",
		data() {
			return {
				showPassword: false,
				showPassword2: false,
				isRegistered: false,
				registerError: '',
				registerForm: {
						name: '',
						title: '',
						email: '',
						password: '',
						passwordConfirm: ''
				},
			}
		},
		methods: {
				signUp() {
					if(this.registerForm.password === this.registerForm.passwordConfirm) {
						//Register user
						firebase.auth().createUserWithEmailAndPassword(this.registerForm.email, this.registerForm.password).then(user => {
							const account = {
								uid: user.user.uid,
								email: this.registerForm.email,
								name: this.registerForm.name,
								title: this.registerForm.title,
							}
							//Put data into Firestore
							firebase.firestore().collection('users').doc(user.user.uid).set(account)
							this.isRegistered = true
						}).catch(err => {
							this.registerError = err.message
						})
					} else {
						this.registerError = "Passwords aren't matching"
					}
				},
		},
	}
</script>

<style lang="scss" scoped>
	form {
		display: flex;
		flex-direction: column;
	}
</style>
