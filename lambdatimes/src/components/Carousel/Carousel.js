import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carousel: carouselData,
      count: 0,
		};
	}
	componentDidMount() {
		this.setState({ carousel: carouselData });
		// console.log(this.state.carousel);
	}

	leftClick = () => {
    this.state.count === 0 ?
      this.setState({ count: 3 }) :
      this.setState({ count: this.state.count - 1 })
	};

	rightClick = () => {
    this.state.count === 3 ?
      this.setState({ count: 0 }) :
      this.setState({ count: this.state.count + 1 })
	};

	selectedImage = (number) => {
		return (
			<img
				src={this.state.carousel[number]}
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
				{this.selectedImage(this.state.count)}
				<div className="right-button" onClick={this.rightClick}>
					{'>'}
				</div>
			</div>
		);
	}
}
