import React from "react";
import PropTypes from "prop-types";
import {
	Text,
	TouchableOpacity,
} from "react-native";
import colors from "../constants/Colors";

const Button = props => (
	<TouchableOpacity style={styles(props.bgColor, props.btnStyle, null).btnContainer} onPress={props.onPress}>
		<Text style={styles(props.bgColor, null, props.textStyle).btnText}>{props.title}</Text>
	</TouchableOpacity>
);

Button.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	bgColor: PropTypes.string,
	btnStyle: PropTypes.object,
	textStyle: PropTypes.object,
};

const styles = (bgColor, btnStyle, textStyle) => ({
	btnContainer: {
		backgroundColor: bgColor ? bgColor : "#333",
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginVertical: 20,
		//marginHorizontal: 10,
		borderRadius: 4,
		...btnStyle,
	},
	btnText: {
		color: "rgba(255, 255, 255, 0.95)",
		fontSize: 18,
		textAlign: "center",
		textTransform: "uppercase",
		...textStyle,
	},
});

export default Button;