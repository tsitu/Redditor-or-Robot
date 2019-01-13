/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

const AnimationContainer = (props) => {
  let incDecAnimation = <span style={{ visibility: 'hidden' }} role="img" aria-label="Placeholder">️✔️</span>;
  if (!props.isLoading) {
    incDecAnimation = props.scoreAnimation ?
      <span className="navTable__animation--score" role="img" aria-label="+1">✔️</span> :
      incDecAnimation;
    incDecAnimation = props.lifeAnimation ?
      <span className="navTable__animation--life" role="img" aria-label="-1">❌</span> :
      incDecAnimation;
  }

  return (
    <div className="navTable__animation" key={new Date().getTime()}>
      {incDecAnimation}
    </div>
  );
};

AnimationContainer.propTypes = {
  scoreAnimation: PropTypes.bool.isRequired,
  lifeAnimation: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

module.exports = AnimationContainer;
