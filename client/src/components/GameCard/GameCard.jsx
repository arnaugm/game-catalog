import React from 'react';
import PropTypes from 'prop-types';

import STYLES from './GameCard.module.scss';

const GameCard = () => (
    <div className={STYLES.GameCard}>
        I'm a game!
    </div>
);

GameCard.propTypes = {};

GameCard.defaultProps = {};

export default GameCard;
