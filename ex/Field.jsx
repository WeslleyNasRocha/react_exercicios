import React, { Component } from 'react';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <label>{this.state.value}</label>
        <br />
        <input onChange={this._handleChange} value={this.state.value} />
      </div>
    );
  }
}

export default Field;
