import React from 'react';
import {VotingContainer} from './Voting';
import {ResultsContainer} from './Results';

export default React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <h4>Cast Your Vote:</h4>
          <VotingContainer />
        </div>
        <div>
          <h4>Results:</h4>
          <ResultsContainer />
        </div>
      </div>
    );
  }
});
