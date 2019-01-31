import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import colors from "../constants/Colors";

export default class MountainDetailsScreen extends React.Component {
	static navigationOptions = {
		title: "Details",
	};

	render() {
		const {navigation} = this.props;
		const mountain = navigation.getParam('mountain');
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image source={mountain.image} style={styles.image} />
					<Text style={styles.title}>{mountain.name}</Text>
					<Text style={styles.region}>{mountain.region}</Text>
				</View>
				<View style={styles.body}>
					<TouchableOpacity style={styles.checkInBtn}>
						<Text style={styles.checkInBtnText}>Check In</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
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
});