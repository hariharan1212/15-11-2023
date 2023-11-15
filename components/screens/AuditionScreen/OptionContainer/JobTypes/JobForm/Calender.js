// React Native Calendar Picker using react-native-calendar-picker
// https://aboutreact.com/react-native-calendar-picker/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

//import CalendarPicker from the package we installed
import CalendarPicker from 'react-native-calendar-picker';

const CalenderButton = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.innercontainer}>
            <Text style={styles.titleStyle}>calendar</Text>
                <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={new Date(2018, 1, 1)}
                maxDate={new Date(2050, 6, 3)}
                weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
                months={[
                    'January',
                    'Febraury',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                        'November',
                'December',
                ]}
                previousTitle="Previous"
                nextTitle="Next"
                todayBackgroundColor="#e6ffe6"
                selectedDayColor="#66ff33"
                selectedDayTextColor="#000000"
                scaleFactor={480}
                //   height='100'
                borderWidth='1'
                padding='90'
                width='420'


          
                textStyle={{
                fontFamily: 'Cochin',
                color: '#000000',
            
                }}
                onDateChange={onDateChange}
            />
        <View style={styles.textStylecontainer}>
          <Text style={styles.textStyletext}>Selected Start Date </Text>
          <Text style={styles.textStyledate}>
            {selectedStartDate ? selectedStartDate.toString() : ''}
          </Text>
          <Text style={styles.textStyletext}>Selected End Date </Text>
          <Text style={styles.textStyledate}>
            {selectedEndDate ? selectedEndDate.toString() : ''}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CalenderButton;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 30,
    backgroundColor: '#ffffff',
    // padding: 16,
    height:410,
    borderWidth:1,
    margin:10,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    // margin: 2,

  },
  textStylecontainer: {
    borderWidth:1,
    marginTop:10,
    marginLeft:30,
    padding:5,
    width:270,
  },
  textStyletext:{
    color:'red',
    textDecorationLine: 'underline',
    textAlign:'center'
  },
  textStyledate:{
    color:'blue',
    textAlign:'center'
  }


});
