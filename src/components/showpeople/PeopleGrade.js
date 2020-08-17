import React, { Component } from 'react';
import css from '../style.module.css';
export default class PeopleGrade extends Component {
  render() {
    const { person } = this.props;
    const { picture, name, email, cell } = person;
    return (
      <>
        <td>
          <img className="responsive-img circle" src={picture} alt={name} />
        </td>
        <td className={css.td}>{name}</td>
        <td className={css.td}>{email}</td>
        <td className={css.td}>{cell}</td>
      </>
    );
  }
}
