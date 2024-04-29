import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Constant} from '../../../utils/GlobalConstant';
import {styles} from './GridStyle';

/*
  Grid component
    @selectedNumber: Number selected from the picker
    Created by Abhishek Date: 2021-08-29

*/

const Grid = ({selectedNumber}) => {
  const [generatedNumber, setGeneratedNumber] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [lastGeneratedNumber, setLastGeneratedNumber] = useState(null);

  useEffect(() => {
    // Reset state when selectedNumber changes

    setGeneratedNumber(null);
    setDisabled(false);
    setLastGeneratedNumber(null);
  }, [selectedNumber]);

  if (!selectedNumber) {
    // Render nothing if no number is selected

    return null;
  }
  // @generateRandomNumber: Function to generate a random number from 1 to selectedNumber*selectedNumber
  const generateRandomNumber = () => {
    if (!disabled) {
      let randomNumber =
        Math.floor(Math.random() * (selectedNumber * selectedNumber)) + 1;
      while (randomNumber === lastGeneratedNumber) {
        randomNumber =
          Math.floor(Math.random() * (selectedNumber * selectedNumber)) + 1;
      }
      setGeneratedNumber(randomNumber);
      setDisabled(true);
    }
  };

  //@handleBlockPress: Function to handle block press
  const handleBlockPress = item => {
    if (generatedNumber === item) {
      setDisabled(false);
      setLastGeneratedNumber(generatedNumber);
    }
  };

  return (
    <View style={styles.gridContainer}>
      {Array.from({length: selectedNumber}, (_, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {Array.from({length: selectedNumber}, (_, colIndex) => {
            const item = rowIndex * selectedNumber + colIndex + 1;
            return (
              <TouchableOpacity
                key={item}
                style={[
                  styles.gridItem,
                  generatedNumber === item ? styles.highlighted : null,
                  {
                    width: Constant.width / selectedNumber - 10, // Adjusted width with space
                    height: Constant.width / selectedNumber - 10, // Adjusted height with space
                    maxHeight: 50, // Added max height for small screens
                    maxWidth: 50, // Added max width for small screens
                    margin: 2, // Added margin for space between items
                  },
                ]}
                onPress={() => handleBlockPress(item)}
                disabled={!disabled}>
                <Text
                  style={[
                    styles.gridText,
                    generatedNumber === item ? styles.highlighted.color : null,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}

      <TouchableOpacity
        style={[styles.generateButton, disabled ? styles.disabledButton : null]}
        onPress={generateRandomNumber}
        disabled={disabled}>
        <Text style={styles.buttonText}>Generate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Grid;
