import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screen/dashboard';
import SearchScreen from '../screen/search';
import NetworkScreen from '../screen/network';
import PlusScreen from '../screen/plus';
import NotifikasiScreen from '../screen/notifikasi';
import JobsScreen from '../screen/jobs';


// import Profile from '../screen/profile';
// import Keranjang from '../screen/cart';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { borderTopWidth: 0 },
        keyboardHidesTabBar: true,
        // activeBackgroundColor: 'white',
        // inactiveBackgroundColor: 'white',
        

      }} >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? 'black' : 'gray' }]}
              source={focused == true ? require('../assets/home.png') : require('../assets/home.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Network"
        component={NetworkScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? 'black' : 'gray' }]}
              source={focused == true ? require('../assets/team.png') : require('../assets/team.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Plus"
        component={PlusScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? 'black' : 'gray' }]}
              source={focused == true ? require('../assets/plus.png') : require('../assets/plus.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Notifikasi"
        component={NotifikasiScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? 'black' : 'gray' }]}
              source={focused == true ? require('../assets/bell.png') : require('../assets/bell.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? 'black' : 'gray' }]}
              source={focused == true ? require('../assets/jobs.png') : require('../assets/jobs.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      {/* <Tab.Screen
        name="Cart"
        component={Keranjang}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.bottomTabIcon}
              source={focused==true?require('../assets/cartOn.png'):require('../assets/cartOff.png')
              } />
          ),
          tabBarLabel: 'Keranjang'
        }}
      /> */}
    </Tab.Navigator>
  );
}

const MainStackNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashboardStack" component={BottomTabNavigator} options={{
        headerShown: false
      }} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  )
}

export default MainStackNavigator

const styles = StyleSheet.create({

  bottomTabIcon: {
    display: 'flex',
    width: 22,
    height: 22,
    padding: 5,
    // marginVertical: 5,
    marginTop: 25,
    marginBottom: 10,
    borderTopWidth: 3,
  },
});