import React from 'react';
import {
	ActivityIndicator,
	AsyncStorage,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import colors from "../constants/Colors";

export default class AuthLoadingScreen extends React.Component {
	constructor(props) {
		super(props);
		this._bootstrapAsync();
	}

	// Fetch the token from storage then navigate to our appropriate place
	_bootstrapAsync = async () => {
		const userToken = await AsyncStorage.getItem('userToken');

		// This will switch to the App screen or Auth screen and this loading
		// screen will be unmounted and thrown away.
		this.props.navigation.navigate(userToken ? 'App' : 'Auth');
	};

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator/>
				<Image
					source={require('../assets/images/main_icon.png')}
					style={styles.loadingImage}
				/>
				<Text style={styles.loadingText}>Loading</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
	},
	loadingImage: {
		width: 200,
		height: 160,
		resizeMode: 'contain',
		marginTop: 30,
		marginLeft: -10,
	},
	loadingText: {
		fontSize: 30,
		color: "#fff",
		lineHeight: 32,
		textAlign: 'center',
	},
});
