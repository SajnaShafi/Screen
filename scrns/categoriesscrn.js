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
import Icon1 from 'react-native-vector-icons/AntDesign'

const { height, width } = Dimensions.get('window')

class Categories extends Component {

    render() {
    return (
           <ScrollView
                scrollEventThrottle={16}
                >
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', paddingHorizontal: 20 }}>
                        Categories
                    </Text>
                <View style={{ height: 100, marginTop: 40 }}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:90}}>
                      <View style={styles.imgset}>
                      <View style={{ flex:1}}>
                      <Image source={{uri:'https://5.imimg.com/data5/IR/NE/RG/SELLER-74523754/house-keeping-liquied-500x500.jpg'}}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:8 }}
                      /> 
                      </View>
                      </View>
                      <Text style={styles.text}>Cleaning and Household</Text>
                    </View>
                    <View style={{marginStart:25}}>
                      <View style={{width:90}}>
                      <View style={styles.imgset}>
                      <View style={{ flex:1}}>
                      <Image source={{uri:'https://5.imimg.com/data5/FI/KX/CJ/SELLER-110263724/6-png-500x500.png'}}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:8 }}
                        /> 
                      </View>
                      </View>
                      <Text style={styles.text}>Breakfast and Diary</Text>
                      </View>
                    </View>
                    <View style={{marginStart:15}}>
                       <View style={{width:100}}>
                       <View style={styles.imgset}>
                       <View style={{ flex:1}}>
                       <Image source={{uri:'https://image.shutterstock.com/image-photo/fresh-vegetables-isolated-on-white-260nw-232298731.jpg'}}
                          style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:8 }}
                          /> 
                        </View>
                        </View>
                        <Text style={styles.text}>Fresh vegetable</Text>
                        </View>
                        </View>
                </View>
            </View>


            <View style={{ height: 100, marginTop: 40 }}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:100}}>
                      <View style={styles.imgset}>
                      <View style={{ flex:1}}>
                      <Image source={{uri:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y8lfzrhe0r7n5ktxvyt4'}}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:8 }}
                      /> 
                      </View>
                      </View>
                      <Text style={styles.text}>Beverage</Text>
                    </View>
                    <View style={{marginStart:15}}>
                      <View style={{width:100}}>
                      <View style={styles.imgset}>
                      <View style={{ flex:1}}>
                      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOp31Uj4AdwT41CYLCjWgA3-LufZGy6Rr0dA&usqp=CAU'}}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:8 }}
                        /> 
                      </View>
                      </View>
                      <Text style={styles.text}>Snacks And frozen food</Text>
                      </View>
                    </View>
                    <View style={{marginStart:15}}>
                       <View style={{width:100}}>
                       <View style={styles.imgset}>
                       <View style={{ flex:1}}>
                       <Image source={{uri:'https://lh3.googleusercontent.com/proxy/u7bE3sKruqIRYqVreCXU1aRXQ3IhdLPdU8uUADkne9_vg-k2_5f2ymcAcnQwvVWvgeIWSdB08yzFmRZ5vA8qUVEcsQc44Mi9yqRHD-eEE5I5z1QaQCqgHrsEMl4'}}
                          style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:8 }}
                          /> 
                        </View>
                        </View>
                        <Text style={styles.text}>Baby care</Text>
                        </View>
                        </View>
                </View>
            </View>

            <View style={{ height: 150, marginTop: 40 }}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:100}}>
                      <View style={styles.imgset}>
                      <View style={{ flex:1}}>
                      <Image source={{uri:'https://photos1.blogger.com/blogger/1795/1117/1600/8016020Img_2_FullWidth_1.jpg'}}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:8 }}
                      /> 
                      </View>
                      </View>
                      <Text style={styles.text}>Personal care</Text>
                    </View>
                    <View style={{marginStart:15}}>
                      <View style={{width:100}}>
                      <View style={styles.imgset}>
                      <View style={{ flex:1}}>
                      <Image source={{uri:'https://www.snapgreen.in/assets/images/category/small/cat_7.jpg'}}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:8 }}
                        /> 
                      </View>
                      </View>
                      <Text style={styles.text}>Instant foods</Text>
                      </View>
                    </View>
                    <View style={{marginStart:15}}>
                       <View style={{width:100}}>
                       <View style={styles.imgset}>
                       <View style={{ flex:1}}>
                       <Image source={{uri:'https://bgstores.in/wp-content/uploads/2020/10/Untitled-3-300x300.png'}}
                          style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:8 }}
                          /> 
                        </View>
                        </View>
                        <Text style={styles.text}>Pooja products</Text>
                        </View>
                        </View>
                </View>
            </View>
            <View style={{ height: 50}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                     <Text style={styles.text1}>View all</Text>
                     <Icon1 name="right" size={18} style={{color:'grey' }} />
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>

               
        );
    }
}
export default Categories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    text:{
        
        fontSize:10,
        fontWeight: '500',
        marginStart: 30,
       
        
    },
    text1:{
        fontWeight:'500',
        fontSize:15,
        color:'grey',
        marginStart:130,
        
        
    },
    imgset:{
        height: 80,
        width: 80,
        borderRadius:10,
        marginLeft: 20,
        borderWidth: 0.2,
        backgroundColor:'white'
    },

});