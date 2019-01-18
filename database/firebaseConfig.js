import * as firebase from 'firebase';
import "firebase/firestore";
//const admin = require("firebase-admin");
//const functions = require("firebase-functions");

// Initialize Firebase Realtime Database
const firebaseConfig = {
	apiKey: "AIzaSyBHCu3VF2PsH0lJm9XzTTyKU5wnmRXbNZQ",
	authDomain: "slopechat.firebaseapp.com",
	databaseURL: "https://slopechat.firebaseio.com/",
	projectId: "slopechat",
	storageBucket: "slopechat.appspot.com"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Firestore
//admin.initializeApp(functions.config().firebase);
let db = firebase.firestore();
let users = db.collection('users');

// Listen for authentication state to change.
firebase.auth().onAuthStateChanged((user) => {
	if (user != null) {
		console.log('We are authenticated now!');
		console.log(user);
		// write user into users/ collection if record doesn't exist
		users.get().then(snapshot => {
			snapshot.forEach(doc => {
				if (doc.uid !== user.uid) {
					users.doc(user.uid).set({
						"name": user.displayName,
						"createdAt": new Date(),
						"profilePic": user.photoURL,
					});
				}
			});
		}).catch(err => console.log('Error getting documents', err));
	}

	// Do other things
});


// Facebook Authentication
const FB_APP_ID = "566780290461704";
export const loginWithFacebook = async () => {
	const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
		FB_APP_ID,
		{ permissions: [
			'public_profile',
			//'user_friends', <-- needs App Review from Facebook to use
		] }
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