import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View>
      <TextInput
        placeholder="Search jobs"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchBar