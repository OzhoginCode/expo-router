import { View, Text, StyleSheet } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Hi! My name is Daniil Ozhogin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
