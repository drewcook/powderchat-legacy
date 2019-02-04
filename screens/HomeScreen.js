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
import firebase from "firebase";

export default class HomeScreen extends React.Component {
	state = {
		result: null,
		user: firebase.auth().currentUser,
	};

	static navigationOptions = {
		title: "Home",
	};

	render() {
		const {user} = this.state;
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
					<View style={styles.welcomeContainer}>
						<Image
							source={require('../assets/images/bubble_logo_md.png')}
							style={styles.welcomeImage}
						/>
					</View>
					<View style={styles.getStartedContainer}>
						<Image
							source={{ uri: user.photoURL }}
							style={styles.getStartedPhoto}
						/>
						<Text style={styles.getStartedText}>Hello, {user.displayName}!</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
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
		width: 100,
		height: 80,
		resizeMode: 'contain',
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	getStartedPhoto: {
		width: 160,
		height: 160,
		borderRadius: 80,
		marginVertical: 30,
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
