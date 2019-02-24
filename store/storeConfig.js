import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import initialStore from "./initialStore";

// DB
import fbConfig from "../database/fbConfig";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

// Reducers
import authReducer from "./reducers/authReducer";
import mountainsReducer from "./reducers/mountainsReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	mountains: mountainsReducer,
	user: userReducer,
});

// Middleware
const middleware = applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}), logger);

// Enhancers
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancer = compose(
	middleware,
	reduxDevtools,
	reduxFirestore(fbConfig),
	reactReduxFirebase(fbConfig)
);

// Store
const store = createStore(
	rootReducer,
	initialStore,
	enhancer
);

export default store;