import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import IconFontAw from 'react-native-vector-icons/FontAwesome';
import IconEnt from 'react-native-vector-icons/Entypo';
import Feed from '../components/feed';
import SearchBox from '../components/SearchBox';



const NetworkScreen = (props) => {
  return (
    <View style={styles.container}>
      <SearchBox />
      <ScrollView>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginRight: 5, fontWeight: '700', color: '#0b69c0' }}>Manage my network</Text>
          </View>
          <IconEnt
            color='gray'
            size={28}
            name='chevron-small-right' />
        </View>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginRight: 5, fontWeight: '700', color: '#0b69c0' }}>Invitations</Text>
          </View>
          <IconEnt
            color='gray'
            size={28}
            name='chevron-small-right' />
        </View>
        <View style={styles.eventContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginRight: 5, fontWeight: 'normal', color: 'black' }}>Online event for you</Text>
          </View>
          <View style={styles.eventCard}>
            <Image
              style={{ resizeMode: 'cover', width: "100%", height: 100, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
              source={require('../assets/cover.jpeg')} />
            <View style={{
              marginHorizontal: 15,
            }}>
              <View style={{
                alignItems: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
                marginTop: 10,
              }}>
                <View style={{
                  left: 5,
                  position: 'absolute',
                  elevation: 1,
                  //  padding:20,
                  backgroundColor: 'white',
                  shadowColor: "#000000",
                  shadowOpacity: 0.8,
                  shadowRadius: 1,
                  shadowOffset: {
                    height: 1,
                    width: 1
                  }
                }}>
                  <Image
                    style={{
                      height: 90,
                      width: 90,

                    }}
                    source={require('../assets/sunda.png')} />
                </View>
                <View></View>
                <View style={{ borderColor: '#0b69c0', borderWidth: 1, padding: 5, borderRadius: 50, width: 50, alignItems: 'center', }}>
                  <Text style={{ fontWeight: 'bold', color: '#0b69c0' }}>Lihat</Text>
                </View>
              </View>
              <View style={{ marginBottom: 10 }}>

                <Text style={{fontWeight: '700', fontSize: 16}}>Great Contribution to the World</Text>
                <Text style={{color: '#595959'}}>Mon, 30 Jun, 14.00</Text>
                <Text style={{color: '#595959'}}>80 participant</Text>
              </View>
            </View>
          </View>
          <View style={styles.eventCard}>
            <Image
              style={{ resizeMode: 'cover', width: "100%", height: 100, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
              source={require('../assets/cover.jpeg')} />
            <View style={{
              marginHorizontal: 15,
            }}>
              <View style={{
                alignItems: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
                marginTop: 10,
              }}>
                <View style={{
                  left: 5,
                  position: 'absolute',
                  elevation: 1,
                  //  padding:20,
                  backgroundColor: 'white',
                  shadowColor: "#000000",
                  shadowOpacity: 0.8,
                  shadowRadius: 1,
                  shadowOffset: {
                    height: 1,
                    width: 1
                  }
                }}>
                  <Image
                    style={{
                      height: 90,
                      width: 90,

                    }}
                    source={require('../assets/sunda.png')} />
                </View>
                <View></View>
                <View style={{ borderColor: '#0b69c0', borderWidth: 1, padding: 5, borderRadius: 50, width: 50, alignItems: 'center', }}>
                  <Text style={{ fontWeight: 'bold', color: '#0b69c0' }}>Lihat</Text>
                </View>
              </View>
              <View style={{ marginBottom: 10 }}>

                <Text style={{fontWeight: '700', fontSize: 16}}>Great Contribution to the World</Text>
                <Text style={{color: '#595959'}}>Mon, 30 Jun, 14.00</Text>
                <Text style={{color: '#595959'}}>80 participant</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  tabContainer: {
    marginTop: 5,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginTop: 8,
    backgroundColor: 'white',
    // paddingHorizontal: 10
  },
  eventContainer: {
    // alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 8,
    backgroundColor: 'white',
    paddingTop: 15,
  },
  eventCard: {
    marginTop: 10,
    // height: 110,
    borderRadius: 10,
    elevation: 1,
    //  padding:20,
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  }
})

export default NetworkScreen;
