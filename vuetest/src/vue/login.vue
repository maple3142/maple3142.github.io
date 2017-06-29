<template lang="html">
	<div v-if="!this.$root.login">
		<div class="col-md-offset-4 col-md-4">
			<h2 class="text-center">登入</h2>
			<form>
				<div class="form-group">
					<label for="username">帳號</label>
					<b-form-input id="username" v-model="acc">
					</b-form-input>
				</div>
				<div class="form-group">
					<label for="password">密碼</label>
					<b-form-input id="password" type="password" v-model="pwd">
					</b-form-input>
				</div>
				<div class="form-group">
					<b-button id="submit" type="submit" class="btn btn-primary" @click="login">登入</b-button>
				</div>
			</form>
			<b-alert variant="danger" dismissible :show="this.loginwrong && !this.$root.login" @dismissed="loginwrong=false">
				帳號或密碼錯誤!
			</b-alert>
			<spoiler btn="展開/摺疊登入說明">
				<b-card title="登入說明">
					帳號密碼任意打，只要相同就可以登入了
				</b-card>
			</spoiler>
		</div>
	</div>
</template>

<script>
import spoiler from './spoiler.vue';
export default {
	components: { spoiler },
	data(){
		return {
			acc: '',
			pwd: '',
			loginwrong: false
		}
	},
	methods: {
		login(){
			if(this.acc===this.pwd){
				localStorage.login=this.$root.login=true;
				localStorage.name=this.$root.name=this.acc;
				this.$router.push('/');
			}
			else{
				this.acc=this.pwd='';
				this.loginwrong=true;
			}
		}
	}
}
</script>