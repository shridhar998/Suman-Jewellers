import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons} from'@expo/vector-icons';
import styles from './newArrival.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductList from '../components/products/ProductList';

const NewArrivals = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Products</Text>
        </View>
        <ProductList/>
      </View>
    </SafeAreaView>
  )
}

export default NewArrivals