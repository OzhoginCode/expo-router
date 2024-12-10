import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const TabLayout = () => (
  <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Обо мне',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }} />
    <Tabs.Screen
      name="languages"
      options={{
        title: 'Языки программирования',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="code" color={color} />,
      }} />
  </Tabs>
)

export default TabLayout;
