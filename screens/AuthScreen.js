import React from 'react';
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Button from "../components/Button";
import colors from "../constants/Colors";
import { loginWithFacebook } from "../database/authService";
import Fire from "../database/firebaseConfig";

export default class AuthScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.welcomeContainer}>
					<Image
						source={require('../assets/images/main_logo_md.png')}
						style={styles.welcomeImage}
					/>
				</View>
				<View style={styles.getStartedContainer}>
					<Text style={styles.getStartedText}>
						Welcome!
					</Text>
					<Button
						bgColor={colors.primary}
						title="Log In With Facebook"
						onPress={loginWithFacebook}
					/>
					<Text style={styles.orText}>– or –</Text>
					<Button
						bgColor={colors.secondary}
						title="Sign Up"
						onPress={e => console.log(e)}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 70,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 250,
		height: 305,
		resizeMode: 'contain',
		marginVertical: 30,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	getStartedText: {
		fontSize: 30,
		color: "#000",
		lineHeight: 32,
		textAlign: 'center',
		marginBottom: 40,
	},
	orText: {
		fontSize: 22,
		color: "#ccc",
		lineHeight: 28,
		textAlign: "center",
	},
	logInBtn: {
		textAlign: 'center',
		backgroundColor: colors.primary,
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginVertical: 20,
		borderRadius: 4,
	},
	logInBtnText: {
		color: "#fff",
		fontSize: 20,
	},
	signUpBtn: {
		textAlign: 'center',
		backgroundColor: colors.secondary,
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginVertical: 20,
		borderRadius: 4,
	},
	signUpBtnText: {
		color: "#fff",
		fontSize: 20,
	},
});
