import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
	baseURL: GITHUB_URL,
	headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

//get search results
export const searchUsers = async (text) => {
	const params = new URLSearchParams({
		q: text,
	});
	const res = await github.get(`/search/users?${params}`);
	return res.data.items;
};
//get user & repos
export const getUsersAndRepos = async (username) => {
	const [user, repos] = await Promise.all([
		github.get(`/users/${username}`),
		github.get(`/users/${username}/repos`),
	]);
	return { user: user.data, repos: repos.data };
};
