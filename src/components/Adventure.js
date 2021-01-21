import React from 'react';
import $ from 'jquery';
import { PropTypes } from 'prop-types';
import '../styles/style.css';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(() => ({
  media: {
    height: '284px',
  },
  card: {
    padding: '20px 13px 32px',
    height: '372px',
  },
  reviews: {
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '0px',
    paddingTop: '0px',
    verticalAlign: 'top',
    textAlign: 'center',
  },
  content: {
    paddingLeft: '0px',
    paddingTop: '0px',
  },
  title: {
    marginBottom: '0px',
    marginLeft: '5px',
  },
  button: {
    marginLeft: 'auto',
    marginRight: '0',
    backgroundColor: 'black',
    color: 'white',
    textTransform: 'none',
    borderRadius: '25px',
    right: '-15%',
  },

  wrapper: {
    position: 'relative',
  },
  infoi: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    color: 'white',
    background: 'transparent',
    height: '24px',
    width: '24px',
  },
  info: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    color: '#FF6666',
    background: 'transparent',
    height: '24px',
    width: '24px',
  },
  popular: {
    background: '#E0E0E0',
    fontWeight: 'bold',
    radius: '50%',
  },
  bottom: {
    padding: '8px 12px 12px',
  },
}));

function Adventure({ adventure, updateLiked }) {
  const classes = useStyles();

  const { _id } = adventure;
  const { name } = adventure;
  const { image } = adventure;
  let { reviews } = adventure;
  const { rating } = adventure;
  const { timesBooked } = adventure;
  const { price } = adventure;

  const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (reviews >= 1000) {
    reviews = numberWithCommas(reviews);
  }
  const handleClick = () => {
    updateLiked(_id);
    if ($(`#${_id}`).hasClass(classes.infoi)) {
      $(`#${_id}`).removeClass(classes.infoi);
      $(`#${_id}`).addClass(classes.info);
    } else {
      $(`#${_id}`).removeClass(classes.info);
      $(`#${_id}`).addClass(classes.infoi);
    }
  };

  return (
    <div className={classes.card}>
      <Card key={_id}>
        <div className={classes.wrapper}>
          <img className="image mdc-fab__ripple" src={image} alt={name} />
          <Fab
            id={_id}
            className={`${classes.infoi} test562`}
            variant="extended"
            size="small"
            aria-label="like"
            onClick={handleClick}
          >
            <FavoriteIcon />
          </Fab>
        </div>
        <div className={classes.bottom}>
          <h3 className={classes.title}>{name}</h3>
          <CardContent className={classes.content}>
            <Rating
              name="customized-icons"
              value={rating}
              precision={0.5}
              size="small"
              icon={<FiberManualRecordIcon />}
              getLabelText={(value) => `${value} reviews \n`}
            />
            <Typography className={classes.reviews} variant="body2" color="textSecondary" component="span">
              {`${reviews} reviews`}
            </Typography>

          </CardContent>
          <CardActions>
            <span>
              <b>{price}</b>
              {' '}
              per adult
            </span>
            <Button size="small" className={classes.button} variant="contained">More info</Button>
          </CardActions>
          {
              timesBooked > 50000 ? <p className={classes.popular}>{`Popular: Booked by ${numberWithCommas(timesBooked)} travelers!`}</p> : <p><br /></p>
            }
        </div>
      </Card>
    </div>
  );
}

Adventure.propTypes = {
  updateLiked: PropTypes.shape({
    updateLiked: PropTypes.func,
  }).isRequired,
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
};
export default Adventure;
