import React from 'react';
import {
	FlatList,
	Image,
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
				<Text style={styles.heading}>Mountians List</Text>
				<FlatList
					data={mountains}
					keyExtractor={(item, idx) => idx.toString()}
					renderItem={(item, idx) => (
						<TouchableOpacity onPress={() => this._onPress(item.item.name)}>
							<View style={styles.mountainContainer}>
								<Image source={item.item.image} style={styles.mountainImg} />
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
		paddingTop: 20,
		backgroundColor: '#fff',
	},
	heading: {
		fontSize: 38,
		marginBottom: 20,
		textAlign: "center",
	},
	mountainContainer: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "#efefef",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 0.5,
		borderTopColor: "#aaa",
		borderBottomColor: "#aaa",
	},
	mountainImg: {
		borderRadius: 40,
		width: 80,
		height: 80,
		borderColor: "#aaa",
		borderWidth: 1,
		marginRight: 15,
	},
	mountainText: {
		color: "#000",
		fontSize: 28,
		lineHeight: 28,
		flexGrow: 2,
	},
	mountainArrow: {
		color: "#000",
		fontSize: 30,
		marginBottom: -3,
	}
});
