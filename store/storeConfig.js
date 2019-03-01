import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import initialStore from "./initialStore";

// DB
//import fbConfig from "../database/fbConfig";
import { getFirebase } from "react-redux-firebase";
import { getFirestore, firestoreReducer } from "redux-firestore";

// Reducers
import authReducer from "./reducers/authReducer";
import mountainsReducer from "./reducers/mountainsReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	mountains: mountainsReducer,
	user: userReducer,
	firestore: firestoreReducer,
});

// Middleware
const middleware = applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}), logger);

// Enhancers
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancer = compose(
	middleware,
	reduxDevtools,
);

// Store
const store = createStore(
	rootReducer,
	initialStore,
	enhancer
);

export default store;