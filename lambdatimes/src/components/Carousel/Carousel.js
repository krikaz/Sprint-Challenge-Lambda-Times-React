import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carousel: carouselData,
			carouselImg: 0,
		};
	}
	componentDidMount() {
		this.setState({ carousel: carouselData });
		console.log(this.state.carousel);
	}

	leftClick = () => {
		this.setState({ carouselImg: this.carouselImg - 1 });
		console.log(this.state.carouselImg);
	};

	rightClick = () => {
		this.setState({ carouselImg: this.carouselImg + 1 });
		console.log(this.state.carouselImg);
	};

	selectedImage = () => {
		return (
			<img
				src={this.state.carousel[this.state.carouselImg]}
				style={{ display: 'block' }}
				alt="carou not working"
			/>
		);
	};

	render() {
		return (
			<div className="carousel">
				<div className="left-button" onClick={this.leftClick}>
					{'<'}
				</div>
				{this.selectedImage()}
				<div className="right-button" onClick={this.rightClick}>
					{'>'}
				</div>
			</div>
		);
	}
}
