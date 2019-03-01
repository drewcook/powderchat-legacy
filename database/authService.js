import firebase from "firebase";

export const loginWithFacebook = async () => {
	const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(
		"566780290461704",
		{
			permissions: [
				'public_profile',
				//'user_friends', <-- needs App Review from Facebook to use
			]
		}
	);

	if (type === 'success') {
		// Build Firebase credential with the Facebook access token.
		const credential = firebase.auth.FacebookAuthProvider.credential(token);

		// Sign in with credential from the Facebook user.
		firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
			// Handle Errors here.
		});
	}
}