import React from "react";
import {
	ImageBackground,
	Text,
	TextInput,
	StyleSheet,
	View,
} from "react-native";
import Button from "../components/Button";

export default class SignUpScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	static navigationOptions = {
		title: "Sign Up",
	};

	render() {
		return (
			<ImageBackground source={require('../assets/images/auth_bg2.jpg')} style={styles.bgImg}>
				<View style={styles.container}>
					<Text style={styles.text}>It's easy to sign up! Just use a valid email address with a unique password and you'll be ready to go.</Text>
					<View style={styles.fieldContainer}>
						<TextInput
							style={styles.textField}
							onChangeText={text => this.setState({email: text})}
							value={this.state.email}
							placeholder="Email"
						/>
					</View>
					<View style={styles.fieldContainer}>
						<TextInput
							style={styles.textField}
							onChangeText={text => this.setState({password: text})}
							secureTextEntry={true}
							value={this.state.password}
							placeholder="Password"
						/>
					</View>
					<Button
						title="Create Account"
						onPress={(e) => console.log(this.state)}
					/>
				</View>
			</ImageBackground>
		);
	}
}

const styles = {
	bgImg: {
		width: "100%",
		height: "100%",
	},
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 150,
	},
	text: {
		color: "#fff",
		fontSize: 18,
		marginBottom: 10,
		textAlign: "center",
	},
	fieldContainer: {
		marginVertical: 10,
		alignSelf: "stretch",
	},
	label: {
		marginBottom: 5,
	},
	textField: {
		fontSize: 20,
		paddingHorizontal: 12,
		height: 50,
		borderRadius: 4,
		backgroundColor: "rgba(255, 255, 255, 0.8)",
	},
};