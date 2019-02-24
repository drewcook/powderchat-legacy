import * as firebase from 'firebase';
import "firebase/firestore";

class UserService {
	constructor() {
	}

	get db() {
		return firebase.firestore();
	}

	get ref() {
		return this.db.collection('users');
	}

	get uid() {
		return (firebase.auth().currentUser || {}).uid;
	}

	getCurrentUser = () => {
		return new Promise(res => {
			this.ref.doc(this.uid).get().then(doc => {
				if (doc.exists) {
					const {createdAt, currentMountain, lastLogin, name, profilePic} = doc.data();
					res({
						id: this.uid,
						createdAt,
						currentMountain,
						lastLogin,
						name,
						profilePic,
					});
				} else {
					res(null);
				}
			}).catch(err => console.log("Error getting document", err));
		});
	}

	checkIntoMountain = (id, name) => {
		this.ref.doc(this.uid).set({currentMountain: {id, name}}, {merge: true});
	}

	checkOutOfMountain = (id, name) => {
		this.ref.doc(this.uid).set({currentMountain: null}, {merge: true});
	}
}

const userService = new UserService();
export default userService;