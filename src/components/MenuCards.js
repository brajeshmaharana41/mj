// import { View, Text, TouchableOpacity, Linking, Image,  } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Avatar, Divider } from 'react-native-elements';
// import { material } from 'react-native-typography';

// const MenuCards = ({ navigation }) => {
//   // const [Data, setData] = useState([]);
//   // const [isLoading, setIsLoading] = useState(true);
//   // useEffect(() => {
//   //   getData();
//   // }, []);

//   // const getData = async () => {
//   //   let res = await fetch('https://covid19.mathdro.id/api');
//   //   let data = await res.json();
//   //   setData(data);
//   //   setIsLoading(false);
//   // };

//   // // const cured = Data.recovered.value;
//   // // const deaths = Data.deaths.value;
//   // const getWidth = (x) => {
//   //   if (isLoading) {
//   //     return 0;
//   //   } else {
//   //     if (x == 'deaths') {
//   //       const num = Math.floor(
//   //         (Data.deaths.value / Data.confirmed.value) * 100,
//   //       );
//   //       const percent = num + '%';
//   //       return percent;
//   //     } else if (x == 'recovered') {
//   //       const num = Math.floor(
//   //         (Data.recovered.value / Data.confirmed.value) * 100,
//   //       );
//   //       const percent = num + '%';
//   //       return percent;
//   //     }
//   //   }
//   // };

//   return (
//     <>
//       <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
//       <TouchableOpacity //DATA SEARCH
//           onPress={() => navigation.push('Search')}
//           style={{
//             marginHorizontal: 12,
//             flex: 1,
//           }}>
//             <Image source={require('../assets/thump_1619712827.jpg')} style={{
//             width: 156,
//             shadowOpacity: 0.27,
//             shadowRadius: 4.65,
//             elevation: 6,
//             borderWidth: 0,
//             borderRadius: 7,
//             shadowColor: '#000',
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             flex: 1
//           }}/>
//         </TouchableOpacity>
//         <TouchableOpacity //DATA SEARCH
//           onPress={() => navigation.push('Search')}
//           style={{
//             marginHorizontal: 12,
//             flex: 1,
//           }}>
//             <Image source={require('../assets/5f1944474ffd9unnamed.jpg')} style={{
//             width: 156,
//             shadowOpacity: 0.27,
//             shadowRadius: 4.65,
//             elevation: 6,
//             borderWidth: 0,
//             borderRadius: 7,
//             shadowColor: '#000',
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             flex: 1
//           }}/>
//         </TouchableOpacity>
//       </View>

//       <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
//       <TouchableOpacity //DATA SEARCH
//           onPress={() => navigation.push('Search')}
//           style={{
//             marginHorizontal: 12,
//             flex: 1,
//           }}>
//             <Image source={require('../assets/thump_1619707888.jpg')} style={{
//             width: 156,
//             shadowOpacity: 0.27,
//             shadowRadius: 4.65,
//             elevation: 6,
//             borderWidth: 0,
//             borderRadius: 7,
//             shadowColor: '#000',
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             flex: 1
//           }}/>
//         </TouchableOpacity>
//         <TouchableOpacity //DATA SEARCH
//           onPress={() => navigation.push('Search')}
//           style={{
//             marginHorizontal: 12,
//             flex: 1,
//           }}>
//             <Image source={require('../assets/thump_1619707857.jpg')} style={{
//             width: 156,
//             shadowOpacity: 0.27,
//             shadowRadius: 4.65,
//             elevation: 6,
//             borderWidth: 0,
//             borderRadius: 7,
//             shadowColor: '#000',
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             flex: 1
//           }}/>
//         </TouchableOpacity>
//       </View>
//       <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
//       <TouchableOpacity //DATA SEARCH
//           onPress={() => navigation.push('Search')}
//           style={{
//             marginHorizontal: 12,
//             flex: 1,
//           }}>
//             <Image source={require('../assets/thump_1619713037.jpg')} style={{
//             width: 156,
//             shadowOpacity: 0.27,
//             shadowRadius: 4.65,
//             elevation: 6,
//             borderWidth: 0,
//             borderRadius: 7,
//             shadowColor: '#000',
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             flex: 1
//           }}/>
//         </TouchableOpacity>
//         <TouchableOpacity //DATA SEARCH
//           onPress={() => navigation.push('Search')}
//           style={{
//             marginHorizontal: 12,
//             flex: 1,
//           }}>
//             <Image source={require('../assets/thump_1589957196.jpg')} style={{
//             width: 156,
//             shadowOpacity: 0.27,
//             shadowRadius: 4.65,
//             elevation: 6,
//             borderWidth: 0,
//             borderRadius: 7,
//             shadowColor: '#000',
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             flex: 1
//           }}/>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };
// export default MenuCards;
import React, { Component } from "react";
import { Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { white } from "react-native-paper/lib/typescript/styles/colors";
var {height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper'


export default class MenuCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectCatg:0
    }
  }

  // renderItem = (item) => {
  //   return(
  //     <View>
  //         <Image style={{width:'100%',height:200}} source= {{uri: `http://keita.co.in/mjmart/${item.item.bimg}` }}/>
  //     </View>
  //   )  
  // }

  componentDidMount() {
    const url = 'http://keita.co.in/mjmart/api/cat.php'
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
          this.setState({ isLoading: false,
                          images: responseJson.data
                        });
    })
    .catch((error) => {console.error(error)});
  }
  render() { 
    return (
    <>  
        <ScrollView>
          <View style= {{flex: 1, backgroundColor: "#f2f2f2"}}>
            {/* <View style={{width: width, alignItems:'center'}}>
              <Swiper style={{height:width/2}}  showsButtons={false} autoplay={true} autoplayTimeout={2}>
                  {
                    this.state.images.map((item)=>{
                      return(
                        <Image style={styles.imageBanner} resizeMode="contain" source= {{uri: `http://keita.co.in/mjmart/${item.catimg}` }}/>
                      )
                    })
                  }
                </Swiper>
                <View style={{height:20}} />
            </View> */}
            <View style={{width: width, backgroundColor: 20, paddingVertical: 0, backgroundColor: '#f2f2f2' }}>
              <FlatList
                //horizontal={true}
                data={this.state.images}
                numColumns={2}
                renderItem={({ item }) => this._renderItem(item)}
                keyExtractor = { (item,index) => index.toString() }
              />
            <View style={{height:20}} />
            </View>
          </View>
        </ScrollView>
    </>  
    );
  }
  _renderItem(item){
    return(
      <TouchableOpacity style={styles.divFood}>
        <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{uri :`http://keita.co.in/mjmart/${item.catimg}`}} 
          />
          <View style={{height:((width/2)-20)-75, backgroundColor:'transparent', width:((width/2)-20)-10}} />
          <Text style={{fontWeight:'bold',fontSize:16,textAlign:'center'}}>{item.catname}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  imageBanner: {
    height:width/2,
    width:width-40,
    borderRadius:10,
    marginHorizontal:20
  },
  imageFood:{
    width:((width/2)-20)-10,
    height:((width/2)-20)-30,
    backgroundColor:'transparent',
    borderRadius:30,
    position:'absolute',
    top:-35
  },
  divFood:{
    width:(width/2)-20,
    padding:10,
    borderRadius:10,
    marginTop:55,
    marginBottom:5,
    marginLeft:10,
    alignItems:'center',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:50,
    backgroundColor:'white',
  } 
});

