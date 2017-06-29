<template lang="html">
	<div>
		<div class="col-md-offset-4 col-md-4 text-center">
			<h2>已登出</h2>
			<router-link to="/">
				回到首頁
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	created(){
		localStorage.login=this.$root.login=false;
		localStorage.name=this.$root.name='guest';
		return {};
	}
}
</script>