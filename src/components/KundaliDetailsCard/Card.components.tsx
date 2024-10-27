import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts } from '../../assets';
import { Colors } from '../../constants';

/**
 * Props for the KundaliCard component.
 * @interface KundaliCardProps
 * @property {string} title - The title of the card.
 * @property {string} description - The description displayed in the card.
 */
interface KundaliCardProps {
  title: string;
  description: string;
}

/**
 * A functional component that renders a card with a title and description.
 *
 * @param {KundaliCardProps} props - The properties passed to the component.
 * @param {string} props.title - The title to display in the card.
 * @param {string} props.description - The description to display in the card.
 * @returns {JSX.Element} The rendered card component.
 */
const KundaliCard: React.FC<KundaliCardProps> = ({ title, description }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    overflow: 'hidden',
    backgroundColor: Colors.GLASSMRPH,
    borderRadius: 13,
    padding: 14,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: fonts.Medium,
    color: Colors.TEXTCOLOR,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    color: Colors.TEXTCOLOR,
    lineHeight: 20,
    fontFamily: fonts.Regular,
    opacity: 0.9,
  },
});

export default KundaliCard;
