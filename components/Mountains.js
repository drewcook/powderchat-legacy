import React from 'react';
import {
	FlatList,
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Icon from '../components/Icon';
import { connect } from "react-redux";

const Mountains = ({mountains}) => {
	console.log(mountains);
	return (
		<FlatList
			data={mountains}
			keyExtractor={(item, idx) => idx.toString()}
			renderItem={(item, idx) => (
				<TouchableOpacity onPress={() => this._onPress(item.item)}>
					<View style={styles.mountainContainer}>
						<Image source={{uri: item.item.logo}} />
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
		/>
);
};

const styles = StyleSheet.create({
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

const mapStateToProps = state => ({
	mountains: state.mountains,
});

export default connect(mapStateToProps)(Mountains);