import React from 'react';
import { View, Text, FlatList } from 'react-native';

const JobList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.company}</Text>
          <Text>{item.location}</Text>
          {/* Render more job details */}
        </View>
      )}
    />
  );
};

export default JobList;