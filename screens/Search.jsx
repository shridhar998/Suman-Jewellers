import { View, TouchableOpacity,Image ,Text} from 'react-native'
import React,{useState} from 'react'
import { TextInput } from "react-native";
import {Ionicons, Feather} from "@expo/vector-icons";
import styles from './search.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import {SIZES, COLORS } from '../constants'
import axios from 'axios';
import { FlatList } from 'react-native';
import SearchTile from '../components/products/SearchTile';
import {URL} from '../constants/url';

const Search = () => {
  const [searchKey,setSearchKey] = useState("");
  const [searchResults,setSearchResults] = useState([]);

  const handleSearch = async() => {
    try {
      const response = await axios.get(URL + `/api/products/search/${searchKey}`)
      setSearchResults(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
        <Ionicons 
        name="camera-outline"
        size={SIZES.xLarge}
        style={styles.searchIcon}
        />
          
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          value={searchKey}
          onChangeText={setSearchKey}
          placeholder="What are you looking for..."
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={()=>handleSearch()}>
          <Feather
           name="search" 
           size={24}
           color={COLORS.offwhite}
           />
          </TouchableOpacity>
        </View>
      </View>
      {searchKey.length === 0 ?(
        <View stle={{flex:1}}>
          <Image
          source={require('../assets/jewel/jewel5.jpg')}
          style={styles.searchImage}
          />
        </View>
      ):(<FlatList
      data={searchResults}
      keyExtractor={(item)=>item._id}
      renderItem={({item})=>(<SearchTile item={item}/>)}
      />)}
    </SafeAreaView>
  )
}


export default Search