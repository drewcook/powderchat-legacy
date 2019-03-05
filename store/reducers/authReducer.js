import initialStore from "../initialStore";

const authReducer = (state = initialStore.auth, action) => {
	switch (action.type) {
		case "LOGIN_SUCCESS":
			return {
				...state,
				authError: null,
			};
		case "LOGIN_FAIL":
			return {
				...state,
				authError: "Login failed"
			};
		default:
			return state;
	}
}

export default authReducer;