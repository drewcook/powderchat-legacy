import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from "react-redux";


// database setup using firestore
// integrated with redux
import store from "./store/storeConfig";
import firebase from "firebase";
import fbConfig from "./database/fbConfig";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const rrfProps = {
	firebase,
	config: fbConfig,
	dispatch: store.dispatch,
	createFirestoreInstance
}

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};

	render() {
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		} else {
			return (
				<View style={styles.container}>
					{Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
					<Provider store={store}>
						<ReactReduxFirebaseProvider {...rrfProps}>
							<AppNavigator/>
						</ReactReduxFirebaseProvider>
					</Provider>
				</View>
			);
		}
	}

	_loadResourcesAsync = async () => {
		return Promise.all([
			Asset.loadAsync([
				require('./assets/images/main_icon.png'),
			]),
			Font.loadAsync({
				// This is the font that we are using for our tab bar
				...Icon.Ionicons.font,
				// We include SpaceMono because we use it in HomeScreen.js. Feel free
				// to remove this if you are not using it in your app
				'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
				"fa-brands": require("./assets/fonts/fa-brands-400.ttf"),
				"fa-light": require("./assets/fonts/fa-light-300.ttf"),
				"fa-regular": require("./assets/fonts/fa-regular-400.ttf"),
				"fa-solid": require("./assets/fonts/fa-solid-900.ttf"),
			}),
		]);
	};

	_handleLoadingError = error => {
		// In this case, you might want to report the error to your error
		// reporting service, for example Sentry
		console.warn(error);
	};

	_handleFinishLoading = () => {
		this.setState({isLoadingComplete: true});
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
