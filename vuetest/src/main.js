import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './style.css';
import '../index.html';/* index.html hot reload */
Vue.use(BootstrapVue);
Vue.use(VueRouter);

import navbar from './vue/navbar.vue';
import root from './vue/root.vue';
import login from './vue/login.vue';
import note from './vue/note.vue';
import logout from './vue/logout.vue';
import about from './vue/about.vue';
const router=new VueRouter({
	routes: [
		{path: '/', component: root},
		{path: '/login', component: login},
		{path: '/note', component: note},
		{path: '/logout', component: logout},
		{path: '/about', component: about}
	]
});
var app=new Vue({
	el: '#app',
	data: {
		login: localStorage.login||false,
		name: localStorage.name||'guest'
	},
	components: { navbar },
	router
}).$mount('#app');