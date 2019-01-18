import React from 'react';
import {
	FlatList,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Icon from '../components/Icon';

const chats = [
	{
		name: "Purgatory",
	},
	{
		name: "Wolf Creek",
	},
	{
		name: "Keystone",
	},
]

export default class ChatScreen extends React.Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				<Text style={styles.heading}>SlopeChats</Text>
				<FlatList
					data={chats}
					keyExtractor={(item, idx) => idx.toString()}
					renderItem={(item, idx) => (
						<TouchableOpacity onPress={() => this._onPress(item.item.name)}>
							<View style={styles.chatContainer}>
								<Text style={styles.chatTitle}>
									{item.item.name}
								</Text>
								<Icon
									name={Platform.OS === "ios" ? "ios-arrow-forward" : "md-arrow-forward"}
									style={styles.chatArrow}
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
		fontSize: 32,
		marginBottom: 20,
		textAlign: "center",
	},
	chatContainer: {
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
	chatTitle: {
		color: "#000",
		fontSize: 22,
		lineHeight: 28,
		flexGrow: 2,
	},
	chatArrow: {
		color: "#000",
		fontSize: 30,
		marginBottom: -3,
	}
});