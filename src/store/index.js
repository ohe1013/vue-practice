import Vue from 'vue';
import Vuex from 'vuex';
import { booksModule } from './modules/booksModule';
import cartModule from './modules/cartModule';
import { authModule } from './modules/authModule';

Vue.use(Vuex);
const store = {
	modules: {
		booksModule,
		cartModule,
		authModule,
	},
};
export default new Vuex.Store(store);
