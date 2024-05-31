import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryOption = ({ imageUri, name, subname }) => {
  return (
    <View style={styles.optionContainer}>
      <Image source={imageUri} style={styles.optionImage} />
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionTitle}>{name}</Text>
                <Text style={styles.optionSubtitle}>{subname}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    alignItems: 'left',
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  optionImage: {
    marginRight: 10,
  },
  optionTextContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  optionTitle: {
    paddingTop: 2,
    fontSize: 10.5,
    fontWeight: 'bold',
    color: '#4A5C9C',
  },
  optionSubtitle: {
    fontSize: 10.5,
    color: '#CCCCCC',
  },
});

export default CategoryOption;
