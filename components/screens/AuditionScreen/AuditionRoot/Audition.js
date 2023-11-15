import React from 'react'
import { Text, View } from 'react-native'
import OptionRoot from '../OptionContainer/OptionRoot/OptionRoot'
import JobFormButton from '../OptionContainer/JobTypes/JobFormButton/JobFormButton'
import JobForm from '../OptionContainer/JobTypes/JobForm/JobForm'
import JobPostings from '../OptionContainer/JobTypes/JobPostsView/JobPosts'

export default function Audition() {
  return (
    <View>
      <JobPostings/>
      <JobFormButton/>
    </View>
  )
}
