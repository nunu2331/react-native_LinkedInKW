import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, } from 'react-native';
import IconFontAw from 'react-native-vector-icons/FontAwesome'
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconFe from 'react-native-vector-icons/Feather';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconMater from 'react-native-vector-icons/MaterialCommunityIcons';


const Feed = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 5, fontWeight: '700' }}>Your Friend</Text>
                    <Text>likes this</Text>
                </View>
                <IconEnt
                    color='gray'
                    size={14}
                    name='dots-three-vertical' />
            </View>
            <View style={styles.nameWrapper}>
                <View style={styles.headerName}>
                    <Image
                        style={{ borderRadius: 50, width: 50, height: 50 }}
                        source={require('../assets/ganteng2.jpg')} />
                    <View style={{ marginLeft: 10, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontWeight: '700' }}>Jhon Chena Musk Elon </Text>
                            <IconEnt
                                color='gray'
                                name='dot-single' />
                            <Text style={{ fontSize: 10, }}>2nd </Text>
                        </View>
                        <Text style={{ fontSize: 12, color: 'gray' }}>Master Ilmu Tenaga Dalam </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, color: 'gray' }}>1w </Text>
                            <IconEnt
                                color='gray'
                                name='dot-single' />
                            <IconMater
                                color='gray'
                                name='earth' />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{ borderWidth: 0, padding: 15 }}>
                    <Text style={{ color: '#0b69c0', fontWeight: '700' }}>+ Follow</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.thread}>
                <Text>The implementation of threads and processes differs between operating systems, but in most cases a thread is a component of a process.</Text>
                <Text style={{ color: '#0b69c0', fontWeight: '700', marginVertical: 15 }}>See translation</Text>
            </View>
            <View style={styles.pagesContainer}>
                <View style={styles.pagesHeader}>
                    <Text style={{ fontWeight: '700' }}>Judul Thread</Text>
                    <IconEnt
                        color='black'
                        name='dot-single' />
                    <Text>8 pages</Text>
                </View>
                <ScrollView horizontal={true} style={styles.imageWrapper}>
                    <Image
                        style={styles.img}
                        source={require('../assets/BeritaKepo.png')} />
                    <Image
                        style={styles.img}
                        source={require('../assets/KumparanKW.png')} />
                    <Image
                        style={styles.img}
                        source={require('../assets/TokPed.png')} />
                </ScrollView>
                <View style={styles.likeContainer}>
                    <View style={styles.likeWrapper}>
                        <IconEvil
                            size={24}
                            color='#0588be'
                            name='like' />
                        <IconEvil
                            size={24}
                            color='#eb6143'
                            name='heart' />
                        <IconEvil
                            size={24}
                            color='#ffbb58'
                            name='star' />
                    </View>
                    <Text style={{ fontSize: 12, color: 'gray' }}>16 comments</Text>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.actionBox}>
                    <IconEvil
                        size={24}
                        color='black'
                        name='like' />
                    <Text style={{fontSize: 10,}}>Like</Text>
                </View>
                <View style={styles.actionBox}>
                    <IconEvil
                        size={24}
                        color='black'
                        name='comment' />
                    <Text style={{fontSize: 10,}}>Comment</Text>
                </View>
                <View style={styles.actionBox}>
                    <IconEvil
                        size={24}
                        color='black'
                        name='share-google' />
                    <Text style={{fontSize: 10,}}>Share</Text>
                </View>
                <View style={styles.actionBox}>
                    <IconEvil
                        size={24}
                        color='black'
                        name='pointer' />
                    <Text style={{fontSize: 10,}}>Send</Text>
                </View>
            </View>

        </View>
    )
}

export default Feed;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 8,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5
        // paddingHorizontal: 10
    },
    nameWrapper: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 5,
        borderTopWidth: 1,
        borderColor: '#eef3f7',
        marginHorizontal: 10,
        alignItems: 'center'
    },
    headerName: {
        flexDirection: 'row',
        // borderWidth: 1, 
        alignItems: 'center'
    },
    thread: {
        marginHorizontal: 10,
        // borderWidth: 1,
        width: '80%',
        marginTop: 5
    },
    pagesContainer: {
        backgroundColor: '#eef3f7'
    },
    pagesHeader: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    imageWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 5,
    },
    img: {
        height: 280,
        width: 280,
        marginRight: 15,
        resizeMode: 'contain',
        borderRadius: 10,
        marginBottom: 15,
    },
    likeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10
    },
    likeWrapper: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    actionContainer: {
        borderTopWidth: 1,
        flexDirection: 'row',
        borderColor: '#eef3f7',
        marginHorizontal: 15,
        padding: 5,
        paddingVertical: 10,
        justifyContent: 'space-around'
    },
    actionBox: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
