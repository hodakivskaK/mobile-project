import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RegistrationScreen } from './src/screens/RegistrationScreen'
import { LoginScreen } from './src/screens/LoginScreen';
import backgroundPhoto from './src/Image/Background.png'
import { useFonts } from 'expo-font';



export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} >
       <StatusBar style="auto" />
  
      <ImageBackground source={backgroundPhoto} resizeMode="cover" style={styles.image}>
        <View style={styles.wrapper}>
            {/* <RegistrationScreen /> */}
          <LoginScreen/>
           </View>
         </ImageBackground>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    position: "relative",
    flex: 1,
    alignItems: 'center',
    
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
        justifyContent: 'flex-end',

  }
});
