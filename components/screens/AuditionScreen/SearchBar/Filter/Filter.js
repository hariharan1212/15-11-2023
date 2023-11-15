import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Filters = ({ onApplyFilters }) => {
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [salaryType, setSalaryType] = useState('');

  const applyFilters = () => {
    const filters = {
      experience,
      salary,
      salaryType,
    };
    onApplyFilters(filters);
  };

  return (
    <View>
      <TextInput
        placeholder="Experience"
        value={experience}
        onChangeText={setExperience}
      />
      <TextInput
        placeholder="Salary"
        value={salary}
        onChangeText={setSalary}
      />
      <TextInput
        placeholder="Salary Type"
        value={salaryType}
        onChangeText={setSalaryType}
      />
      <Button title="Apply Filters" onPress={applyFilters} />
    </View>
  );
};

export default Filters;