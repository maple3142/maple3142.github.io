<template lang="html">
	<div>
		<b-btn v-b-toggle.data variant="primary">{{ this.$props.btn }}</b-btn>
		<b-collapse id="data">
			<b-card :title="this.$props.title">
				<slot></slot>
			</b-card>
		</b-collapse>
	</div>
</template>

<script>
export default {
	props: ['btn','title']
}
</script>