import {combineReducers, createStore, applyMiddleware} from "redux";

import authReducer from "./reducers/authReducer";
import mountainsReducer from "./reducers/mountainsReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	mountains: mountainsReducer,
	user: userReducer,
});

const middleware = applyMiddleware();

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;