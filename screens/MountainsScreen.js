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
import mountainStore from "../database/mountainService";

export default class MountainsScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mountains: null,
		}
	}
	static navigationOptions = {
		title: "Mountains"
	};

	componentDidMount() {
		mountainStore.getAllMountains().then(mountains => this.setState({mountains}));
	}

	render() {
		const {mountains} = this.state;
		return (
			<ScrollView style={styles.container}>
				{mountains &&
				<FlatList
					data={mountains}
					keyExtractor={(item, idx) => idx.toString()}
					renderItem={(item, idx) => (
						<TouchableOpacity onPress={() => this._onPress(item.item)}>
							<View style={styles.mountainContainer}>
								<Image source={{uri:item.item.iconPath}} width={50} height={50} style={styles.mountainImg} />
								<Text style={styles.mountainTitle}>
									{item.item.name}
								</Text>
								<Icon
									name={Platform.OS === "ios" ? "ios-arrow-forward" : "md-arrow-forward"}
									style={styles.mountainArrow}
								/>
							</View>
						</TouchableOpacity>
						)}
				/>}
			</ScrollView>
		);
	}

	_onPress = (mountain) => {
		this.props.navigation.navigate("Details", {mountain});
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
	mountainTitle: {
		color: "#000",
		fontSize: 22,
		lineHeight: 28,
		flexGrow: 2,
	},
	mountainArrow: {
		color: "#000",
		fontSize: 30,
		marginBottom: -3,
	}
});
