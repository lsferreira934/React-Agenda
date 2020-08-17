import React, { Component } from 'react';

export default class SearchPeopleEmail extends Component {
  handleChangeInputEmail = (event) => {
    const { onChangeFilterEmail } = this.props;
    const newEmail = event.target.value;
    onChangeFilterEmail(newEmail);
  };

  render() {
    //const { filter, onChangeFilterName } = this.props;
    return (
      <div>
        <input
          placeholder="Email"
          type="text"
          onChange={this.handleChangeInputEmail}
        />
      </div>
    );
  }
}
