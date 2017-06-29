<template lang="html">
	<div v-if="this.$root.login">
		<div class="col-md-offset-4 col-md-4">
			<h2 class="text-center">{{ this.$root.name }}的記事本</h2>
			<div class="form-group">
				<label for="notename">名稱</label>
				<b-form-input id="notename" v-model="notename" v-on:keyup="changenote">
				</b-form-input>
			</div>
			<div class="form-group">
				<label for="notename">內容</label>
				<b-form-input id="notename" textarea v-model="text" :rows="15" v-on:keyup="save">
				</b-form-input>
			</div>
			<spoiler btn="展開/摺疊說明" title="說明">
				只要輸入就會自動儲存和載入
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
			notename: '',
			text: ''
		}
	},
	methods: {
		save(){
			var field=this.$root.name+'-note-'+this.notename;
			localStorage[field]=this.text;
		},
		changenote(){
			var field=this.$root.name+'-note-'+this.notename;
			this.text=localStorage[field]||'';
			localStorage[this.$root.name+'-lastnote']=this.notename;
		}
	},
	created(){
		this.notename=localStorage[this.$root.name+'-lastnote']||'';
		this.changenote();
	}
}
</script>