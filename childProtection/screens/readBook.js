/**
 * Child Protection App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import PDFView from 'react-native-view-pdf';

type Props = {};

const res = [{
	link:require('../assets/content/1.png')
}, 
{
	link:require('../assets/content/2.png')
},
{
	link:require('../assets/content/3.png')
},
{
	link:require('../assets/content/4.png')
},
{
	link:require('../assets/content/5.png')
}]

export default class App extends Component<Props> {
	constructor(props){
		super(props)
		var {height, width} = Dimensions.get('window')

		//starting page
		const startPage =	 1;

		this.state = {'width':width, 'height':height, 'resource':res[startPage].link, 'currentPage':startPage};
	}

	componentDidMount(){
		this.state = {'imageSource':'Done'};
	}

	_nextPage(){
		//Take to the new page

		//does next page exist
		if(this.state.currentPage <= res.length){
			//we go next
			var nextPageNumber = this.state.currentPage+1
		}else{
			//let's go to the beginning
			var nextPageNumber = startPage
		}

		Alert("Hello there")

		//update resource


	}

	render() {

		return (
			<View style={{
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'flex-start',
			  }}>
				{/*<Text style={styles.heading}>Ibisomwa</Text>*/}
				<Grid>
					<Row style={styles.bookRow}>
						<Col>
							<View style={{width:this.state.width, height:this.state.height}}>
								<Image source={this.state.resource} style={styles.image, {
									// height:this.state.height,
									width: '100%',
									resizeMode:'center',
									alignSelf: 'flex-start'}} />
							</View>
						</Col>
					</Row>
					<Row style={styles.navigation}>
						<Col>
							<TouchableHighlight onPress={this.prevPage} underlayColor="white">
								<View>
									<Image source={require('../assets/lflash.png')} style={styles.image, {width:100, height:100}} />
								</View>
							</TouchableHighlight>
						</Col>
						<Col>
							<TouchableHighlight onPress={this._onBookOpen} underlayColor="white">
								<View>
									<Text style={{fontSize: 50, color:"#fff", marginTop:10, alignItems: 'center'}}>3</Text>
								</View>
							</TouchableHighlight>
						</Col>
						<Col>
							<TouchableHighlight onPress={this._nextPage} underlayColor="white">
								<View style={{alignItems: 'flex-end'}}>
									<Image source={require('../assets/rflash.png')} style={styles.image, {width:100, height:100}} />
								</View>
							</TouchableHighlight>
						</Col>
					</Row>
				</Grid>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	image: {
		flex: 1,
	},
	bookRow:{
		padding: 10
	},
	navigation:{
		backgroundColor:"rgba(0, 150, 235, 0.70)",
		position:'absolute',
		bottom: 0	
	},
	heading:{
		color:"#337ab7",
		marginTop:2,
		marginLeft:10
	}
});