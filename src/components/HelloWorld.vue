<template>
	<div class="hello">
		<input type="text" v-model="user.email" placeholder="아이디" />
		<input
			@keyup.enter="submitLogIn"
			type="password"
			v-model="user.password"
			placeholder="비밀번호"
		/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters, mapActions } from 'vuex';

export default Vue.extend({
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	data: () => {
		return {
			user: {
				email: '',
				password: '',
			},
		};
	},
	methods: {
		...mapActions('authModule', ['login']),
		submitLogin() {
			this.login(this.user);
		},
	},
	computed: {},
	created() {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
