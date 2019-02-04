import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthScreen from "../screens/AuthScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		Auth: AuthScreen,
		Main: MainTabNavigator,
	},
	{
		initialRouteName: "AuthLoading",
	}
));