import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default class Icon extends React.Component {
  render() {
    return (
      <Ionicons name={this.props.name} style={this.props.style} />
    );
  }
}