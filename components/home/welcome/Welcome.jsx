import React,{useState} from 'react'
import { View, Text,TextInput,Image,FlatList,TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons,SIZES  } from '../../../constants'

const jobTypes=["Full-time","Part-time","Contractor"]

const Welcome = ({searchTerm,setsearchTerm,handleClick}) => {
  const router=useRouter()

  const [activeJobType, setactiveJobType] = useState("Full-time")
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Anubhav</Text>
      <Text style={styles.welcomeMessage}>Find your prefect job</Text>
    </View>

    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput}
        value={searchTerm}
        placeholder='What are you looking for?'
        onChangeText={(text)=>{setsearchTerm(text)}}/>
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
        <Image source={icons.search}
        resizeMode='contain' style={styles.searchBtnImage}/>
      </TouchableOpacity>
    </View>

    <View style={styles.tabsContainer}>
 <FlatList data={jobTypes}
 keyExtractor={item=>item} 
 contentContainerStyle={{columnGap:SIZES.small}}
 horizontal
 renderItem={({item})=>(
  <TouchableOpacity style={styles.tab(activeJobType,item)} onPress={()=>{setactiveJobType(item); router.push(`/search/${item}`)}} >
    <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
  </TouchableOpacity>
 )}/>
    </View>
    </View>
  )
}

export default Welcome