import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './CustomPickerStyle';

/*
 CustomPicker component 
  @options: Array of options to be displayed in the picker
  @selectedValue: Currently selected value
  @onValueChange: Function to handle value change
  @style: Custom styles for the picker
  
*/

const CustomPicker = ({ options, selectedValue, onValueChange, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Picker
        selectedValue={selectedValue} // Current selected value
        onValueChange={onValueChange} // Function to handle value change
        mode='dropdown' // Dropdown mode for picker
        placeholder='Select a value' // Placeholder text when no option is selected
        style={styles.picker} // Picker styles from CustomPickerStyle
      >
        {options?.map((option) => (
          <Picker.Item key={option} label={option.toString()} value={option} />
        ))}
      </Picker>
    </View>
  );
};

export default CustomPicker;
