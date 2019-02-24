import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
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
						<TouchableOpacity style={styles.checkInBtn}>
							<Text style={styles.checkInBtnText}
							      onPress={() => this._checkIn(mountain.id, mountain.name)}>Check In</Text>
						</TouchableOpacity>
					) : (
						mountain.chatroomUsers.includes(user.id) ?
							<TouchableOpacity style={styles.checkOutBtn}>
								<Text style={styles.checkOutBtnText}
								      onPress={() => this._checkOut(mountain.id, mountain.name)}>Check Out</Text>
							</TouchableOpacity> :
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
	},
	checkInBtn: {
		backgroundColor: colors.secondary,
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginTop: 60,
		borderRadius: 4,
	},
	checkInBtnText: {
		textAlign: "center",
		color: "rgba(0, 0, 0, 0.8)",
		fontSize: 24,
	},
	checkOutBtn: {
		backgroundColor: colors.primary,
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginTop: 60,
		borderRadius: 4,
	},
	checkOutBtnText: {
		textAlign: "center",
		color: "#fff",
		fontSize: 24,
	},
});