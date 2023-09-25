import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Fontisto"
import StackNavigator from './StackNavigator';
import MyIcon from "react-native-vector-icons/FontAwesome"
import { TouchableOpacity } from 'react-native';
import CustomIcon from "react-native-vector-icons/Entypo"


const Tab = createBottomTabNavigator();


const BottomTabsNavigator = () => {
  
const CustomTabBarButton=({children})=>{
return (
  <TouchableOpacity style={{
    width:58,
    height:58,
    backgroundColor:"#5c3ebc",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:33,
    marginTop:-8,
    borderWidth:2,
    borderColor:"white"
    
    }}>
<CustomIcon name="list" size={32} color="#f7d102"/>
  </TouchableOpacity>
)
}
  
    return (
      <Tab.Navigator
        initialRouteName='Ana Sayfa'
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#5C3EBC",
          tabBarInactiveTintColor: "#959595",
          headerShown: false,
          tabBarStyle: {
            height: 80,
          }
        }}
      >
        <Tab.Screen name="Ana Sayfa" component={StackNavigator} options={{
          tabBarIcon:(color=>(
            <Icon name="home" size={24} color={color}/>
          ))
        }} />
          <Tab.Screen name="Arama" component={StackNavigator} options={{
          tabBarIcon:(color=>(
            <Icon name="search" size={24} color={color}/>
          ))
        }} />
        <Tab.Screen 
        name='liste'
        component={StackNavigator}
        options={{
          tabBarButton:(props) => <CustomTabBarButton {...props} />
        }}
        />
       <Tab.Screen name="Profil" component={StackNavigator} options={{
          tabBarIcon:(color=>(
            <MyIcon name="user" size={24} color={color}/>
          ))
        }} />
          <Tab.Screen name="Hediye" component={StackNavigator} options={{
          tabBarIcon:(color=>(
            <MyIcon name="gift" size={24} color={color}/>
          ))
        }} />
     
        
      </Tab.Navigator>
    );
  }




export default BottomTabsNavigator;
