import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Button from "../components/Button";
import colors from "../constants/Colors";
import mountainService from "../database/mountainService";
import userService from "../database/userService";
import FontAwesomeIcon from "../components/FontAwesomeIcon";

export default class MountainDetailsScreen extends React.Component {
	static navigationOptions = {
		title: "Details",
	};

	constructor(props) {
		super(props);
		this.state = {
			checkedIn: false,
			user: null,
		};
	}

	componentDidMount() {
		userService.getCurrentUser().then(user => this.setState({
			user,
			checkedIn: user.currentMountain !== null,
		}));
	}

	render() {
		const {user, checkedIn} = this.state;
		const {navigation} = this.props;
		const mountain = navigation.getParam('mountain');
		//user && console.log(this.state, user.id, mountain.chatroomUsers);
		return (
			user &&
			<View style={styles.container}>
				<View style={styles.header}>
					<Image source={{uri: mountain.iconPath}} style={styles.image}/>
					<Text style={styles.title}>{mountain.name}</Text>
					<Text style={styles.region}>{mountain.region}</Text>
				</View>
				<View style={styles.body}>
					{!checkedIn ? (
						<Button
							bgColor={colors.secondary}
							title="Check In"
							onPress={() => this._checkIn(mountain.id, mountain.name)}
						/>
					) : (
						mountain.chatroomUsers.includes(user.id) ?
							<Button
								bgColor={colors.secondary}
								title="Check Out"
								onPress={() => this._checkOut(mountain.id, mountain.name)}
							/> :
							<Text>Checked in elsewhere.</Text>
					)}
				</View>
			</View>
		);
	}

	_checkIn = (id, name) => {
		mountainService.checkIn(id, name);
		this.setState({checkedIn: true});
	}

	_checkOut = (id, name) => {
		mountainService.checkOut(id, name);
		this.setState({checkedIn: false});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		backgroundColor: "#efefef",
		padding: 20,
		flex: 0,
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 1,
		borderBottomColor: "#aaa",
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginBottom: 15,
		borderWidth: 1,
		borderColor: "#aaa",
	},
	title: {
		textAlign: "center",
		fontSize: 28,
		marginBottom: 10,
	},
	region: {
		textAlign: "center",
		fontSize: 22,
		color: "#aaa",
	},
	body: {
		padding: 30,
	}
});