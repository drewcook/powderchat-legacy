import React from 'react';
import {
	ScrollView,
	StyleSheet,
} from 'react-native';
import Mountains from "../components/Mountains";

export default class MountainsScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		title: "Mountains"
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<Mountains/>
			</ScrollView>
		);
	}

	_onPress = (mountain) => {
		console.log(mountain);
		this.props.navigation.navigate("Details", {mountain});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
