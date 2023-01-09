import axios from '../../api/config/axios';
import UserService from '../../api/userService';

export const authModule = {
	namespaced: true,
	state: {
		accessToken: '',
	},
	getters: {
		getAccessToken(state) {
			return state.accessToken;
		},
	},
	mutations: {
		loginSuccess(state, accessToken) {
			state.accessToken = accessToken;
		},
	},
	actions: {
		login({ commit }, payload) {
			UserService.login(payload).then(res => {
				commit('loginSuccess', res.data.accessToken);
			});
		},
	},
};
