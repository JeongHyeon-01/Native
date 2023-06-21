import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../pages/Login/login';
import HomeScreen from '../pages/Home/home';

const AuthStack = createStackNavigator(
    {
        LoginScreen: {screen: LoginScreen},
        HomeScreen: {screen: HomeScreen}
    },
    {
        initialRouteName: 'HomeScreen'
    }
);

// 최상단 네비게이터
const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(AppNavigator);
