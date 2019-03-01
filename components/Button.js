import React from "react";
import {
	Text,
	TouchableOpacity,
} from "react-native";
import colors from "../constants/Colors";

export default Button = props => (
	<TouchableOpacity style={styles(props.bgColor).btnContainer} onPress={props.onPress}>
		<Text style={styles(props.bgColor).btnText}>{props.title}</Text>
	</TouchableOpacity>
);

const styles = (bgColor) => ({
	btnContainer: {
		backgroundColor: bgColor ? bgColor : "#333",
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginVertical: 20,
		marginHorizontal: 10,
		borderRadius: 4,
	},
	btnText: {
		color: "rgba(255, 255, 255, 0.95)",
		fontSize: 22,
		textAlign: "center",
	},
});