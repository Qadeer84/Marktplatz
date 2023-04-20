import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Image2 from '../../assets/images/imageicon.jpg'
import LinearGradient from 'react-native-linear-gradient';
const Collection = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient
                colors={['#9B0079', '#64004E', '#000000']}
                style={{}}
                locations={[0.2, 0.4,1]}
            >
                <View style={{ marginHorizontal: width(2), marginTop: height(2) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <Image source={Image2}
                            style={{ height: height(7), width: width(15), marginLeft: width(2) }}
                        />
                        <View style={{}}>
                            <View style={{ height: height(0.5), width: width(40), backgroundColor: '#ffffff' }} />
                            <View style={{ height: height(0.5), width: width(40), backgroundColor: '#ffffff', marginTop: height(1) }} />
                            <View style={{ height: height(0.5), width: width(40), backgroundColor: '#ffffff', marginTop: height(1) }} />
                        </View>
                        <View style={{ height: height(5), width: width(25), alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF00C7', borderRadius: totalSize(5), borderColor: '#000000', borderWidth: totalSize(0.2) }}>
                            <Text style={{ color: '#ffffff', fontSize: totalSize(2) }}>Login</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text1}>Collectionname #ID</Text>
                    <Text style={styles.text2}>Star Name</Text>
                </View>
                <View style={{ marginLeft: width(4), marginTop: height(5) }}>
                    <View style={{ backgroundColor: 'green', height: height(2.5), width: width(22), borderRadius: totalSize(0.5), alignItems: 'center' }}>
                        <Text style={{ color: '#ffffff', fontSize: totalSize(1.5), fontWeight: '600' }}>UNCOMMON</Text>
                    </View>
                    <Text style={{ fontSize: totalSize(5), fontWeight: '400', color: '#ffffff', marginTop: height(1) }}>Trea Turner</Text>
                    <Text style={{ fontSize: totalSize(2.3), fontWeight: '400', color: '#BEBBBF' }}>2022 All-Star ICONs</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: width(4) }}>
                    <Text style={{ fontSize: totalSize(5), fontWeight: '400', color: '#ffffff' }}>LA</Text>
                    <Text style={{ fontSize: totalSize(4), fontWeight: '400', color: '#ffffff', marginLeft: width(5) }}>Los Angeler Dodgers {'\n'}#6 | Second Base  </Text>
                </View>
                <View style={{ marginTop: height(2),marginHorizontal:width(4) }}>
                    <Text style={{ fontSize: totalSize(2.3), fontWeight: '500', color: '#ffffff' }}>Player Bio</Text>
                    <Text style={{ fontSize: totalSize(1.8), fontWeight: '300', color: '#BEBBBF', marginTop: height(2) }}>BATS / THROWS: {'               '}<Text style={{ color: '#ffffff', fontWeight: '400' }}>RIGHT / RIGHT</Text></Text>
                    <Text style={{ fontSize: totalSize(1.8), fontWeight: '300', color: '#BEBBBF', marginTop: height(1) }}>HEIGHT / WEIGHT: {'            '}<Text style={{ color: '#ffffff', fontWeight: '400' }}>6'1" / 185</Text></Text>
                    <Text style={{ fontSize: totalSize(1.8), fontWeight: '300', color: '#BEBBBF', marginTop: height(1) }}>AGE: {'                                      '}<Text style={{ color: '#ffffff', fontWeight: '400' }}>29</Text></Text>
                    <Text style={{ fontSize: totalSize(1.8), fontWeight: '300', color: '#BEBBBF', marginTop: height(1) }}>DATE BORN: {'                       '}<Text style={{ color: '#ffffff', fontWeight: '400' }}>06/30/1993</Text></Text>
                    <Text style={{ fontSize: totalSize(1.8), fontWeight: '300', color: '#BEBBBF', marginTop: height(1) }}>HOMETOWN: {'                     '}<Text style={{ color: '#ffffff', fontWeight: '400' }}>BOYNTON BEACH, {'\n'}{'                                           '}FL</Text></Text>
                    <Text style={{ fontSize: totalSize(1.8), fontWeight: '300', color: '#BEBBBF', marginTop: height(1) }}>SIGNED: {'                              '}<Text style={{ color: '#ffffff', fontWeight: '400' }}>SAN DIEGO {'\n'}{'                                          '} PADRES, 2014 {'\n'}{'                                           '}ROUND:1, PICK:13 </Text></Text>
                    <Text style={{ fontSize: totalSize(2), fontWeight: '300', color: '#BEBBBF', marginTop: height(1) }}>LOWESTASK: {'              '}<Text style={{ color: '#BEBBBF', fontWeight: '300' }}>EDITIO #</Text></Text>
                    <Text style={{ fontSize: totalSize(2.3), fontWeight: '500', color: '#ffffff' }}>$4.50 {'                     '} 114 OF 117</Text>
                    <View style={{backgroundColor:'#FF037C',height:height(5),width:'100%',marginTop:height(2),borderRadius:totalSize(1),alignItems:'center',justifyContent:'center'}}>
                    <Text style={{ fontSize: totalSize(1.8), fontWeight: '400', color: '#ffffff' }}>Get IT NOW</Text>
                    </View>
                    <View style={{height:height(5),width:'100%',marginTop:height(2),borderRadius:totalSize(1),alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#BEBBBF'}}>
                    <Text style={{ fontSize: totalSize(1.8), fontWeight: '400', color: '#ffffff' }}>View All Listings</Text>
                    </View>
                    </View>
            </LinearGradient>
            <View style={{ backgroundColor: '#000000' }}>
                <View style={{marginTop:height(3),marginHorizontal:width(4)}}>
                <Text style={{ fontSize: totalSize(4.4), fontWeight: '600', color: '#ffffff' }}>About this collectible</Text>
                <Text style={{ fontSize: totalSize(1.5), fontWeight: '500', color: '#ffffff',marginTop:height(3) }}>collectible stats</Text>
                    
                </View>
           
            </View>
        
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#000000' }}>
                <View style={{ marginLeft: width(2) }}>
                    <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: totalSize(1.5) }} >Impressum</Text>
                    <Text style={{ color: '#ffffff', fontSize: totalSize(1.5), fontWeight: '500', marginTop: height(1) }} >Datenschutz</Text>
                </View>

                <Text style={{ color: '#ffffff', fontSize: totalSize(2), fontWeight: 'bold' }} >Metashooters</Text>
                <View style={{ marginRight: width(2) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: totalSize(1.5), marginLeft: width(1) }} >Instagram</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height(1) }}>
                        <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: totalSize(1.5), marginLeft: width(3) }} >Twitter</Text>
                    </View>
                </View>
            </View>
            <LinearGradient
                colors={['#000000', '#FF00C7']}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: width(5) }}>
                    <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: totalSize(1.5), marginTop: height(2), marginBottom: height(2) }} >AGB</Text>
                    <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: totalSize(1.5), marginTop: height(2), marginBottom: height(2) }} >TicTok</Text>
                </View>
            </LinearGradient>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: height(4)
    },
    text1: {
        alignSelf: 'center',
        fontSize: totalSize(3),
        fontWeight: 'bold',
        color: '#ffffff'
    },
    text2: {
        fontSize: totalSize(2),
        alignItems: 'center',
        color: '#ffffff'
    },

})
export default Collection