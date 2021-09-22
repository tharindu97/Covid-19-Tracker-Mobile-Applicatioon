import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function GlobalScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Global!</Text>
    </View>
  );
}

function LocalScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Local!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
              <MaterialIcons name="logout" size={24} color="#fff" />
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
              <MaterialIcons name="logout" size={24} color="#fff" />
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
              <MaterialIcons name="logout" size={24} color="#fff" />
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
              <MaterialIcons name="logout" size={24} color="#fff" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
