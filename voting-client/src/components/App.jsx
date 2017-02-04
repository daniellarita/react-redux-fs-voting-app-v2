import React from 'react';
import {VotingContainer} from './Voting';
import {ResultsContainer} from './Results';

export default React.createClass({
  render: function() {
    return (
      <div>
        <h2>Cast Your Vote:</h2>
        <VotingContainer />
        <h2>Results:</h2>
        <ResultsContainer />
      </div>
    );
  }
});
