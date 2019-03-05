import React from "react";
import {
	Image,
	ImageBackground,
	Text,
	TextInput,
	StyleSheet,
	View,
} from "react-native";
import {ImagePicker, Permissions} from "expo";
import Button from "../components/Button";
import colors from "../constants/Colors";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AuthActions from "../store/actions/authActions";
import { withFirebase } from "react-redux-firebase";

class SignUpScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			username: "",
			photo: null,
		};
	}

	render() {
		const {email, password, username, photo} = this.state;
		return (
			<ImageBackground source={require('../assets/images/auth_bg2.jpg')} style={styles.bgImg}>
				<View style={styles.container}>
					<Text style={styles.text}>It's easy to sign up! Just use a valid email address with a unique
						password and you'll be ready to go. We'd also need a name and optional photo to display for other riders.</Text>
					<View style={styles.fieldContainer}>
						<TextInput
							style={styles.textField}
							onChangeText={text => this.setState({email: text})}
							value={email}
							placeholder="Email"
						/>
					</View>
					<View style={styles.fieldContainer}>
						<TextInput
							style={styles.textField}
							onChangeText={text => this.setState({password: text})}
							secureTextEntry={true}
							value={password}
							placeholder="Password"
						/>
					</View>
					<View style={styles.fieldContainer}>
						<TextInput
							style={styles.textField}
							onChangeText={text => this.setState({username: text})}
							value={username}
							placeholder="Name"
						/>
					</View>
					<View style={styles.fieldContainerImage}>
						<Button
							bgColor={colors.primary}
							title="Choose Photo"
							onPress={this._pickImage}
							btnStyle={{flexGrow: 1}}
						/>
						<Image
							source={photo ? {uri: photo} : require("../assets/images/default_user.png")}
							style={styles.signUpPhoto}
						/>
					</View>
					<Button
						title="Create Account"
						onPress={() => this.props.createAccount(this.state, this.props.firebase.createUser)}
					/>
				</View>
			</ImageBackground>
		);
	}

	_pickImage = async () => {
		const {status, permissions} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		console.log(permissions);
		if (status === "granted") {
			let result = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				aspect: [1,1],
			});

			console.log(result);

			if (!result.cancelled) {
				this.setState({photo: result.uri})
			}
		} else {
			throw new Error('Camera permission not granted');
		}
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
		paddingTop: 100,
	},
	text: {
		color: "#fff",
		fontSize: 18,
		marginBottom: 30,
		textAlign: "center",
	},
	fieldContainer: {
		marginVertical: 10,
		alignSelf: "stretch",
	},
	fieldContainerImage: {
		marginTop: 10,
		marginBottom: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
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
	signUpPhoto: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginLeft: 15
	}
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(withFirebase(SignUpScreen));