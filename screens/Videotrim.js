import React, {Component} from 'react';
import {
  View, Text, StyleSheet, ScrollView, Alert,
  Image, TouchableOpacity, NativeModules, Dimensions,AsyncStorage,Platform, BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import { ProcessingManager,VideoPlayer } from 'react-native-video-processing';



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

export default class Videotrim extends Component {

  constructor() {
    super();
    this.state = {
      videopath:null,
      videomeme:null,
      trimvieopath: null

    };
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Trim Video',
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

  renderVideo(videopath,videomeme) {
    return (
      <Video source={{uri: videopath, type: videomeme}}
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
         repeat={true} />
    );
  }
  handleBackPress = () => {
        Alert.alert('Do you want to exit the application?','',[
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => this.props.navigation.navigate('homepage')},
    ],
    { cancelable: false })
          
    return true;
}
renderVideofrommobile() {
  ImagePicker.openPicker({
    mediaType: "video",
  }).then((video) => {
      console.log(video);
      this.setState({
          videopath:video.path,
          videomeme:video.mime,
      });
  });
}
async trimVideo(source) {
    const videoroute = null;
    const options = {
        startTime: 0,
        endTime: 15,
        // quality: VideoPlayer.Constants.quality.QUALITY_1280x720, // iOS only
        // saveToCameraRoll: true, // default is false // iOS only
        // saveWithCurrentDate: true, // default is false // iOS only
    };
ProcessingManager.trim(source, options) // like VideoPlayer trim options
          .then((data) => {
             AsyncStorage.setItem('trimvideopath', data);  
          }
        );
        this.setState({
            trimvieopath:AsyncStorage.getItem('trimvideopath')
        });
        // AsyncStorage.setItem('trimvideopath', this.state.trimvieopath);  
        // AsyncStorage.setItem('videomime',this.state.videomeme); 
        await AsyncStorage.setItem('videomime',this.state.videomeme); 
        console.log("videopath",this.state.trimvieopath._55);
        this.setState({
            trimvieopath: this.state.trimvieopath._55
        });
        console.log("Mime",this.state.videomeme); 
        console.log("path",this.state.trimvieopath);
        AsyncStorage.setItem('trimvideopath', this.state.trimvieopath);
        this.props.navigation.navigate('homepage');  
}
  render() {
    return (<View style={styles.container}>
      {this.state.videopath != null ? this.renderVideo(this.state.videopath,this.state.videomeme) :
       <TouchableOpacity onPress={() => {this.renderVideofrommobile()}} style={styles.button}>
        <Text style={styles.text}>Select A Video from galary</Text>
      </TouchableOpacity>}
      <TouchableOpacity onPress={() => this.trimVideo(this.state.videopath)} style={styles.button}>
       <Text style={styles.text}>Trim this video</Text>
       </TouchableOpacity>
    </View>);
  }
}
