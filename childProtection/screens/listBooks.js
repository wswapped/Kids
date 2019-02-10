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

import ReadBook from './readBook'

type Props = {};

const resources = {
  file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: 'https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf',
  base64: 'JVBERi0xLjMKJcfs...',
};

export default class App extends Component<Props> {
	constructor(props){
		super(props)
		var {height, width} = Dimensions.get('window')
		this.state = {'width':width, 'height':height, 'openBook':false};

	}

	componentDidMount(){
		this.state = {'loaded':'Done'};
	}

	_onBookOpen() {
		Alert.alert('You long-pressed the button!')
		this.state = {'openBook':true}
	}

	render() {

		if(!this.state.openBook){
			return (
				<View style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'flex-start',
				  }}>
					<Text style={styles.heading}>Ibisomwa</Text>
					<Grid>
						<Row style={styles.bookRow}>
							<Col>
								<View>
									<Image source={require('../assets/cover_1.jpg')} style={styles.image, {width:this.state.width/4, height:this.state.height/4}} />
									<Text>The world of abstract art</Text>
								</View>
							</Col>
							<Col>
								<View>
									<Image source={require('../assets/cover_2.jpg')} style={styles.image, {width:this.state.width/4, height:this.state.height/4}} />
									<Text>The purpule book</Text>
								</View>
							</Col>
							<Col>
								<View>
									<Image source={require('../assets/cover_3.jpg')} style={styles.image, {width:this.state.width/4, height:this.state.height/4}} />
									<Text>The Littlest Bird</Text>
								</View>
							</Col>
						</Row>
						<Row style={styles.bookRow}>
							<Col>
								<TouchableHighlight onPress={this._onBookOpen} underlayColor="white">
									<View>
										<Image source={require('../assets/coverl_1.jpg')} style={styles.image, {width:this.state.width/4, height:this.state.height/4}} />
										<Text>Children's rights</Text>
									</View>
								</TouchableHighlight>
								
							</Col>
							<Col>
								<View>
									<Image source={require('../assets/coverl_2.jpg')} style={styles.image, {width:this.state.width/4, height:this.state.height/4}} />
									<Text>Avoiding abuse</Text>
								</View>
							</Col>
							<Col>
								<View>
									<Image source={require('../assets/coverl_3.jpg')} style={styles.image, {width:this.state.width/4, height:this.state.height/4}} />
									<Text>Seeking help</Text>
								</View>
							</Col>
						</Row>
						<Row style={styles.bookRow}>
							<Col>
								<View>
									<Image source={require('../assets/cover_4.jpg')} style={styles.image, {width:this.state.width/4, height:this.state.height/4}} />
									<Text>Giant fingerpaint book</Text>
								</View>
							</Col>
							<Col>
								<View>
									<Image source={require('../assets/cover_5.jpg')} style={styles.image, {width:this.state.width/4, height:this.state.height/4}} />
									<Text>Hugging the chimps</Text>
								</View>
							</Col>
							<Col>
								<View>
									<Image source={require('../assets/cover_6.jpg')} style={styles.image, {width:this.state.width/4, height:this.state.height/4}} />
									<Text>Baho !</Text>
								</View>
							</Col>
						</Row>
					</Grid>
				</View>
			);
		}else{
			return <ReadBook></ReadBook>
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
	image: {
		flex: 1,
	},
	bookRow:{
		padding: 10
	},
	heading:{
		color:"#337ab7",
		marginTop:2,
		marginLeft:10
	}
});