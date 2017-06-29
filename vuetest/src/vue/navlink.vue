<template lang="html">
	<router-link :to="this.$props.to" class="nav-item" tag="li">
    	<a class="nav-link"><slot></slot></a>
    </router-link>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: 'link'
		},
		to: {
			type: String,
			default: '#'
		}
	}
}
</script>