import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Страница не найдена</Text>
      <br />
      <Link href="/">Перейти на главную</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default NotFoundScreen;
