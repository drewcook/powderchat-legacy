import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBHCu3VF2PsH0lJm9XzTTyKU5wnmRXbNZQ",
	authDomain: "slopechat.firebaseapp.com",
	databaseURL: "https://slopechat.firebaseio.com",
	projectId: "slopechat",
	storageBucket: "slopechat.appspot.com",
	messagingSenderId: "346314248816"
};
firebase.initializeApp(config);
const fbConfig = firebase;

export default fbConfig;