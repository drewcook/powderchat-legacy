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
			<ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
				<Mountains {...this.props} />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
});
