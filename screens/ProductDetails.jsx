import { View, Text ,TouchableOpacity, Image, Linking} from 'react-native'
import React,{useState} from 'react'
import styles from './productDetails.style'
import {Ionicons,SimpleLineIcons, MaterialCommunityIcons,Fontisto} from '@expo/vector-icons'
import { useRoute} from '@react-navigation/native'
import { COLORS, SIZES } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'


const ProductDetails = ({navigation}) => {
  // const navigation = useNavigation()
  const route = useRoute();
  const {item} = route.params;
  const [count,setCount] =useState(1);
  const increment = () => {
    setCount(count+1);
  }
  const decrement = () => {
    if(count>1){
      setCount(count-1);
    }
  }
  const whatsappRedirect = () => {
    Linking.openURL(`whatsapp://send?text=Hello%20, I%20wanted%20to%20enquire%20about%20this%20product:${item.imageUrl}%20Quantity:${count}&phone=+919431251837`);
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            size={30}
         />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
          <Ionicons
            name="heart-circle-outline"
            color={COLORS.primary}
            size={30}
         />
        </TouchableOpacity>
      </View>
      <Image
      source={{uri:item.imageUrl}}
      style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>₹{item.price}</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((index,item)=>(
              <Ionicons
              key={index}
              name="star"
              size={24}
              color="gold"
              />
            ))}
            <Text style={styles.ratingText}>{4.9}</Text> 
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={()=>increment()}>
              <SimpleLineIcons
              name="plus"
              size={20}
              />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={()=>decrement()}>
              <SimpleLineIcons
              name="minus"
              size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}> Description</Text>
          <Text style={styles.descText}>{item.description}</Text>

        </View>
        <View style={{marginBottom:SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection:"row"}}>
              <Ionicons
              name="location-outline"
              size={20}
              />
              <Text> {item.product_location} </Text>
            </View>

            <View style={{flexDirection:"row"}}>
              <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={20}
              />
              <Text> 100% Free Delivery</Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={()=>whatsappRedirect()} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
            <Fontisto
            name='shopping-bag'
            size={22}
            color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default ProductDetails