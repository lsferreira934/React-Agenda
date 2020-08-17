import React, { Component } from 'react';
import PeopleGrade from './PeopleGrade';
import css from '../style.module.css';

export default class ShowPeople extends Component {
  render() {
    const { people } = this.props;

    console.log(people);
    if (people.length !== 0) {
      return (
        <>
          <table className="centered highlight responsive-table">
            <thead className={css.title}>
              <tr>
                <th className={css.th}>Photo</th>
                <th className={css.th}>Name</th>
                <th className={css.th}>Email</th>
                <th className={css.th}>Cell</th>
              </tr>
            </thead>

            <tbody>
              {people.map((person) => {
                return (
                  <tr key={person.id}>
                    <PeopleGrade person={person} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      );
    }
    return (
      <div className={css.full}>
        <div className={`center ${css.medium}`}>
          <h2 className={css.h2}>
            {`
            Não temos esse usuário em nossa base de dados...`}
          </h2>
          <div className="preloader-wrapper big active">
            <div className="center spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
