import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Foundation'
import Icon3 from 'react-native-vector-icons/Entypo'

import Bestseller from "./scrns/sellerscrn";
import Categories from "./scrns/categoriesscrn";
import Offers from "./scrns/offers";
import Comboproducts from "./scrns/combo";

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.header}>
            <View style={styles.headertext}>
            <Icon1 name="arrowleft" size={16} style={{ marginStart: 10,marginTop:20,color:'grey' }} />
            <Text style={{ fontSize: 24, fontWeight: '500',marginStart:10,marginTop:10 }}>Shop name</Text>
            <Icon1 name="checkcircle" size={18} style={{ marginStart: 15,marginTop:15,color:'orange' }} />
            <Icon2 name="info" size={30} style={{color:'yellowgreen',marginStart:90,marginTop:10 }} />
            <Icon3 name="share" size={20} style={{color:'grey',marginStart:15,marginTop:10}} />
            </View>
            <View style={styles.time}>
            <Icon1 name="clockcircleo" size={11} style={{ marginStart: 45,paddingBottom:15,color:'grey' }} />
            <Text style={{fontSize:12,color:'grey',marginStart:5}}>25-35 mins</Text>
            <Text style={{fontSize:8,color:'grey',marginStart:8,backgroundColor:'yellow',borderRadius:13,height:15}}>  Free Delivery  </Text>
            <Text style={{fontSize:8,color:'grey',marginStart:10,backgroundColor:'orange',borderRadius:13,height:15}}>  Enter Details  </Text>
            </View>
            <View style={styles.search}>
            <Icon name="ios-search" size={16} style={{ marginRight: 13,marginTop:10,color:'grey' }} />
            <TextInput
            underlineColorAndroid="transparent"
            placeholder="Search for item"
            placeholderTextColor="grey"
            style={{ flex: 1, fontWeight: 'normal', backgroundColor: 'white' }}/>
            </View>
            </View>
              
              
               <ScrollView>
               <Bestseller/>
               <Categories/>
               <Offers/>
               <Comboproducts/>
               </ScrollView>
              
             


           </View>
           
        );
    }
}
export default App;

const styles = StyleSheet.create({
container: {
     height: '100%',
     width: '100%',
     borderWidth: 0.5,
     borderColor: '#dddddd',
     borderRadius:10 
    },
header:{ 
    height: 200,
    width:'100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
    },
headertext:{
    flexDirection:'row',
    marginStart: 5,
    marginTop:20
},
search:{
    flexDirection: 'row',
    marginTop:15,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius:35,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    elevation: 2,
    height:55
   
},
time:{
    flexDirection: 'row',
  
},
seller:{
    height:'70%'
}
        
});