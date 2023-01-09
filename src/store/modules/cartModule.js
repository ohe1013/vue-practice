import shop from '@/api/shop';

const ModuleCart = {
	namespaced: true,
	state: {
		cart: [],
		purchangeStatus: '',
	},
	getters: {
		cartBooks(state, getters, rootState) {
			return state.cart.map(cartItem => {
				const book = rootState.ModuleBooks.books.find(book => {
					return book.id === cartItem.id;
				});

				return {
					name: book?.name,
					price: book?.price,
					quantity: cartItem.quantity,
				};
			});
		},
		cartTotal(state, getters) {
			return getters.cartBooks.reduce((total, cartItem) => {
				return total + cartItem.price * cartItem.quantity;
			}, 0);
		},
	},
	actions: {
		addBookToCart({ state, commit, rootGetters }, book) {
			if (!rootGetters['ModuleBooks/checkOutOfStock'](book)) {
				const cartItem = state.cart.find(item => item.id === book.id);
				if (!cartItem) {
					commit('pushBookToCart', book.id);
				} else {
					commit('increamentBookQuantity', cartItem);
				}
				commit('ModuleBooks/decreamentBookInventory', book, { root: true });
			}
		},
		purchange({ state, commit }) {
			shop.buyBooks(
				state.cart,
				() => {
					commit('emptyCart');
					commit('notifyStatus', '성공');
				},
				() => {
					commit('notifyStatus', '실패');
				},
			);
		},
	},
	mutations: {
		emptyCart(state) {
			state.cart = [];
		},
		notifyStatus(state, status) {
			state.purchangeStatus = status;
		},
		pushBookToCart(state, bookId) {
			state.cart.push({
				id: bookId,
				quantity: 1,
			});
		},
		increamentBookQuantity(state, cartItem) {
			cartItem.quantity++;
		},
	},
};

export default ModuleCart;
