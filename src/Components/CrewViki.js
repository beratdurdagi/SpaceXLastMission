import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import useSWR from 'swr';
const fetcher = url => fetch(url).then(res => res.json());
const CrewViki = () => {




    const { data, error } = useSWR('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=SpaceX_Crew-5&exintro=1&explaintext=1&redirects=1', fetcher);

    console.log(data.query)
  
   


  return (
    <View >
      <Text style={{fontSize:17,fontWeight:'400',letterSpacing:0.01,}}>{data.query.pages[68907275].extract}</Text>

    </View>
  )
}

export default CrewViki

const styles = StyleSheet.create({})