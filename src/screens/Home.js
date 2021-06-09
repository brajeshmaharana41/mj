import React, { Component } from "react";
import Homeheader from '../components/Header/Homeheader'
import { StatusBar } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
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
var {height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper'
import MenuCards from '../components/MenuCards'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
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
    const url = 'http://keita.co.in/mjmart/api/banner.php'
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
//    console.log(this.props.route.params.user.user)
    return (
    <>
      <View style={styles.container}>
        <Homeheader />
      <ScrollView>
        {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <SliderBox
              images={this.state.images}
              renderItem={this.renderItem}
              sliderBoxHeight={200}
              onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              dotStyle={{
                width: 5,
                height: 5,
                borderRadius: 15,
                marginHorizontal: 10,
                padding: 0,
                margin: 0
              }}
            /> */}
          <ScrollView>
            <View style= {{flex: 1, backgroundColor: "#f2f2f2"}}>
              <View style={{width: width, alignItems:'center'}}>
              <View style={{height:20}} />
                <Swiper style={{height:width/2}}  showsButtons={false} autoplay={true} autoplayTimeout={2}>
                    {
                      this.state.images.map((item)=>{
                        return(
                          <Image style={styles.imageBanner} resizeMode="contain" source= {{uri: `http://keita.co.in/mjmart/${item.bimg}` }}/>
                        )
                      })
                    }
                  </Swiper>
              </View>
            </View>
          </ScrollView>
      <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#fff',
              display: 'flex',
            }}>
          </View>
          <View style={{ padding: 10, flex: 1 }}>
            <TouchableOpacity >
              <Text style={{ fontSize: 20, fontWeight: "bold", color: 'black' }}>Easy Fast</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: 'black' }}>Home Services</Text>
            </TouchableOpacity>
          </View>
      <MenuCards />
      <View style={{ padding: 10, flex: 1 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: 'black' }}>Want to Shop For</Text>
            </TouchableOpacity>
          </View>
    </ScrollView>
    </View>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBanner: {
    height:width/2,
    width:width-40,
    borderRadius:10,
    marginHorizontal:20
  },
});

