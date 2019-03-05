import React from 'react';
import {
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import Button from "../components/Button";
import colors from "../constants/Colors";
import { loginWithFacebook } from "../database/authService";
import Fire from "../database/firebaseConfig";

export default class AuthScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<ImageBackground source={require('../assets/images/auth_bg1.jpg')} style={styles.bgImg}>
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<Image
							source={require('../assets/images/main_logo_md.png')}
							style={styles.logo}
						/>
					</View>
					<View style={styles.loginContainer}>
						<Text style={styles.centerText}>Login</Text>
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
						<Text style={styles.centerText}>– or –</Text>
						<Button
							bgColor={colors.primary}
							title="Login With Facebook"
							onPress={loginWithFacebook}
						/>
						<Text style={{marginVertical: 40}}></Text>
						<TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")}>
							<Text style={styles.signUpText}>
								Don't have an account? <Text style={{textDecorationLine: "underline"}}>Sign up here</Text>.
							</Text>
						</TouchableOpacity>
						<Button
							title="Sign In"
							onPress={e => console.log(this.state)}
						/>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	bgImg: {
		width: "100%",
		height: "100%",
	},
	container: {
		flex: 1,
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 60,
	},
	logo: {
		width: 150,
		height: 185,
		resizeMode: 'contain',
		marginVertical: 40,
	},
	loginContainer: {
		marginHorizontal: 50,
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
	centerText: {
		fontSize: 22,
		color: "#fff",
		marginTop: 10,
		textAlign: "center",
	},
	signUpText: {
		color: "#fff",
		textAlign: "center",
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
