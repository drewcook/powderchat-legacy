export const getMountains = () => {
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		dispatch({type: "GET_MOUNTAINS_PENDING"});
		const firestore = getFirestore();
		firestore.collection("mountains").orderBy("name", "asc").get().then(docs => {
			let mountains = [];
			docs.forEach(doc => {
				const {name, region, logo, chatroomUsers} = doc.data();
				//const logoRef = firebase.storage().ref(`mountains/logos/${logo}`);
				mountains.push({
					id: doc.id,
					name,
					region,
					logo,
					chatroomUsers,
				});
			})
			dispatch({type: "GET_MOUNTAINS_SUCCESS", payload: mountains});
		}).catch(err => dispatch({type: "GET_MOUNTAINS_FAIL", err}));
	};
}