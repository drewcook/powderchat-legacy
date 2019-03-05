import React from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	Switch,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import colors from "../constants/Colors";
import userService from "../database/userService";
import Button from "../components/Button";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";

class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: "Settings",
	};

	constructor(props) {
		super(props);
		this.state = {
			settings: {
				setting1: true,
				setting2: true,
				setting3: false,
				setting4: false,
				setting5: true,
			},
		}
	}

	componentDidMount() {
		//userService.getCurrentUser().then(user => this.setState({user}))
	}

	render() {
		const user = this.props.auth;
		const {settings} = this.state;
		return (
			user.uid &&
			<ScrollView style={styles.settingsContainer}>
				<View style={styles.profileContainer}>
					{user.photoURL ?
						<Image
							source={{uri: user.photoURL}}
							style={styles.profilePic}
						/> :
						<Image
							source={require("../assets/images/default_user.png")}
							style={styles.profilePic}
						/>
					}
					<Text style={styles.profileName}>{user.displayName || user.email}</Text>
					{user.currentMountain ?
						<Text>Checked Into {user.currentMountain.name}</Text> :
						<Text>Not Checked In Anywhere</Text>}
				</View>
				<View style={styles.settingRow}>
					<Text style={styles.settingText}>Setting 1</Text>
					<Switch
						style={styles.settingSwitch}
						onValueChange={this._toggleSetting1}
						value={settings.setting1}
					/>
				</View>
				<View style={styles.settingRow}>
					<Text style={styles.settingText}>Setting 2</Text>
					<Switch
						style={styles.settingSwitch}
						onValueChange={this._toggleSetting2}
						value={settings.setting2}
					/>
				</View>
				<View style={styles.settingRow}>
					<Text style={styles.settingText}>Setting 3</Text>
					<Switch
						style={styles.settingSwitch}
						onValueChange={this._toggleSetting3}
						value={settings.setting3}
					/>
				</View>
				<View style={styles.settingRow}>
					<Text style={styles.settingText}>Setting 4</Text>
					<Switch
						style={styles.settingSwitch}
						onValueChange={this._toggleSetting4}
						value={settings.setting4}
					/>
				</View>
				<View style={styles.settingRow}>
					<Text style={styles.settingText}>Setting 5</Text>
					<Switch
						style={styles.settingSwitch}
						onValueChange={this._toggleSetting5}
						value={settings.setting5}
					/>
				</View>
				<Button
					bgColor={colors.primary}
					title="Sign Out"
					onPress={() => this.props.firebase.logout()}
				/>
			</ScrollView>
		);
	}

	_toggleSetting1 = val => this.setState({settings: {...this.state.settings, setting1: val}});
	_toggleSetting2 = val => this.setState({settings: {...this.state.settings, setting2: val}});
	_toggleSetting3 = val => this.setState({settings: {...this.state.settings, setting3: val}});
	_toggleSetting4 = val => this.setState({settings: {...this.state.settings, setting4: val}});
	_toggleSetting5 = val => this.setState({settings: {...this.state.settings, setting5: val}});
}

const styles = StyleSheet.create({
	settingsContainer: {
		flex: 1,
		backgroundColor: "#fff",
	},
	profileContainer: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		padding: 20,
		flex: 0,
		alignItems: "center",
		justifyContent: "center",
	},
	profileName: {
		fontSize: 16,
	},
	profilePic: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	settingRow: {
		flex: 1,
		flexDirection: "row",
		paddingHorizontal: 20,
		paddingVertical: 10,
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	settingText: {
		fontSize: 18,
	},
	settingSwitch: {},
});

const mapStateToProps = state => ({
	auth: state.firebase.auth,
	profile: state.firebase.profile
});

export default connect(mapStateToProps, null)(withFirebase(SettingsScreen));