import * as React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
import HomeScreen from './Home';
import SettingsScreen from './Test';
import GlobalScreen from './Global';
import LocalScreen from './/Local';
import { TouchableOpacity, Alert } from 'react-native';


const Tab = createBottomTabNavigator();

const Navigation = () => {
    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Signin")
            })
            .catch(error => alert(error.message))
    }


    const createTwoButtonAlert = () => {
        Alert.alert(
            "Exit",
            "Are you want to exit",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: handleSignOut }
            ],
            { cancelable: false }
        );
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Global') {
                        iconName = focused ? 'globe' : 'globe-outline';
                    } else if (route.name === 'Local') {
                        iconName = focused ? 'american-football' : 'american-football-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'document-text' : 'document-text-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#00BFA6',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Covid-19 Tracker',
                    tabBarLabel: 'Home',
                    headerStyle: {
                        backgroundColor: '#00BFA6',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={createTwoButtonAlert}
                        >
                            <MaterialIcons name="logout" size={24} color="#fff" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="Global"
                component={GlobalScreen}
                options={{
                    title: 'Covid-19 Tracker',
                    tabBarLabel: 'Global',
                    headerStyle: {
                        backgroundColor: '#00BFA6',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={createTwoButtonAlert}
                        >
                            <MaterialIcons name="logout" size={24} color="#fff" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="Local"
                component={LocalScreen}
                options={{
                    title: 'Covid-19 Tracker',
                    tabBarLabel: 'Local',
                    headerStyle: {
                        backgroundColor: '#00BFA6',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={createTwoButtonAlert}
                        >
                            <MaterialIcons name="logout" size={24} color="#fff" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: 'Covid-19 Tracker',
                    tabBarLabel: 'Testing',
                    headerStyle: {
                        backgroundColor: '#00BFA6',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={createTwoButtonAlert}
                        >
                            <MaterialIcons name="logout" size={24} color="#fff" />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Navigation;

