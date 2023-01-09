<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
		<book-list />
		<shopping-cart />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import BookList from '@/components/BookList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

export default Vue.extend({
	name: 'HomeView',
	components: {
		HelloWorld,
		BookList,
		ShoppingCart,
	},
});
</script>
