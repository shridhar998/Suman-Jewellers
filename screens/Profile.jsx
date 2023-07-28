import { ScrollView,View,StyleSheet} from 'react-native'
import React,{useRef, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductRow from '../components/products/ProductRow';
import { FontAwesome5 ,FontAwesome} from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import { TouchableOpacity, Animated,Text } from 'react-native';
import Slider from '@react-native-community/slider';


const Profile = () => {
  const [flag,setFlag]=useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 1.5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 1.5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };
  const filter = () =>{
    if(flag){
      setFlag(false)
      fadeOut()
    }
    else{
      setFlag(true);
      fadeIn();
    }
  }
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{}}>
        <View style={styles.icons}>
          <FontAwesome5 name="sort-amount-up" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>filter()}>
        <View style={styles.icons}>
          <FontAwesome name="filter" size={24} color="black" />
        </View>
        </TouchableOpacity>
        
      </View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </Animated.View>
      <ScrollView horizontal={true} style={{ width: "100%" }}>
          <ProductRow/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    flexDirection:"row",
    marginLeft:SIZES.medium,
    marginTop:SIZES.medium,
    justifyContent:"space-around",
  },
  icons:{
    alignItems:"center",
    borderColor:COLORS.black,
    borderWidth:1.15,
    width:120,
    height:35,
    borderRadius:SIZES.small
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
})
export default Profile