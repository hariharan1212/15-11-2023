
import React from 'react'
import { View } from 'react-native'
import SearchBar from '../../SearchBar/SearchBar'
import Filters from '../../SearchBar/Filter/Filter'
import JobList from '../JobTypes/JobType'

export default function OptionRoot() {
  return (
    <View>
      <SearchBar/>
      <Filters/>
      <JobList/>
    </View>
  )
}
