/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import AdventuresList from './components/AdventuresList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adventures: [],
    };
    this.updateLiked = this.updateLiked.bind(this);
  }

  componentDidMount() {
    axios.get('/api/recommended')
      .then((results) => {
        const topFour = results.data.slice(0, 4);
        this.setState({
          adventures: topFour,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  updateLiked(elementId) {
    axios.put(`/api/recommended/${elementId}`)
      .then(() => {
        axios.get('/api/recommended')
          .then((data) => {
            const topFour = data.data.slice(0, 4);
            this.setState({
              adventures: topFour,
            });
          });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { adventures } = this.state;
    const style = {
      grids: {
        padding: '0px 0px',
        height: 'auto',
        position: 'relative',
        radius: '0px',
        border: '1px solid #e0e0e0',
        backgroundColor: 'white',
      },
      title: {
        fontWeight: '900',
        font: '14px "Trip Sans", Arial, sans-serif',

      },
      body: {
        fontWeight: '400',
        font: '12px ',
      },
      container: {
        margin: '10px 80px',
      },
      paper: {
        padding: '20px',
        border: '0px white solid',
        outline: '0px',
        backgroundColor: 'white',
      },
      heading: {
        margin: '0 95px 20px',
        font: '26px "Trip Sans", Arial, sans-serif',
      },
    };

    return (
      <div>
        {/* Heading */}
        <h2 style={style.heading}>Plan your visit</h2>

        {/* Recommended Tab */}
        <Grid style={style.container} container spacing={1}>
          <Grid item xs={2} style={style.grids}>
            <div style={style.paper}>
              <div style={style.title}><b>Recommended</b></div>
              <div style={style.body}>Our most popular tours and activities</div>
            </div>
          </Grid>
          <Grid item xs={2} style={style.grids}>
            <div style={style.paper}>
              <div style={style.title}><b>Admission Tickets</b></div>
              <div style={style.body}>Secure your entry and avoid ticket lines</div>
            </div>
          </Grid>
          <Grid item xs={2} style={style.grids}>
            <div style={style.paper}>
              <div style={style.title}><b>Tours & Sightseeing</b></div>
              <div style={style.body}>Browse our largest collection of experiences</div>
            </div>
          </Grid>
          <Grid item xs={2} style={style.grids}>
            <div style={style.paper}>
              <div style={style.title}><b>Private & Custom Tours</b></div>
              <div style={style.body}>Flexible itineraries and personal experiences</div>
            </div>
          </Grid>
          <Grid item xs={2} style={style.grids}>
            <div style={style.paper}>
              <div style={style.title}><b>Transfers & Ground Transport</b></div>
              <div style={style.body}>No stress transit for your arrival and departure</div>
            </div>
          </Grid>
        </Grid>

        {/* List of Adventures */}
        <div>
          <AdventuresList
            adventures={adventures}
            updateLiked={this.updateLiked}
          />
        </div>
      </div>
    );
  }
}

export default App;
