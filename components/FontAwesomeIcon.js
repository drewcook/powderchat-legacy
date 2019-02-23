import React from 'react';
import FontAwesome, { Icons } from "react-native-fontawesome";

// need to run react-native link to be able to use these
export default class FontAwesomeIcon extends React.Component {
	render() {
		return (
			<FontAwesome>{Icons.mountain}</FontAwesome>
		);
	}
}