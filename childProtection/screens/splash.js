/*Splash screen to be loaded before other screens*/

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

export default class Splash extends Component{
	constructor(props){
		super(props)
		var {height, width} = Dimensions.get('window')

		this.state = {'width':width, 'height':height};
	}
	render(){
		return (
			<View>
				<Image source={require('../assets/splash.png')} style={styles.image, styles.splashImage, {width:this.state.width, height:this.state.height}} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
  image: {
  	flex: 1,
  },
  splashImage: {
  }
});
