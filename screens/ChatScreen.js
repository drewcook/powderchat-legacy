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
import { GiftedChat } from "react-native-gifted-chat";
import Fire from "../database/firebaseConfig";
import firebase from "firebase";

export default class ChatScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
		};
	}

	static navigationOptions = {
		title: "Chats",
	};


	componentDidMount() {
		Fire.shared.on(messages => this.setState({messages}));
	}

	componentWillUnmount() {
		Fire.shared.off();
	}

	onSend = (messages = []) => {
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messages),
		}));
	}

	get user() {
		// Return our name and our UID for GiftedChat to parse
		const user = {
			name: firebase.auth().currentUser.displayName || "Anonymous",
			_id: Fire.shared.uid,
			avatar: firebase.auth().currentUser.photoURL || null,
		};
		return user;
	}

	render() {
		return (
			/*<ScrollView style={styles.container}>
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
			</ScrollView>*/

			<GiftedChat
				messages={this.state.messages}
				onSend={messages => Fire.shared.send(messages)}
				user={this.user}
			/>

		);
	}

	_onPress = (name) => {
		console.log(name);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	/*heading: {
		fontSize: 32,
		marginBottom: 20,
		textAlign: "center",
	},*/
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