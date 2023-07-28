import { View, Text } from 'react-native'
import React from 'react'
import {Home, Profile, Search} from '../screens';
import { Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {COLORS} from '../constants/index';
const Tab =createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel:false,
    tabBarHideOnKeyboard:true,
    headerShown:false,
    tabBarStyle:{
        
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:70,
    }
}
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name='Home' 
        component={Home}
        options={{
            tabBarIcon:({focused})=>{
                return(
                <Ionicons
                name={focused?"home":"home-outline"}
                size={23}
                color={focused?COLORS.primary:COLORS.gray}
                />
                )
            }
        }}
        />
        <Tab.Screen 
        name='Search' 
        component={Search}
        options={{
            tabBarIcon:({focused})=>{
                return(
                <Ionicons
                name={'search-sharp'}
                size={23}
                color={focused?COLORS.primary:COLORS.gray}
                />
                )
            }
        }}
        />
        <Tab.Screen 
        name='Profile' 
        component={Profile}
        options={{
            tabBarIcon:({focused})=>{
                return(
                    <MaterialCommunityIcons 
                    name={focused?"shopping":"shopping-outline"} 
                    size={24} 
                    color="black" />
                )
            }
        }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation