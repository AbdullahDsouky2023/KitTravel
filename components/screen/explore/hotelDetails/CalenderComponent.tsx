import React, { useState } from 'react';
import { View, Vibration } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import tw from 'twrnc';
import { Colors } from '@/constants/Colors';

const CalendarComponent = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onDayPress = (day: DateData) => {
    Vibration.vibrate(50); // Short vibration for feedback

    if (!startDate || (startDate && endDate)) {
      setStartDate(day.dateString);
      setEndDate('');
    } else if (startDate && !endDate && day.dateString > startDate) {
      setEndDate(day.dateString);
    } else {
      setStartDate(day.dateString);
      setEndDate('');
    }
  };

  const getMarkedDates = () => {
    const markedDates: any = {};
    if (startDate) {
      markedDates[startDate] = { 
        startingDay: true, 
        color: Colors.Black100, 
        textColor: Colors.white 
      };
    }
    if (endDate) {
      markedDates[endDate] = { 
        endingDay: true, 
        color: Colors.Black100, 
        textColor: Colors.white 
      };
    }
    if (startDate && endDate) {
      let currentDate = new Date(startDate);
      const lastDate = new Date(endDate);
      while (currentDate < lastDate) {
        currentDate.setDate(currentDate.getDate() + 1);
        const dateString = currentDate.toISOString().split('T')[0];
        if (dateString !== endDate) {
          markedDates[dateString] = { 
            color: '#e5e7eb', // Tailwind's gray-200
            textColor: '#374151', // Tailwind's gray-700
          };
        }
      }
    }
    return markedDates;
  };

  return (
    <View style={tw`bg-white p-4`}>
      <Calendar
        markingType={'period'}
        markedDates={getMarkedDates()}
        onDayPress={onDayPress}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: Colors.Black100,
          selectedDayTextColor: Colors.white,
          todayTextColor: Colors.Black100,
          dayTextColor: Colors.Black100,
          textDisabledColor: '#d9e1e8',
          textDayFontFamily: Colors.BoldFontStyleMain,
          textMonthFontFamily: Colors.BoldFontStyleMain,
          textDayHeaderFontFamily: Colors.BoldFontStyleMain,
          'stylesheet.day.period': {
          
            
          },
        }}
      />
    </View>
  );
};

export default CalendarComponent;