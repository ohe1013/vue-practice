import axios from './config/axios';

const UserService = {
	login: async ({ email, password }) => {
		const data = { email, password };
		const res = await axios.post('/users/login', data);

		return res;
	},
};

export default UserService;
