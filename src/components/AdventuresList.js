import React from 'react';
import { PropTypes } from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Adventure from './Adventure';
import AdventureClass from './classAdventure';

import '../styles/style.css';

function AdventuresList({ adventures, updateLiked, liked }) {
  return (
    <Grid container spacing={3}>
      <div className="list">
        {
          adventures.map((adv) => (
            <Grid item xs={3} key={adv._id}>
              {' '}
              <Adventure adventure={adv} updateLiked={updateLiked} liked={liked} />
              {' '}
              {/* <AdventureClass adventure={adv} updateLiked={updateLiked} liked={liked} /> */}
            </Grid>
          ))
        }
      </div>
    </Grid>
  );
}

AdventuresList.propTypes = {
  updateLiked: PropTypes.shape({
    updateLiked: PropTypes.func,
  }).isRequired,
  adventures: PropTypes.shape({
    map: PropTypes.func,
    updateLiked: PropTypes.func,
    adventure: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      reviews: PropTypes.number,
      rating: PropTypes.number,
      price: PropTypes.string,
      liked: PropTypes.bool,
      timesBooked: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default AdventuresList;
