<template>
	<div class="book-list">
		<h1>도서 목록</h1>
		<img
			v-if="loading"
			src="https://i.imgur.com/JfPpwOA.gif"
			alt="로딩 중..."
		/>
		<ul v-else>
			<li v-for="(book, i) in books" :key="i">
				{{ book.name }} / {{ book.price }}
				<button
					:disabled="checkOutOfStock(book)"
					type="button"
					@click="addBookToCart(book)"
				>
					카트추가
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
	name: 'BookList',
	data: () => {
		return {
			loading: false,
			bookIndex: 1,
		};
	},
	methods: {
		...mapActions({
			fetchBooks: 'booksModule/fetchBooks',
			addBookToCart: 'cartModule/addBookToCart',
		}),
	},
	computed: {
		...mapState({
			books: state => state.ModuleBooks.books,
		}),
		...mapGetters({ checkOutOfStock: 'booksModule/checkOutOfStock' }),
	},
	created() {
		this.loading = true;
		this.fetchBooks().then(() => (this.loading = false));
	},
};
</script>
