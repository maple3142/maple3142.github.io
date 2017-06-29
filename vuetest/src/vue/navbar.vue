<template lang="html">
	<b-navbar toggleable type="default" variant="success">

      <b-link class="navbar-brand" to="/">
        <span>{{ title }}</span>
      </b-link>

      <b-nav is-nav-bar>
        <navlink to="/login" v-if="!this.$root.login">login</navlink>
        <navlink to="/note" v-if="this.$root.login">note</navlink>
        <navlink to="/logout" v-if="this.$root.login">logout</navlink>
        <navlink to="/about">about</navlink>
      </b-nav>

    </b-navbar>
</template>

<script>
import navlink from './navlink.vue';
export default {
  props: ['title'],
  components: { navlink }
}
</script>