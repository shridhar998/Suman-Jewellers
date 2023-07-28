import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants';

const Caraousel = () => {
    const slides =  [
      require('../../assets/jewel/jewel1.jpg'),
      require('../../assets/jewel/jewel2.jpg'),
      require('../../assets/jewel/jewel3.jpg'),
      require('../../assets/jewel/jewel4.jpg'),
      require('../../assets/jewel/jewel5.jpg'),
      require('../../assets/jewel/jewel6.jpg'),
      require('../../assets/jewel/jewel7.jpg'),
    ]
  return (
    <View style={styles.caraouselContainer}>
      <SliderBox
      images={slides}
      sliderBoxHeight={350}
      dotColor={COLORS.primary}
      inactiveDotColor={COLORS.secondary}
      ImageComponentStyle = {{borderRadius: 15, width:"92%",marginTop:15}}
      />
    </View>
  )
}

export default Caraousel
const styles = StyleSheet.create({
    caraouselContainer:{
      flex:1,
      alignItems:"center"
    }
})