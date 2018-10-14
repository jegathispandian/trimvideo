import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  TouchableOpacity
} from 'react-native';

export default class animatedscreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  componentWillMount() {
    this.animatedValueE = new Animated.ValueXY();
    this._valueE = {x: 0, y: 0}
    this.animatedValueE.addListener((value) => this._valueE = value);
    this.panResponderE = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValueE.setOffset({
          x: this._valueE.x,
          y: this._valueE.y,
        })
        this.animatedValueE.setValue({ x: 0, y: 0})
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.animatedValueE.x, dy: this.animatedValueE.y}
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValueE.flattenOffset();
        Animated.decay(this.animatedValueE, {
          deceleration: 0.2,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start();
      },
    })
    this.animatedValueD = new Animated.ValueXY();
    this._valueD = {x: 0, y: 0}
    this.animatedValueD.addListener((value) => this._valueD = value);
    this.panResponderD = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValueD.setOffset({
          x: this._valueD.x,
          y: this._valueD.y,
        })
        this.animatedValueD.setValue({ x: 0, y: 0})
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.animatedValueD.x, dy: this.animatedValueD.y}
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValueD.flattenOffset();
        Animated.decay(this.animatedValueD, {
          deceleration: 0.2,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start();
      },
    })
    this.animatedValueC = new Animated.ValueXY();
    this._valueC = {x: 0, y: 0}
    this.animatedValueC.addListener((value) => this._valueC = value);
    this.panResponderC = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValueC.setOffset({
          x: this._valueC.x,
          y: this._valueC.y,
        })
        this.animatedValueC.setValue({ x: 0, y: 0})
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.animatedValueC.x, dy: this.animatedValueC.y}
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValueC.flattenOffset();
        Animated.decay(this.animatedValueC, {
          deceleration: 0.2,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start();
      },
    })
    this.animatedValueB = new Animated.ValueXY();
        this._valueB = {x: 0, y: 0}
        this.animatedValueB.addListener((value) => this._valueB = value);
        this.panResponderB = PanResponder.create({
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onPanResponderGrant: (e, gestureState) => {
            this.animatedValueB.setOffset({
              x: this._valueB.x,
              y: this._valueB.y,
            })
            this.animatedValueB.setValue({ x: 0, y: 0})
          },
          onPanResponderMove: Animated.event([
            null, { dx: this.animatedValueB.x, dy: this.animatedValueB.y}
          ]),
          onPanResponderRelease: (e, gestureState) => {
            this.animatedValueB.flattenOffset();
            Animated.decay(this.animatedValueB, {
              deceleration: 0.2,
              velocity: { x: gestureState.vx, y: gestureState.vy }
            }).start();
          },
        })
    this.animatedValueA = new Animated.ValueXY();
    this._valueA = {x: 0, y: 0}
    this.animatedValueA.addListener((value) => this._valueA = value);
    this.panResponderA = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValueA.setOffset({
          x: this._valueA.x,
          y: this._valueA.y,
        })
        this.animatedValueA.setValue({ x: 0, y: 0})
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.animatedValueA.x, dy: this.animatedValueA.y}
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValueA.flattenOffset();
        Animated.decay(this.animatedValueA, {
          deceleration: 0.997,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start();
      },
    })
  }
  
  videoTrim = () => {
    this.props.navigation.navigate('videotrim');
  }
  renderLibrary = () => {
    this.props.navigation.navigate('Library');
  }
  render() {
    const animatedStyleA = {
      transform: this.animatedValueA.getTranslateTransform()
    }
    const animatedStyleB = {
        transform: this.animatedValueB.getTranslateTransform()
    }
    const animatedStyleC = {
        transform: this.animatedValueC.getTranslateTransform()
    }
    const animatedStyleD = {
        transform: this.animatedValueD.getTranslateTransform()
    }
    const animatedStyleE = {
        transform: this.animatedValueE.getTranslateTransform()
    }
    return (
      <View>
        <View style={{height:200,width:200,flexDirection: 'row'}}>
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyleA]} {...this.panResponderA.panHandlers}>
          <Text style={styles.text}>Box A</Text>
        </Animated.View>
      </View>
      <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyleB]} {...this.panResponderB.panHandlers}>
        <Text style={styles.text}>Box B</Text>
      </Animated.View>
    </View>
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyleC]} {...this.panResponderC.panHandlers}>
        <Text style={styles.text}>Box C</Text>
      </Animated.View>
    </View>
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyleD]} {...this.panResponderD.panHandlers}>
        <Text style={styles.text}>Box D</Text>
      </Animated.View>
    </View>
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyleE]} {...this.panResponderE.panHandlers}>
        <Text style={styles.text}>Box E</Text>
      </Animated.View>
    </View>
    </View>
      <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'space-around'}}>
       <TouchableOpacity style={styles.buttonContainer} onPress={() => this.videoTrim()} >
              <Text style={styles.buttonText}>
              Video Trim
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.renderLibrary()} >
              <Text style={styles.buttonText}>
              Library
            </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 80,
    borderColor: "#333",
    borderWidth: 2,

    //backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#333",
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: "#0156A0",
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 200,
    marginTop: 30,
    borderRadius:5,
    width:100
  },
  buttonText: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontWeight: "400",
  }
});

