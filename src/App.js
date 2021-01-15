/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';
import AdventuresList from './components/AdventuresList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adventures: [],
    };
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
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  render() {
    const { adventures } = this.state;

    return (
      <div>
        <span>Plan your visit</span>
        <AdventuresList />
        <ul>
          {
            adventures.map((adv) => <li>{ adv.name }</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
