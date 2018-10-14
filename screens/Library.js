import React, {Component} from 'react';
import {
  View, Text, StyleSheet, ScrollView, Alert,
  Image, TouchableOpacity, NativeModules, Dimensions,AsyncStorage,Platform, BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
 import Video from 'react-native-video';
 import Thumbnail from 'react-native-thumbnail-video';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
        trimvideopath:null,
        mime:null,
        }
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Library',
         headerStyle: {
          backgroundColor: '#0156A0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: { 
          textAlign:"center", 
          flex:1 
      },
      headerRight: (<View />),
    headerLeft: (<TouchableOpacity onPress={() => {
       Alert.alert('Do you want to exit the application?','',[
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => navigation.push('homepage')},
    ],
    { cancelable: false })}}><Icon name={'ios-arrow-back'} style={{ color: '#6d7a9e', fontSize: 29, marginBottom: 5,marginLeft:30 }}></Icon></TouchableOpacity>),
      });
async componentWillMount() {
    this.setState({
        trimvideopath: await AsyncStorage.getItem('trimvideopath'),
        mime: await AsyncStorage.getItem('videomime'),
    })
}
  rendervideosfromgalary() {
      if(this.state.trimvideopath!=null && this.state.trimvideopath!='undefined') {
      return(
       <Video source={{uri: this.state.trimvideopath, type: this.state.mime}}
         style={{position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
         rate={1}
         paused={false}
         volume={1}
         muted={false}
         resizeMode={'cover'}
         onError={e => console.log("error",e)}
         onLoad={load => this.setState({
          duration: load.duration
         })}
      repeat={true} />    );   
    }
    else {
        return(
        <Text>Text</Text>
        );
    }
  }
  handleBackPress = () => {
    Alert.alert('Do you want to exit the application?','',[
  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  {text: 'OK', onPress: () => this.props.navigation.navigate('homepage')},
],
{ cancelable: false })
      
return true;
}
  render() {
          
    return (
    <View style={styles.container}>
    {this.rendervideosfromgalary()}
    </View>
    );
  }
}
