// login param is ref to firebase.login, which is passed in as a prop at the component level
export const signIn = (credentials, login) => {
	return (dispatch, getState) => {
		login(credentials)
			.then(() => {
				dispatch({type: "LOGIN_SUCCESS"});
			})
			.catch(err => {
				dispatch({type: "LOGIN_FAIL", err});
			});
	}
}

export const signOut = (logout) => {
	return (dispatch, getState) => {
		logout();
	}
}

export const createAccount = (credentials, createUser) => {
	return (dispatch, getState) => {
		createUser(credentials)
			.then(() => {
				dispatch({type: "CREATE_ACCOUNT_SUCCESS"});
			})
			.catch(err => {
				dispatch({type: "CREATE_ACCOUNT_FAIL", err});
			});
	}
}