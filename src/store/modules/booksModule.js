import shop, { Book } from '@/api/shop';

export const booksModule = {
	namespaced: true,
	state: {
		books: [],
		find: () => undefined,
	},
	getters: {
		availableBooks(state) {
			return state.books.filter(book => book.inventory > 0);
		},
		checkOutOfStock(state) {
			return book => {
				return book.inventory === 0;
			};
		},
	},
	actions: {
		fetchBooks({ commit }) {
			return new Promise((resolve, reject) => {
				shop.getBooks(books => {
					commit('setBooks', books);
					resolve();
				});
			});
		},
	},
	mutations: {
		setBooks(state, books) {
			state.books = books;
		},
		decreamentBookInventory(state, book) {
			book.inventory--;
		},
	},
};
