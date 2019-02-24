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
import LoadingIcon from "../components/LoadingIcon";
import Icon from '../components/Icon';
import * as MountainActions from "../store/actions/mountainsActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Mountains extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
		this.props.getMountains();
	}

	render() {
		return this.props.loading ? <LoadingIcon/> :
			<FlatList
				data={this.props.mountains}
				keyExtractor={(item, idx) => idx.toString()}
				renderItem={(item, idx) => (
					<TouchableOpacity onPress={() => this._onPress(item.item)}>
						<View style={styles.mountainContainer}>
							<Image source={{uri: item.item.logo}}/>
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
			/>;
	}
}

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
	loading: state.mountains.loading,
	mountains: state.mountains.list,
});

const mapDispatchToProps = dispatch => bindActionCreators(MountainActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mountains);