// import React, { Component } from 'react';
import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const Cards = props => {
	return (
		<div className="cards-container">
			{/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
			{props.cards.map(card => (
				<Card key={uuid()} card={card} />
			))}
		</div>
	);
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
	card: PropTypes.object,
};

export default Cards;
