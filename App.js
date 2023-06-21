import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Dimensions } from "react-native";
import HomeScreen from './src/pages/Home/home';
import LoginScreen from './src/pages/Login/login';
import UserScreen from './src/pages/User/user'
import ExtraScreen from './src/pages/Extra/add'
import UntactScreen from './src/pages/Untact/untact'
import SearchScreen from './src/pages/Search/search';
const Tab = createBottomTabNavigator();

const App = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused,color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "검색") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "알림") {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (route.name === "마이페이지") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "추가") {
              iconName = focused ? "add-circle" : "add-circle-outline";
              size = 35;
            } else if (route.name === "비대면") {
              iconName = focused ? "videocam" : "videocam-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "black",
            borderTopColor: "black",
            height: height / 13,
            paddingVertical: 5,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            marginBottom: 5,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="검색" component={SearchScreen} />
        
        <Tab.Screen
          name="추가"
          component= {ExtraScreen}
          options={{
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen name="비대면" component={UntactScreen} />
        <Tab.Screen name="마이페이지" component={UserScreen} />
    
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
