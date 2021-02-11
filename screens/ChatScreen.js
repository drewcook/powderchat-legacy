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
import userService from "../database/userService";

export default class ChatScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			chats: [],
			user: null,
		};
	}

	static navigationOptions = {
		title: "Chats",
	};


	componentDidMount() {
		//Fire.shared.on(messages => this.setState({messages}));
		userService.getCurrentUser().then(user => this.setState({user}))
	}

	componentWillUnmount() {
		//Fire.shared.off();
	}

	onSend = (messages = []) => {
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messages),
		}));
	}

	render() {
		const {user} = this.state;
		user && console.log(user);
		return (
			user &&
			<ScrollView style={styles.container}>
				{user.currentMountain &&
				<TouchableOpacity onPress={() => this._onPress(user.currentMountain)}>
					<View style={styles.chatContainer}>
						<Text style={styles.chatTitle}>
							{user.currentMountain.name}
						</Text>
						<Icon
							name={Platform.OS === "ios" ? "ios-arrow-forward" : "md-arrow-forward"}
							style={styles.chatArrow}
						/>
					</View>
				</TouchableOpacity>
				}
				<GiftedChat
					messages={this.state.messages}
					onSend={messages => Fire.shared.send(messages)}
					user={user}
				/>
				{/*<FlatList
					data={user.currentMountain}
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
				/>*/}
			</ScrollView>
		);
	}

	_onPress = (mountain) => {
		console.log(mountain);
	}
}

const styles = StyleSheet.create({
	viewContainer: {
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