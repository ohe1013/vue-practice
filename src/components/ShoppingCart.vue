<template>
	<div class="shopping-cart">
		<h1>장바구니</h1>
		<table>
			<caption>
				장바구니에 담긴 도서
			</caption>
			<tr>
				<th>제목</th>
				<th>가격</th>
				<th>수량</th>
			</tr>
			<tr v-for="book in books" :key="book.id">
				<td>{{ book.name }}</td>
				<td>{{ book.price }}</td>
				<td>{{ book.quantity }}</td>
			</tr>
			<tfoot>
				<tr>
					<th>총계</th>
					<td>{{ total }}</td>
					<td>
						<button type="button" @click="purchageBooks">구매</button>
					</td>
				</tr>
			</tfoot>
		</table>
		<p v-if="purchangeStatus">{{ purchangeStatus }}</p>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
	name: 'ShoppingCart',
	computed: {
		...mapState({
			purchangeStatus: state => state.ModuleCart.purchangeStatus,
		}),
		// books() {
		// 	return this.$store.getters.cartBooks;
		// },
		// total() {
		// 	return this.$store.getters.cartTotal;
		// },
		...mapGetters({
			books: 'ModuleCart/cartBooks',
			total: 'ModuleCart/cartTotal',
		}),
	},
	methods: {
		...mapActions({
			purchageBooks: 'ModuleCart/purchange',
		}),
	},
};
</script>

<style></style>
