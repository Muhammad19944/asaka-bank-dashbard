<template>
	<div class="login-view h-100 d-flex">
		<div class="auth-view-container ma-auto">
			<form class="form-view shadow-sm px-10 pt-12 pb-15 rounded">
				<h3 class="font-700 text-center mb-7">Войти в систему</h3>

				<app-text-field
					v-model="$v.userCredentials.username.$model"
					:error="$v.userCredentials.username.$error"
					label="Логин"
					placeholder="Логин"
				/>

				<app-password-field
					v-model="$v.userCredentials.password.$model"
					:error="$v.userCredentials.password.$error"
					:rules="[(v) => v && v.length >= 8 || this.$t('enterLeast')]"
					label="Пароль"
					placeholder="Пароль"
				/>

				<div class="app-input text-center">
					<app-button @click="send">
						<template #append>
							<log-in-icon size="1.35x"></log-in-icon>
						</template>
						<template>
							Войти в систему
						</template>
					</app-button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import AppTextField from "@/common/components/base/AppTextField";
import AppPasswordField from "@/common/components/base/AppPasswordField";
import AppButton from "@/common/components/base/AppButton";

import { LogInIcon } from "vue-feather-icons"
import { required, minLength } from "vuelidate/lib/validators";

export default {
	name: "Login",
	components: {
		AppTextField,
		AppPasswordField,
		AppButton,
		LogInIcon
	},
	data() {
		return {
			userCredentials: {
				username: "",
				password: ""
			}
		}
	},
	validations: {
		userCredentials: {
			username: { required },
			password: {
				required,
				minLength: minLength(8)
			},
		}
	},
	mounted() {
		console.log(this.$store)
	},
	methods: {
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			this.$store.dispatch("auth/fetchUserLogin", this.userCredentials)
			.then(() => {
				this.$router.push({ name: "MainLayout" });
			})
		}
	}
}
</script>

<style>
.auth-view-container {
	max-width: 600px;
	width: 100%;
}
</style>
