import React from 'react';
import {
	FlatList,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Icon from '../components/Icon';
import { mountains } from "../constants/mountains";

export default class MountainsScreen extends React.Component {

	render() {
		return (
			<ScrollView style={styles.container}>
				<FlatList
					data={mountains}
					keyExtractor={(item, idx) => idx.toString()}
					renderItem={(item, idx) => (
						<TouchableOpacity onPress={() => this._onPress(item.item.name)}>
							<View style={styles.mountainContainer}>
								<Text style={styles.mountainText}>
									{item.item.name}
								</Text>
								<Icon
									name={Platform.OS === "ios" ? "ios-arrow-forward" : "md-arrow-forward"}
									style={styles.mountainArrow}
								/>
							</View>
						</TouchableOpacity>
						)}
				/>
			</ScrollView>
		);
	}

	_onPress = (name) => {
		console.log(name);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
	mountainContainer: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "#efefef",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		borderWidth: 0.5,
		borderTopColor: "#aaa",
		borderBottomColor: "#aaa",
	},
	mountainText: {
		color: "#000",
		fontSize: 20,
	},
	mountainArrow: {
		color: "#000",
		fontSize: 26,
	}
});
