import jwt from 'jwt-decode';

export const jwtDecode = token => {
	if (token) {
		const decodeObj = jwt(token);
		const now = Date.now();
		return now < decodeObj.exp * 1000;
	} else {
		return false
	}
};

export const takeId = token => {
	const decodeObj = jwt(token);
	return decodeObj.userId;
};
