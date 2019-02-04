import React from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import colors from "../constants/Colors";
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
					<TouchableOpacity style={styles.logInBtn} onPress={Fire.shared.loginWithFacebook}>
						<Text style={styles.logInBtnText}>Log In With Facebook</Text>
					</TouchableOpacity>
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
	},
	logInBtn: {
		textAlign: 'center',
		backgroundColor: colors.primary,
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginTop: 40,
		borderRadius: 4,
	},
	logInBtnText: {
		color: "#fff",
		fontSize: 20,
	},
});
