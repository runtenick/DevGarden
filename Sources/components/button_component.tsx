import React from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, GestureResponderEvent, Dimensions, Platform  } from 'react-native';

type NavigationButton = {
    title: string,
    onPress?: ((event: GestureResponderEvent) => void)
}
  
const NavigationButton: React.FC<NavigationButton> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
            <Image source={require('../assets/right_arrow.png')}  style={styles.icon} />
        </TouchableOpacity>
    );
};

const WIDTH = Dimensions.get('window').width ;
const HEIGHT = Dimensions.get('window').height ;

const ISLANDSCAPE = WIDTH > HEIGHT;

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
        android: {
          elevation: 4,
        },
      }),
      width: '80%',
      display: "flex",
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'space-between',
      height: ISLANDSCAPE ? "20%" : 'auto',
      padding: ISLANDSCAPE ? "1%" : "3.5%",
    },
    icon: {
      resizeMode: 'contain',
      width: ISLANDSCAPE ? "10%" : "20%",
      height: ISLANDSCAPE ? "20%" : HEIGHT*0.125,
      marginRight: 8,
      marginLeft: 4,
      tintColor: '#414141',
    },
    text: {
      color: '#414141',
      fontSize: ISLANDSCAPE ? WIDTH * 0.03 : WIDTH * 0.08,
      fontWeight: 'bold',
      flexWrap: 'wrap',
      maxWidth :'75%'
    },
});
  
export default NavigationButton;