import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return <Drawer>
    <Drawer.Screen name="index" options={{ title: 'Home' }} />
    <Drawer.Screen name="CurrencyConvertor" options={{ title: 'Currency Convertor' }} />
    <Drawer.Screen name="LengthConvertor" options={{ title: 'Length Convertor' }} />
  </Drawer>;
}
