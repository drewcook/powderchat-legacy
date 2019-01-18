import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import colors from "../constants/Colors";
//import { AuthSession } from "expo";

import {loginWithFacebook} from "../database/firebaseConfig";

export default class HomeScreen extends React.Component {
	state = {
		result: null,
		userInfo: null,
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
					<View style={styles.welcomeContainer}>
						<Image
							source={require('../assets/images/main_icon.png')}
							style={styles.welcomeImage}
						/>
					</View>

					<View style={styles.getStartedContainer}>
						<Text style={styles.getStartedText}>
							Welcome to SlopeChat!
						</Text>
						{!this.state.userInfo ? (
								<TouchableOpacity style={styles.logInBtn} onPress={() => loginWithFacebook()}>
									<Text style={styles.logInBtnText}>Log In With Facebook</Text>
								</TouchableOpacity>
							) :
							(this._renderUserInfo())
						}
					</View>
				</ScrollView>
			</View>
		);
	}

	/*_handlePressAsync = async () => {
		let redirectUrl = AuthSession.getRedirectUrl();
		let result = await AuthSession.startAsync({
			authUrl:
			`https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
			`&client_id=${FB_APP_ID}` +
			`&redirect_uri=${encodeURIComponent(redirectUrl)}`,
		});
		this.setState({ result });
	};*/

	/*_handleFBLogin = async () => {
		try {
			const {
				type,
				token,
				expires,
				permissions,
				declinedPermissions,
			} = await Expo.Facebook.logInWithReadPermissionsAsync(FB_APP_ID, {
				permissions: ['public_profile'],
			});
			if (type === 'success') {
				// Get the user's name using Facebook's Graph API
				const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);
				const userInfo = await response.json();
				this.setState({userInfo});
			} else {
				// type === 'cancel'
			}
		} catch ({ message }) {
			alert(`Facebook Login Error: ${message}`);
		}
	}*/

	_renderUserInfo = () => {
		return (
			<View style={{ aligntItems: "center" }}>
				<Image
					source={{ uri: this.state.userInfo.picture.data.url }}
					style={{ width: 100, height: 100, borderRadius: 50 }}
				/>
				<Text style={{ fontSize: 20 }}>Hello, {this.state.userInfo.name}!</Text>
				<Text>ID: {this.state.userInfo.id}</Text>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center',
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 200,
		height: 160,
		resizeMode: 'contain',
		marginTop: 30,
		marginLeft: -10,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	getStartedText: {
		fontSize: 30,
		color: "#fff",
		lineHeight: 32,
		textAlign: 'center',
	},
	logInBtn: {
		textAlign: 'center',
		backgroundColor: colors.ice,
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginTop: 60,
		borderRadius: 4,
	},
	logInBtnText: {
		color: "rgba(0, 0, 0, 0.8)",
		fontSize: 20,
	},
});
