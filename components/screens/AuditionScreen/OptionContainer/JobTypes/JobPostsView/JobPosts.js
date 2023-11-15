import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyJobPostings = [
  {
    id: '1',
    title: 'Software Engineer',
    description: 'Join our dynamic team as a software engineer!',
  },
  {
    id: '2',
    title: 'UX Designer',
    description: 'Exciting opportunity for a creative UX designer!',
  },
  {
    id: '3',
    title: 'Data Scientist',
    description: 'Explore data-driven insights as a data scientist!',
  },
];

const JobPostings = () => {
  return (
    <View>
      <Text>Job Postings</Text>
      <View style={style.Maincontainer}>
        <FlatList
          data={dummyJobPostings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
          <View style={style.container}>
            <View>
            <Text style={style.title} >Title: {item.title}</Text>
            </View>
            <View>
            <Text style={style.description}>Description: {item.description}</Text>
            </View>
          </View>
        )}
        />
      </View>
    </View>
  );
};

export default JobPostings;

const style=StyleSheet.create({
  Maincontainer:{
    borderWidth:1,
    height:500,
  },
  container:{
    borderWidth:1,
    borderRadius:20,
    height:100,
    margin:10,
    overflow:'scroll'
  },
  title:{
    borderWidth:1,
    borderRadius:20,
    margin:10,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    // padding: 10 
    justifyContent:'center'
  },
  description:{
    borderWidth:1,
    borderRadius:20,
    margin:10,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    // padding: 10 
    justifyContent:'center',
    overflow:'scroll'
  }

  }
)