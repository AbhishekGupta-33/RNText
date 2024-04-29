// Created on April 30, 2024
// Created by Abhishek
import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native';
import CustomPicker from './component/parts/CustomPicker/CustomPicker';
import Grid from './component/parts/Grid/Grid';
import {appColors} from './utils/Color';

const App = () => {
  const [selectedGridSize, setSelectedGridSize] = useState(2); // Default value is 2
  const gridSizeOptions = [2, 3, 4, 5, 6, 7, 8, 9]; // Options from 2 to 9

  // Function to handle grid size change
  const handleGridSizeChange = value => {
    setSelectedGridSize(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={appColors.WHITE} barStyle={'dark-content'} />
      <Text style={styles.dropdownToggle}>{'Select a number'}</Text>
      <CustomPicker
        options={gridSizeOptions} // Array of options for grid size selection
        selectedValue={selectedGridSize} // Currently selected grid size
        onValueChange={handleGridSizeChange} // Function to handle grid size change
      />

      <Grid selectedNumber={selectedGridSize} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: appColors.WHITE,
  },
  pickerStyle: {
    width: 200,
    marginBottom: 20,
  },
  generatedNumberText: {
    marginTop: 10,
    fontSize: 18,
  },
  dropdownToggle: {
    fontSize: 16,
    padding: 10,
    marginHorizontal: 16,
  },
});

export default App;
