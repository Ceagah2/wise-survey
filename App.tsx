import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from './src/pages/Home';
import Slider from './src/pages/Slider'

export default function App() {
  const Stack = createNativeStackNavigator()
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Slider" component={Slider} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
