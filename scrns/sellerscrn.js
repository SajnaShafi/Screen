import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
   
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const { height, width } = Dimensions.get('window')

class Bestseller extends Component {

    

    render() {
        return (
           
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', paddingHorizontal: 20 }}>
                                Best Seller
                            </Text>

                            <View style={{ height: 200, marginTop: 40 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                               <View style={{ height: 195, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd'}}>
                                 <View style={{ flex: 2 }}>
                                  <Image source={{uri:'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg'}}
                                  style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:8 }}
                                 />
                                   </View>
                                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                  <Text style={styles.text}>Item name : details</Text>
                                  <Text style={styles.text1}>quantity</Text>
                                  <View style={{flexDirection:'row'}}>
                                     <Text style={styles.text2}>$ 45</Text>
                                     <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttontext}>   ADD   </Text>
                                    </TouchableOpacity>
                                 </View>

                                 </View>
                                </View>


                                <View style={{ height: 195, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd'}}>
                                 <View style={{ flex: 2 }}>
                                  <Image source={{uri:'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg'}}
                                  style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderRadius:8 }}
                                 />
                                   </View>
                                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                  <Text style={styles.text}>Item name : details</Text>
                                  <Text style={styles.text1}>quantity</Text>
                                  <View style={{flexDirection:'row'}}>
                                     <Text style={styles.text2}>$ 45</Text>
                                     <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttontext}>   ADD   </Text>
                                    </TouchableOpacity>
                                 </View>
                                 </View>
                                </View>
                                
                                <View style={{ height: 195, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd'}}>
                                 <View style={{ flex: 2 }}>
                                  <Image source={{uri:'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg'}}
                                  style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderRadius:8 }}
                                 />
                                   </View>
                                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                  <Text style={styles.text}>Item name : details</Text>
                                  <Text style={styles.text1}>quantity</Text>
                                  <View style={{flexDirection:'row'}}>
                                     <Text style={styles.text2}>$ 45</Text>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttontext}>   ADD   </Text>
                                    </TouchableOpacity>
                                 </View>
                                 </View>
                                </View>


                                </ScrollView>
                            </View>
                            
                            </View>
                        
                    </ScrollView>

               
        );
    }
}
export default Bestseller;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    text:{
        fontSize:12,
        fontWeight:'bold'
    },
    text1:{
        fontWeight:'normal',
        fontSize:10,
        color:'grey'
    },
    text2:{
        fontSize:12,
        fontWeight:'bold',
        marginTop:10
    },
    button:{
    backgroundColor:'white',
    borderColor:'grey',
    borderRadius:10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    elevation: 2,
    marginStart:20,
    marginBottom:10,
    width:70

    },
    buttontext:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:5,
        color:'limegreen',
        marginStart:10
    }

});