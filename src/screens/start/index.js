import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Image1 from '../../assets/images/boss.jpg'
import Face1 from '../../assets/images/f1.jpg'
import Face2 from '../../assets/images/f2.jpg'
import Face3 from '../../assets/images/f3.jpg'
import Image2 from '../../assets/images/imageicon.jpg'
import Image3 from '../../assets/images/image1.png'
import Twitter from '../../assets/images/twitter.png';
import Tiktok from '../../assets/images/tiktok.png';
import Instagram from '../../assets/images/instagram.png';
import LinearGradient from 'react-native-linear-gradient';
const Start = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <LinearGradient
        colors={['#9B0079','#64004E','#000000']}
        
        locations={[0.2,0.4,1]}
        >
    <View style={{ marginHorizontal: width(2), marginTop: height(2) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            
             <Image source={Image2}
             style={{ height:height(7),width:width(15),marginLeft:width(2) }}
           />
            <View style={{}}>
              <View style={{ height: height(0.5), width: width(40), backgroundColor: '#ffffff' }} />
              <View style={{ height: height(0.5), width: width(40), backgroundColor: '#ffffff', marginTop: height(1) }} />
              <View style={{ height: height(0.5), width: width(40), backgroundColor: '#ffffff', marginTop: height(1) }} />
            </View>
            <View style={{ height: height(5), width: width(25), alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF00C7', borderRadius: totalSize(5), borderColor: '#000000',borderWidth:totalSize(0.2) }}>
              <Text style={{ color: '#ffffff', fontSize: totalSize(2) }}>Login</Text>
            </View>
            </View>
            </View>
            <View style={styles.container}>
            <Text style={styles.text1}>Metashooters</Text>
            <Text style={styles.text2}>Sammle deine Stars!</Text>
            
            <View style={{ marginTop: height(25), width: width('95'), alignItems: 'center', backgroundColor: '#ffffff', borderRadius: totalSize(3), borderColor: 'black',marginBottom:height(2) }}>
              <Text style={{ fontSize: totalSize(2.5), textAlign: 'center',lineHeight:totalSize(5),marginTop:height(3),fontWeight:'bold',color:'black' }}>Greife auf Tausende Prominente {'\n'} zu und sammle einzigartige {'\n'} Karten deiner Stars!</Text>
             <TouchableOpacity>
              <View style={{ height: height(5), width: width('90'), marginTop: height(2), alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF00C7', borderRadius: totalSize(5), borderColor: '#000000',borderWidth:totalSize(0.2),marginBottom:height(1) }}>
                <Text style={{ color: '#ffffff', fontSize: totalSize(2) }}>Start collecting!</Text>
              </View>
              </TouchableOpacity>
            </View>
          </View>
          </LinearGradient>
          <View style={{backgroundColor:'#000000'}}>
          <View style={{ marginTop: height(5) }}>
          <Text style={styles.text1}>Wie funktioniert's?</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: height(5), alignItems: 'center', justifyContent: 'space-between',marginHorizontal:width(2) }}>
          <View>
            <View style={{ height: height(5), width: width(10), alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF00C7', borderRadius: totalSize(5), borderColor: 'black' }}>
              <Text style={{ color: '#ffffff', fontSize: totalSize(2) }}>1</Text>
            </View>
            <Text style={{ color: '#ffffff', fontSize: totalSize(3), fontWeight: '600',marginTop:height(1) }}>Find deinen {'\n'}Lieblingsstar!</Text>
            <Text style={{ color: '#ffffff', fontSize: totalSize(1.5), fontWeight: '400' }}>Geburtstage, Meilensteine {'\n'}order auch ein wohlverdienerter {'\n'}Roast, der perfekte promi {'\n'}dafur ist nur eine Suche {'\n'}entfernt.Finde deine(n) und {'\n'}frage sie/ihn an.  </Text>
          </View>
          <Image source={Image3}
             style={{ height:height(35),width:width(45),borderRadius:totalSize(3) }}
           />
        </View>

        <View style={{ flexDirection: 'row', marginTop: height(5), alignItems: 'center', justifyContent: 'space-between',marginHorizontal:width(2) }}>
        <Image source={Image3}
             style={{ height:height(35),width:width(45),borderRadius:totalSize(2) }}
           />
          <View>
            <View style={{ height: height(5), width: width(10), alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF00C7', borderRadius: totalSize(5), borderColor: 'black' }}>
              <Text style={{ color: '#ffffff', fontSize: totalSize(2) }}>2</Text>
            </View>
            <Text style={{ color: '#ffffff', fontSize: totalSize(3), fontWeight: '600',marginTop:height(1) }}>Find deinen {'\n'}Lieblingsstar!</Text>
            <Text style={{ color: '#ffffff', fontSize: totalSize(1.5), fontWeight: '400' }}>Geburtstage, Meilensteine {'\n'}order auch ein wohlverdienerter {'\n'}Roast, der perfekte promi {'\n'}dafur ist nur eine Suche {'\n'}entfernt.Finde deine(n) und {'\n'}frage sie/ihn an. </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: height(5), alignItems: 'center', justifyContent: 'space-between',marginHorizontal:width(2),marginBottom:height(2) }}>
          <View>
            <View style={{ height: height(5), width: width(10), alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF00C7', borderRadius: totalSize(5), borderColor: 'black' }}>
              <Text style={{ color: '#ffffff', fontSize: totalSize(2) }}>3</Text>
            </View>
            <Text style={{ color: '#ffffff', fontSize: totalSize(3), fontWeight: '600',marginTop:height(1) }}>Find deinen {'\n'}Lieblingsstar!</Text>
            <Text style={{ color: '#ffffff', fontSize: totalSize(1.5), fontWeight: '400' }}>Geburtstage, Meilensteine {'\n'}order auch ein wohlverdienerter {'\n'}Roast, der perfekte promi {'\n'}dafur ist nur eine Suche {'\n'}entfernt.Finde deine(n) und {'\n'}frage sie/ihn an. </Text>
          </View>
          <Image source={Image3}
             style={{ height:height(35),width:width(45),borderRadius:totalSize(2) }}
           />
        </View>
        </View>
        <View style={{ width: '100%', backgroundColor: '#FF00C7' }}>
          <View style={{ marginTop: height(1), marginBottom: height(7) }}>
            <Text style={styles.text1}>Kollektionen</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height(1) }}>
                <View style={{ marginLeft: width(5), alignItems: 'center' }}>
                  <Text style={{ color: 'white', fontSize: totalSize(2), fontWeight: '600' }}>90s</Text>
                  <Image source={Image3}
             style={{ height:height(17),width:width(60),borderRadius:totalSize(3) }}
           />
                  <Text style={{ color: 'white', fontSize: totalSize(1.5), fontWeight: '600', marginTop: height(0.5) }}>your favourite 90s {'\n'} Star collections!</Text>
                  <View style={{backgroundColor:'#00000080',color:'transparent', height: height(5), width: width(50), borderRadius: totalSize(3), marginTop: height(0.5), borderColor: 'black', borderWidth: totalSize(0.2), alignItems: 'center', justifyContent: 'center'  }}>
                    <Text style={{ color: 'white', fontSize: totalSize(2), fontWeight: '600' }}>Get yours!</Text>
                  </View>
                  <View>
                  </View>
                </View>
                <View style={{ marginLeft: width(5), alignItems: 'center', marginRight: width(3) }}>
                  <Text style={{ color: 'white', fontSize: totalSize(2), fontWeight: '600' }}>90s</Text>
                  <Image source={Image3}
             style={{ height:height(17),width:width(60),borderRadius:totalSize(3) }}
           />
                   <Text style={{ color: 'white', fontSize: totalSize(1.5), fontWeight: '600', marginTop: height(0.5) }}>your favourite 90s {'\n'} Star collections!</Text>
                  <View style={{backgroundColor:'#00000080',color:'transparent', height: height(5), width: width(50), borderRadius: totalSize(3), marginTop: height(0.5), borderColor: 'black', borderWidth: totalSize(0.2), alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: totalSize(2), fontWeight: '600' }}>Get yours!</Text>
                  </View>
                  <View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      <View style={{backgroundColor:'#000000'}}>
        <View style={{ marginTop: height(1), marginHorizontal: width(3)}}>
          <Text style={styles.text1}>Marktplatz</Text>
          <Text style={{ color: '#ffffff', marginTop: height(2), fontSize: totalSize(2), fontWeight: '700' }} >Explore</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                <View style={{ backgroundColor: '#800080', height: height(20), width: width(60), borderRadius: 10, marginTop: height(2),alignItems:'center',justifyContent:'center' }}>
                 <View style={{flexDirection:'row'}}>
                 <Image style={styles.face1} source={Face1}
                  size={totalSize(5)}
                />
                  <Image style={styles.face2} source={Face2}
                  size={totalSize(5)}
                />
                <Image style={styles.face3} source={Face3}
                  size={totalSize(5)}
                />
                  </View>
                
                  <Text style={{ color: 'white', fontSize: totalSize(2), fontWeight: '700', marginTop: height(2) }}>TV</Text>
                
                  </View>
                 
                
               
              <View style={{ backgroundColor: '#800080', height: height(20), width: width(60), borderRadius: 10, marginTop: height(2), marginHorizontal: width(4), alignItems: 'center', justifyContent: 'center' }}>
              
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image style={styles.face1} source={Face1}
                  size={totalSize(5)}
                />
                  <Image style={styles.face2} source={Face2}
                  size={totalSize(5)}
                />
                <Image style={styles.face3} source={Face3}
                  size={totalSize(5)}
                />
                </View>
                <Text style={{ color: 'white', fontSize: totalSize(2), fontWeight: '700', marginTop: height(1) }}>TV</Text>
              </View>
            </View>
          </ScrollView>
          </View>
          <Text style={{ color: '#ffffff', marginTop: height(2), fontSize: totalSize(2), fontWeight: '700',marginHorizontal:width(2) }} >Collect ypur STAR today!</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height(2),marginBottom:height(7),marginHorizontal:width(2) }}>
              <View >
                <Image source={Image1}
                  style={{ borderRadius: totalSize(2),height:height(25),width:width(42) }}
                />
                <Text style={{ color: '#ffffff', marginTop: height(1), fontSize: totalSize(2), fontWeight: '700' }} >Andrew lopez</Text>
                <Text style={{ color: '#ffffff', marginTop: height(1), fontSize: totalSize(1.1) }} >Lorem Ipsum, giving information on {'\n'}its origins, as well as a random Lipsum</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height(0.5) }}>
                  <AntDesign
                    name='star'
                    color={'yellow'}
                    size={totalSize(2)}
                  />
                  <Text style={{ color: '#ffffff', fontSize: totalSize(2), fontWeight: '700', marginLeft: width(2) }} >4.98<Text style={{ fontWeight: '300' }}> (1.367)</Text></Text>
                </View>
                <Text style={{ color: '#ffffff', fontSize: totalSize(2), fontWeight: '700', marginTop: height(0.5) }} >321 CHF</Text>
              </View>
              <View style={{ marginLeft: width(6) }}>
                <Image source={Image1}
                  style={{ borderRadius: totalSize(2),height:height(25),width:width(42) }}
                />
                <Text style={{ color: '#ffffff', marginTop: height(1), fontSize: totalSize(2), fontWeight: '700' }} >Andrew lopez</Text>
                <Text style={{ color: '#ffffff', marginTop: height(1), fontSize: totalSize(1.1) }} >Lorem Ipsum, giving information on {'\n'}its origins, as well as a random Lipsum</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height(0.5) }}>
                  <AntDesign
                    name='star'
                    color={'yellow'}
                    size={totalSize(2)}
                  />
                  <Text style={{ color: '#ffffff', fontSize: totalSize(2), fontWeight: '700', marginLeft: width(2) }} >4.98<Text style={{ fontWeight: '300' }}> (1.367)</Text></Text>
                </View>
                <Text style={{ color: '#ffffff', fontSize: totalSize(2), fontWeight: '700', marginTop: height(0.5) }} >321 CHF</Text>
              </View>
              <View style={{ marginLeft: width(6) }}>
                <Image source={Image1}
                  style={{ borderRadius: totalSize(2),height:height(25),width:width(42) }}
                />
                <Text style={{ color: '#ffffff', marginTop: height(1), fontSize: totalSize(2), fontWeight: '700' }} >Andrew lopez</Text>
                <Text style={{ color: '#ffffff', marginTop: height(1), fontSize: totalSize(1.1) }} >Lorem Ipsum, giving information on {'\n'}its origins, as well as a random Lipsum</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height(0.5) }}>
                  <AntDesign
                    name='star'
                    color={'yellow'}
                    size={totalSize(2)}
                  />
                  <Text style={{ color: '#ffffff', fontSize: totalSize(2), fontWeight: '700', marginLeft: width(2) }} >4.98<Text style={{ fontWeight: '300' }}> (1.367)</Text></Text>
                </View>
                <Text style={{ color: '#ffffff', fontSize: totalSize(2), fontWeight: '700', marginTop: height(0.5) }} >321 CHF</Text>
              </View>
            </View>
          </ScrollView>
          </View>
          <LinearGradient
          colors={['#000000','#FF00C7']}
          locations={[0.5,1]}
          >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginBottom:height(1) }}>
            <View style={{marginLeft:width(2)}}>
              <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: totalSize(1.5) }} >Impressum</Text>
              <Text style={{ color: '#ffffff', fontSize: totalSize(1.5), fontWeight: '500', marginTop: height(1) }} >Datenschutz</Text>
              <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: totalSize(1.5), marginTop: height(1) }} >AGB</Text>
         
              </View>
              
            <Text style={{ color: '#ffffff', fontSize: totalSize(2), fontWeight: 'bold' }} >Metashooters</Text>
            <View style={{marginRight:width(2)}}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image  source={Instagram} style={{height:height(2),width:width(4)}}/>
                <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: totalSize(1.5), marginLeft: width(1) }} >Instagram</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height(1) }}>
        
            <Image  source={Twitter} style={{height:height(2),width:width(4)}}
            />
                <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: totalSize(1.5), marginLeft: width(3) }} >Twitter</Text> 
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image  source={Tiktok} style={{height:height(2),width:width(4)}}/>
                <Text style={{ color: '#ffffff', fontWeight: '500',fontSize: totalSize(1.5) , marginTop: height(1),marginLeft:width(3) }} >TicTok</Text>
                </View>
              </View>
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
      backgroundColor:{
         height:'100%'
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
      face1: {
        height:height(5),
        width:width(10),
       borderRadius:totalSize(8),
        position:'absolute',
        right:0,
        left:0,
        top:15,
        bottom:0,
      },
      face2: {
        height:height(10),
        width:width(18),
        borderRadius:totalSize(8),
        position:'absolute',
        right:0,
        left:25,
        top:0,
        bottom:0,
      },
      face3: {
        height:height(5),
        width:width(10),
        borderRadius:totalSize(8),
        position:'absolute',
        right:0,
        left:80,
        top:15,
        bottom:0,
      },
    
    })
export default Start