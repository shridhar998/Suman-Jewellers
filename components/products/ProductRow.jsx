import { FlatList, View, ActivityIndicator, Text} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import styles from './productRow.style';
import useFetch from '../../hook/useFetch';

const ProductRow = () => {
  const {data,isLoading,error} = useFetch();
  
  const cart= [];
  return (
    <View style={styles.container}>
        {
          isLoading?(
            <ActivityIndicator
            size={SIZES.xxLarge}
            color={COLORS.primary}
            />
          ):(
            <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item)=>item._id}
            renderItem={({item})=><ProductCardView item={item} cart={cart}/>}
            contentContainerStyle={{columnGap:SIZES.medium,flexDirection:"column"}}
            />
          )
        }
    </View>
  )
}

export default ProductRow