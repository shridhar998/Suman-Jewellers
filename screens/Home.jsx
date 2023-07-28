import { TouchableOpacity, View, Text, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import {Ionicons, Fontisto} from "@expo/vector-icons";
import Welcome  from "../components/home/Welcome";
import Caraousel from '../components/home/Caraousel';
// import ProductCardView from '../components/products/ProductCardView';
import ProductRow from '../components/products/ProductRow'
import useFetch from '../hook/useFetch';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const {data} = useFetch();
  const count = 0;
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
        
          <View style={{alignItems:"flex-end"}}>
            {count?
            (<View style={styles.cartCount}>
              <Text style={styles.cartNumber}>{count}</Text>
            </View>):<></>
            }
            <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
              <Fontisto name='shopping-bag'size={24}/>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
      
        <Welcome/>
        <Caraousel/>
        <ScrollView horizontal={true} style={{ width: "100%" }}>
          <ProductRow/>
        </ScrollView>
        </ScrollView>
    </SafeAreaView>
    
  )
}


export default Home