<template lang="html">
	<div>
		<div class="col-md-offset-4 col-md-4 text-center">
			<h2>首頁</h2>
			<p v-if="!this.$root.login">
				請先登入!!!
			</p>
			<p v-if="this.$root.login">
				{{ this.$root.name }}已登入
			</p>
		</div>
	</div>
</template>

<script>
export default {
  
}
</script>