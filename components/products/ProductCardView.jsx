import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = ({item,cart}) => {
  const navigation =useNavigation();
  const addToCart = (item) =>{
    cart.push(item);
  }
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{item})}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
          source={{
              uri: item.imageUrl,
            }}
          style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.price} numberOfLines={1}>
           ₹ {item.price}
          </Text>
        </View>
        <TouchableOpacity 
        onPress={()=>addToCart(item)}
        style={styles.addBtn}>
          <Ionicons
          name="add-circle"
          size={35}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView