import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

export default class MyComponent extends React.Component {
  render() {
      return (
          <Moment format="DD/MM/YYYY">
              1976-04-19
          </Moment>
      );
  }
}