import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../constants';
import { fonts } from '../../assets';

/**
 * Props for the ToggleSelector component.
 * @interface ToggleSelectorProps
 * @property {string[]} options - An array of options to be displayed in the toggle selector.
 * @property {string} selectedOption - The currently selected option.
 * @property {(option: string) => void} onSelect - Callback function called when an option is selected.
 */
interface ToggleSelectorProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

/**
 * A functional component that renders a toggle selector with multiple options.
 *
 * @param {ToggleSelectorProps} props - The properties passed to the component.
 * @param {string[]} props.options - The options to display in the toggle selector.
 * @param {string} props.selectedOption - The currently selected option.
 * @param {(option: string) => void} props.onSelect - Callback function to handle option selection.
 * @returns {JSX.Element} The rendered toggle selector component.
 */
export const ToggleSelector: React.FC<ToggleSelectorProps> = ({ options, selectedOption, onSelect }) => {
  return (
    <View style={styles.toggleContainer}>
      {options.map((option) => (
        <TouchableOpacity key={option} onPress={() => onSelect(option)} style={styles.toggleButton}>
          {selectedOption === option ? (
            <LinearGradient
              colors={[Colors.GRADIENT1, Colors.GRADIENT2]}
              style={styles.selectedButton}
              start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            >
              <Text style={styles.selectedText}>{option}</Text>
            </LinearGradient>
          ) : (
            <View style={styles.unselectedButton}>
              <Text style={styles.unselectedText}>{option}</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleButton: {
    marginRight: 10,
  },
  selectedButton: {
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unselectedButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.TEXTCOLOR,
    paddingVertical: 4,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: Colors.TEXTBLACK,
    fontFamily: fonts.Medium,
    fontSize: 12,
  },
  unselectedText: {
    color: Colors.TEXTCOLOR,
    fontFamily: fonts.Medium,
    fontSize: 12,
  },
});
