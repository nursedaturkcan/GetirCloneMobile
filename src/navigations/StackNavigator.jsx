import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import ProductsDetilsScreen from '../screens/ProductsDetilsScreen';
import Icon from "react-native-vector-icons/Fontisto"
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native'; // useRoute eklenmiş
import React from 'react';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get("window");

function StackNavigator() {
  const navigation = useNavigation();
  const route = useRoute(); 
   const tabHiddenRoutes = ["ProductsDetails","CartScreen"]; //sepet ekranında ve ürün detay ekranında bottom tab göstermeme

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "flex" } }); 
    }
  }, [route, navigation]); 

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#5c3ebc",
          },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{
                width: 70,
                height: 30,
              }}
            />
          ),
          headerTitleAlign: 'center', 
        }}
      />
      <Stack.Screen
        name="categoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerBackTitleVisible: false, 
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#5c3ebc",
          },
          headerTitle: () => (
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Ürünler</Text>
          ),
          headerRight: () => (
            <TouchableOpacity
            onPress={()=>navigation.navigate("CartScreen")}
            style={{
              width: width * 0.2,
              height: 33,
              backgroundColor: "white",
              marginRight: width * 0.03,
              borderRadius: 9,
              flexDirection: "row",
              alignItems: "center",

            }}>
              <Image
                style={{
                  width: 23,
                  height: 23,
                  marginLeft: 6,

                }}
                source={require("../../assets/cart.png")} />
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center", height: 33, borderTopRightRadius: 9, backgroundColor: "#f3effe", borderBottomRightRadius: 9 }}>
                <Text style={{color:"#5d3ebd", fontWeight:"bold",fontSize:12}}> {"\u20ba"} 23,00</Text>
              </View>
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center', 
        }}
      />
      <Stack.Screen
        name="ProductsDetails"
        component={ProductsDetilsScreen}
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="close-a" color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Icon name="heart" color="#32177a" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{
              fontWeight: "bold", fontSize: 15, color: "white"
            }}>Ürün Detayı</Text>
          )
        }}
      />
      <Stack.Screen
      name='CartScreen'
      component={CartScreen}
      options={{
        headerStyle: { backgroundColor: "#5c3ebc" },
        headerBackTitleVisible: false,
        headerTintColor: "white",
        headerTitleAlign: 'center',
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="close-a" color="white" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Icon name="trash" color="white" />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Text style={{
            fontWeight: "bold", fontSize: 15, color: "white"
          }}>Sepetim</Text>
        )
      }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
