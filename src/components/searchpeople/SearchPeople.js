import React, { Component } from 'react';

export default class SearchPeople extends Component {
  handleChangeInputName = (event) => {
    const { onChangeFilterName } = this.props;
    const newValue = event.target.value;
    onChangeFilterName(newValue);
  };

  render() {
    return (
      <div>
        <input
          autoFocus
          placeholder="Name"
          type="text"
          onChange={this.handleChangeInputName}
        />
      </div>
    );
  }
}
