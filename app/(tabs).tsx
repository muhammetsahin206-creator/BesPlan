import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="index" options={{ title: 'Ana Sayfa' }} />
      <Tabs.Screen name="besplan" options={{ title: 'BesPlan' }} />
    </Tabs>
  );
}
