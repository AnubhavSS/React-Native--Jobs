import { View, Text,ScrollView,SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import {Stack,useRouter} from 'expo-router'

import { COLORS,icons,images,SIZES } from '../constants'
import { Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome } from '../components'
const Home = () => {
 const [searchTerm, setsearchTerm] = useState("")
   const router=useRouter()
    
  return (
    <SafeAreaView style={{flex:1 , backgroundColor:COLORS.lightWhite}}>
    <Stack.Screen options={{headerTitle:"Home" ,}}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1,padding:SIZES.medium}}>
          <Welcome searchTerm={searchTerm} setsearchTerm={setsearchTerm} 
          handleClick={()=>{if(searchTerm){router.push(`/search/${searchTerm}`)}}}/>

          <Popularjobs/>
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home