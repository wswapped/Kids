/**
 * Child Protection App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

//Screens
import Splash from './screens/splash';
import ListBooks from './screens/listBooks';
import ReadBook from './screens/readBook';

type Props = {};
export default class App extends Component<Props> {
	constructor(props){
		super(props)
		this.state = {'loaded':false};

		setTimeout(() => (
		  this.setState(previousState => (
			{ loaded: "Done" }
		  ))
		), 1000);
	}

	componentDidMount(){
		this.state = {'loaded':'Done'};
	}
	ok(){
		//teest events
	}
	render() {
		if(!this.state.loaded){
			return (
				<View style={styles.container}>
					<Splash />
				</View>
			);
		}else{
			return (
				<View style={{
					flex: 3,
					flexDirection: 'row',
					justifyContent: 'flex-start',
				  }}>
				  	<ReadBook></ReadBook>
				</View>
			);
		}
		
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});
