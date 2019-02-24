import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MountainsScreen from '../screens/MountainsScreen';
import MountainDetailsScreen from "../screens/MountainDetails";
import ChatScreen from "../screens/ChatScreen";
import SettingsScreen from '../screens/SettingsScreen';
import userService from "../database/userService";

//let globalUser = "blank";
//userService.getCurrentUser().then(user => globalUser = user);

const HomeStack = createStackNavigator({
	Home: HomeScreen,
});

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({focused}) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-information-circle${focused ? '' : '-outline'}`
					: 'md-information-circle'
			}
		/>
	),
};

const MountainsStack = createStackNavigator(
	{
		Mountains: MountainsScreen,
		Details: MountainDetailsScreen,
	},
	{
		initialRouteName: "Mountains"
	}
);

MountainsStack.navigationOptions = {
	tabBarLabel: 'Mountains',
	tabBarIcon: ({focused}) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-snow' : 'md-snow'}
		/>
	),
};

const ChatStack = createStackNavigator({
	Chats: ChatScreen,
});

ChatStack.navigationOptions = {
	tabBarLabel: 'Chats',
	tabBarIcon: ({focused}) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'}
		/>
	),
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({focused}) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
		/>
	),
};

export default createBottomTabNavigator({
	HomeStack,
	MountainsStack,
	ChatStack,
	SettingsStack,
});
