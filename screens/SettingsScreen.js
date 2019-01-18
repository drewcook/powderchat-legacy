import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import firebase from "firebase";

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
			<ScrollView>
				<View>
					<Text>{user && user.name}</Text>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	profileContainer: {}
});