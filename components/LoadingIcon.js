import React from "react";
import {
	ActivityIndicator,
	View
} from "react-native";

export default LoadingIcon = () => (
	<View style={styles.container}>
		<ActivityIndicator />
	</View>
);

const styles = {
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
};