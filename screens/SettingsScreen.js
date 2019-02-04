import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import firebase from "firebase";
import colors from "../constants/Colors";

export default class SettingsScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		}
	}

	componentDidMount() {
		const user = firebase.auth().currentUser;
		this.setState({user});
	}

	render() {
		const {user} = this.state;
		return (
			<View style={styles.profileContainer}>
				<Text>{user && user.displayName}</Text>
				<TouchableOpacity style={styles.signOutBtn}>
					<Text style={styles.signOutBtnText} onPress={this._signOut}>Sign Out</Text>
				</TouchableOpacity>
			</View>
		);
	}

	_signOut = () => {
		firebase.auth().signOut();
	}
}

const styles = StyleSheet.create({
	profileContainer: {
		flex: 1,
		backgroundColor: "#fff",
	},
	signOutBtn: {
		backgroundColor: colors.primary,
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginTop: 60,
		borderRadius: 4,
	},
	signOutBtnText: {
		textAlign: "center",
		color: "rgba(0, 0, 0, 0.7)",
		fontSize: 24,
	},
});