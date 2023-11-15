
import React, { useState, useEffect } from 'react';
import { View, Text, Image,TextInput,Button, TouchableOpacity, ScrollView,FontSelector, IconButton, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import CalenderButton from './Calender';

const JobForm = () => {
  
    const [selectedImage, setSelectedImage] = useState(null);
    const [postText, setPostText] = useState('');
    const [mediaUri, setMediaUri] = useState(null);
    const [TitleText, setTitleText] = useState('');
  
    const openImagePicker = () => {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };
  
       launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Image picker error: ', response.error);
        } else {
          let imageUri = response.uri || response.assets?.[0]?.uri;
          setSelectedImage(imageUri);
        }
      });
    };
  
    const handlePost = () => {
      if (postText.trim() === '' && !mediaUri) {
        alert('Post cannot be empty.');
      
        return;
      } else if(TitleText.trim() === '' && !mediaUri){
        alert('Title cannot be empty.');
      }
  
      // Add logic to save the post to your database or perform other actions here.
      console.log('Caption:', postText);
      console.log('Media URI:', mediaUri);
  
      // Reset the state
      setPostText('');
      setMediaUri(null);
    };
  
    // const handleTitle = () => {
    //   if (TitleText.trim() === '' && !mediaUri) {
    //     alert('Title cannot be empty.');
    //     return;
    //   }
  
    //   // Add logic to save the post to your database or perform other actions here.
    //   console.log('Caption:', TitleText);
    //   console.log('Media URI:', mediaUri);
  
    //   // Reset the state
    //   setTitleText('');
    //   setMediaUri(null);
    // };
  
    return (
      <View style={{ padding: 16,borderRadius:20,borderWidth:2, margin:10, height:700 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Create a Job Post</Text>
        <TextInput
          placeholder="Write Your Job Title Here..!!"
          multiline
          value={TitleText}
          onChangeText={setTitleText}
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            padding: 8,
            marginTop: 10,
            overflow:'scroll'
          }}
        />
              <TextInput
          placeholder="Your Description Goes Here..!!"
          multiline
          value={postText}
          onChangeText={setPostText}
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            padding: 8,
            marginTop: 10,
            overflow:'scroll'
          }}
        />
         <CalenderButton/>
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={{ flex: 1 }}
              resizeMode="contain"
            />
            
          )}
        </View>
        <TouchableOpacity onPress={openImagePicker} style={{ backgroundColor: 'blue', borderRadius: 10, marginTop: 10 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 10 }}>
            Image 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePost} style={{ backgroundColor: 'blue', borderRadius: 10, marginTop: 10 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 10 }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

export default JobForm;


