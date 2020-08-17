import React, { Component } from 'react';
import SearchPeople from './components/searchpeople/SearchPeople';
import ShowPeople from './components/showpeople/ShowPeople';
import SearchPeopleEmail from './components/searchpeople/SearchPeopleEmail';
import css from './components/style.module.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allPeople: [],
      allFilterPeople: [],
      allFilterPeopleEmail: [],
      filter: '',
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(
        'https://randomuser.me/api/?seed=rush&nat=br&results=20'
      );
      const json = await data.json();

      const allPeople = json.results.map(
        ({ login, name, email, cell, picture }) => {
          return {
            id: login.uuid,
            name: name.first + ' ' + name.last,
            filterName:
              name.first.toLowerCase() + ' ' + name.last.toLowerCase(),
            email: email,
            cell: cell,
            picture: picture.large,
          };
        }
      );

      this.setState({
        allPeople,
        allFilterPeople: Object.assign([], allPeople),
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleChangeFilterName = (resultSearch) => {
    this.setState({
      filter: resultSearch,
    });

    const filterLowerCase = resultSearch.toLowerCase();
    const allFilterPeople = this.state.allPeople.filter((person) => {
      return person.filterName.includes(filterLowerCase);
    });
    // console.log(allFilterPeople);
    // console.log(typeof allFilterPeople);

    this.setState({
      allFilterPeople,
    });
  };

  handleChangeFilterEmail = (resultSearch) => {
    this.setState({
      filter: resultSearch,
    });

    const filterLowerCase = resultSearch.toLowerCase();
    const allFilterPeople = this.state.allPeople.filter((person) => {
      return person.email.includes(filterLowerCase);
    });

    this.setState({
      allFilterPeople,
    });
  };

  render() {
    const { filter, allFilterPeople } = this.state;

    return (
      <div className="container z-depth-3">
        <h1 className={`z-depth-5 center ${css.title}`}>
          Agenda React
          <span>
            <img src="" alt="" />
          </span>
        </h1>

        <div className={css.searchInputs}>
          <span>
            <i className="medium material-icons">person</i>
          </span>
          <SearchPeople
            filter={filter}
            onChangeFilterName={this.handleChangeFilterName}
          />
          <span>
            <i className="medium material-icons">email</i>
          </span>
          <SearchPeopleEmail
            filter={filter}
            onChangeFilterEmail={this.handleChangeFilterEmail}
          />
        </div>
        <div>
          <ShowPeople people={allFilterPeople} />
        </div>
      </div>
    );
  }
}
