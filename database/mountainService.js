import * as firebase from 'firebase';
import "firebase/firestore";

class MountainStore {
	constructor() {}

	get db() {
		return firebase.firestore();
	}

	get ref() {
		return this.db.collection('mountains');
	}

	getAllMountains = () => {
		return new Promise(res => {
			let mountains = [];
			this.ref.orderBy("name", "asc").onSnapshot(snapshot => {
				snapshot.forEach(doc => {
					const {name, region, iconPath} = doc.data();
					mountains.push({
						id: doc.id,
						name,
						region,
						iconPath,
					});
				});
				res(mountains);
			});
		});
	}

	checkIn = id => {
		console.log("checking into mountain", id);
	}
}
let mountainStore = new MountainStore()
export default mountainStore;