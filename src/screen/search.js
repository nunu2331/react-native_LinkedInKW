import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import IconFontAw from 'react-native-vector-icons/FontAwesome';
import SearchBox from '../components/SearchBox';
import IconFe from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View>
    <View style={styles.header}>
      <View style={styles.logoWrapper}>
        <IconFe
                onPress={()=>navigation.goBack()}
          size={24}
          color='gray'
          name='arrow-left' />
      </View>
      <TextInput
        placeholder={'Search'}>
      </TextInput >
    </View>
    <ScrollView >
      <View style={styles.history}>
        <View style={styles.headerHistory}>
          <Text>Recent searches</Text>
          <Text style={{ color: 'gray', fontWeight: '700' }}>Clear</Text>
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>react native</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>flutter</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>Data Science</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
      </View>
      <View style={styles.history}>
        <View style={styles.headerHistory}>
          <Text>Try searching for</Text>
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>react native</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>flutter</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>Data Science</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>react native</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>flutter</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>Data Science</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>react native</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>flutter</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>Data Science</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>react native</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>flutter</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
        <View style={styles.bodyHistory}>
          <View style={{ flexDirection: 'row' }}>
            <IconFe
              color='gray'
              size={16}
              name='clock' />
            <Text style={{ color: 'black', marginLeft: 15 , fontWeight: '700'}}>Data Science</Text>
          </View>
          <IconFe
            color='gray'
            size={20}
            name='arrow-up-left' />
        </View>
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,

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
    backgroundColor: 'white',
    // paddingLeft: 10,
    padding: 5,
    width: '70%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    height: 35,
  },
  history: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  headerHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center'
  },
  bodyHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    alignItems: 'center',
    padding: 10
  }
})

export default SearchScreen;
