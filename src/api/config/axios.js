import axios from 'axios';

const url = 'localhost:8080';

export default axios.create({
	baseURL: url,
});
