import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomePage from '../src/pages/HomePage';
import LocalPage from '../src/pages/LocalPage';
import GlobalPage from '../src/pages/GlobalPage';
import TestingPage from '../src/pages/TestingPage';

//Screen names
const homeName = "Home";
const localName = "Local";
const globalName = "Global";
const testName = "Testing";

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === localName) {
                            iconName = focused ? 'list' : 'list-outline';

                        } else if (rn === globalName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        } else if (rn === testName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#00BFA6',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}>

                <Tab.Screen name={homeName} component={HomePage} />
                <Tab.Screen name={localName} component={LocalPage} />
                <Tab.Screen name={globalName} component={GlobalPage} />
                <Tab.Screen name={testName} component={TestingPage} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;