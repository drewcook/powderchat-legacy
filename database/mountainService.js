import * as firebase from 'firebase';
import "firebase/firestore";
import userService from "./userService";

class MountainService {
	constructor() {
	}

	get db() {
		return firebase.firestore();
	}

	get ref() {
		return this.db.collection('mountains');
	}

	get uid() {
		return (firebase.auth().currentUser || {}).uid;
	}

	getAllMountains = () => {
		return new Promise(res => {
			let mountains = [];
			this.ref.orderBy("name", "asc").onSnapshot(snapshot => {
				snapshot.forEach(doc => {
					const {name, region, logo, chatroomUsers} = doc.data();
					//const logoRef = firebase.storage().ref(`mountains/logos/${logo}`);
					mountains.push({
						id: doc.id,
						name,
						region,
						logo,
						chatroomUsers,
					});
				});
				res(mountains);
			});
		});
	}

	getMountainById = id => this.ref.doc(id).get();

	checkIn = (id, name) => {
		// add userID to mountain chatroom
		this.ref.doc(id).update({chatroomUsers: firebase.firestore.FieldValue.arrayUnion(this.uid)});
		// update user
		userService.checkIntoMountain(id, name);
	}

	checkOut = (id, name) => {
		// remove userID to mountain chatroom
		this.ref.doc(id).update({chatroomUsers: firebase.firestore.FieldValue.arrayRemove(this.uid)});
		// update user
		userService.checkOutOfMountain(id, name);
	}
}

let mountainService = new MountainService()
export default mountainService;