import React from 'react';
import { View, Text, StyleSheet,Image, SafeAreaView } from 'react-native';
import useSWR from 'swr';
import CrewViki from './CrewViki';

const fetcher = url => fetch(url).then(res => res.json());

const MissionList = () => {
  const { data, error } = useSWR('https://api.spacexdata.com/v4/launches/latest', fetcher);

  if (error) return <Text>Error loading data</Text>;
  if (!data) return <Text>Loading...</Text>;

  return (
    <SafeAreaView>
    <View style={styles.container}>    
      <Image source={{ uri: data.links.patch.large }} style={styles.image} />
    </View>
    <View>
    <Text style={styles.title}>{data.name}</Text>

    </View>
    <CrewViki/>
    
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {



    marginTop:50,
    marginBottom:20
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft:'auto',
    marginRight:'auto',

  },
  
  patch: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
 
  },
});

export default MissionList;
