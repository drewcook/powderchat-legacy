import initialStore from "../initialStore";

const mountainsReducer = (state = initialStore.mountains, action) => {
	switch (action.type) {
		case "GET_MOUNTAINS_PENDING":
			return {
				...state,
				loading: true,
			};
		case "GET_MOUNTAINS_SUCCESS":
			return {
				...state,
				//loading: false,
				list: action.payload,
			};
		case "GET_MOUNTAINS_FAIL":
			// pass to logging service
			console.log("Failed to retrieve mountains", action.err);
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}

export default mountainsReducer;