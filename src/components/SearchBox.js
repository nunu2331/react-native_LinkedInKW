import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput,Image ,TouchableOpacity} from 'react-native';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';

const SearchBox = (props) => {
  return(
    <View style={styles.header}>
          <View style={styles.logoWrapper}>
              <Image
                  style={styles.logoheader}
                  source={require('../assets/ganteng.jpg')} />
          </View>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('SearchScreen')}
          style={styles.searchContainer}>
              <IconEvil
                  size={22}
                  color='gray'
                  name='search' />
              <Text style={{ color: 'gray', marginLeft: 2 }}>Search</Text>

          </TouchableOpacity >
          <TouchableOpacity 
          style={{marginRight: 15}}
          >
              <IconAnt
                  size={22}
                  color='gray'
                  name='message1' />
          </TouchableOpacity >
      </View>
  )
}


export default SearchBox;

export const styles = StyleSheet.create({
  header: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      

  },
  logoWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 45,
      width: 45,
      marginLeft: 5,
      // borderWidth: 1,
      // borderColor: 'white'
  },
  logoheader: {
      // position: 'absolute'
      height: 30,
      width: 30,
      borderRadius: 50
  },
  searchContainer: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#eef3f7',
      // paddingLeft: 10,
      padding: 5,
      width: '70%',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'white',
      height: 35,
  },
});
