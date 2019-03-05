import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthScreen from "../screens/AuthScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import SignUpScreen from "../screens/SignUpScreen";
import MainTabNavigator from './MainTabNavigator';

const AuthStack = createStackNavigator(
	{
		Auth: AuthScreen,
		SignUp: SignUpScreen
	},
	{
		initialRouteName: "Auth",
	}
);

export default createAppContainer(createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		Auth: AuthStack,
		Main: MainTabNavigator,
	},
	{
		initialRouteName: "AuthLoading",
	}
));