import React from 'react';
import {
	ActivityIndicator,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import colors from "../constants/Colors";
import firebase from "firebase";

export default class AuthLoadingScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			console.log("auth state has changed", user);
			this.props.navigation.navigate(user ? "Main" : "Auth")
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator/>
				<Image
					source={require("../assets/images/bubble_logo_md.png")}
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
		backgroundColor: colors.ice,
		alignItems: "center",
	},
	loadingImage: {
		width: 150,
		height: 182,
		resizeMode: "contain",
		marginTop: 170,
	},
	loadingText: {
		fontSize: 30,
		color: colors.primary,
		lineHeight: 32,
		textAlign: "center",
		marginTop: 30
	},
});
