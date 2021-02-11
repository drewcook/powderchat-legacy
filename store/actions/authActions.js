import userService from "../../database/userService";

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

// login param is ref to firebase.logout, which is passed in as a prop at the component level
export const signOut = (logout) => {
	return (dispatch, getState) => {
		logout();
	}
}

export const createAccount = (credentials, createUser) => {
	return (dispatch, getState) => {
		createUser({ email: credentials.email, password: credentials.password })
			.then(resp => {
				console.log("created account", resp);
				return resp.user.updateProfile({
					displayName: credentials.username,
					photoURL: credentials.photo
				});
			})
			.then(data => {
				console.log(data);
				/*userService.ref.doc(resp.user.uid).set({
					createedAt: new Date(),
					currentMountain: null,
					lastLogin: new Date(),
					name: resp.user.displayName,
					profilePic: resp.user.photoURL,
				});*/
				dispatch({type: "CREATE_ACCOUNT_SUCCESS", payload: credentials});
			})
			.catch(err => {
				dispatch({type: "CREATE_ACCOUNT_FAIL", err});
			});
	}
}