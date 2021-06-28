import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView ,StyleSheet, StatusBar } from 'react-native';
import IconFontAw from 'react-native-vector-icons/FontAwesome'
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Feed from '../components/feed';


const Dashboard = (props) => {
    const navigation = useNavigation();
  return(
      <ScrollView style={styles.container}>
      {/* <StatusBar
          animated={true}
          backgroundColor="white" /> */}
      <View style={styles.header}>
          <View style={styles.logoWrapper}>
              <Image
                  style={styles.logoheader}
                  source={require('../assets/ganteng.jpg')} />
          </View>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('SearchScreen')}
          style={styles.searchContainer}>
              <View style={{flexDirection: 'row'}}>

              <IconEvil
                  size={22}
                  color='gray'
                  name='search' />
              <Text style={{ color: 'gray', marginLeft: 2 }}>Search</Text>

              </View>
              <IconAnt
                  size={22}
                  color='gray'
                  name='scan1' />
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
      <Feed/>
      <Feed/>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1
    },
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eef3f7',
        // paddingLeft: 10,
        padding: 5,
        width: '70%',
        // borderWidth: 1,
        borderRadius: 5,
        // borderColor: 'white',
        height: 35,
    },
})

export default Dashboard;
