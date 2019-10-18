import React, { Component } from "react";
import { connect } from "react-redux";
import "./Episods.scss";
import EpisodItem from "../EpisodItem/EpisodItem";
import {
  filmsRequest,
  nameSort,
  dateSort
} from "../store/actions/fetchFilms/fetchFilmsActions";

class Episods extends Component {
  componentDidMount() {
    this.props.filmsRequest();
  }

  handleNameSort = () => {
    const { nameSort } = this.props;
    nameSort();
  };

  handleDateSort = () => {
    const { dateSort } = this.props;
    dateSort();
  };

  render() {
    const {
      episodList,
      isFetching,
      isFetched,
      error,
      nameSort,
      dateSort
    } = this.props.episods;

    const EpisodsDom = episodList.map((v, k) => {
      return <EpisodItem item={v} key={k} />;
    });

    return (
      <div className="episods">
        <div className="episods__header">
          <div className="episods__filter">
            <a onClick={this.handleNameSort} href="#">
              Название
              {nameSort && !dateSort ? (nameSort == "up" ? "⇑" : "⇓") : ""}
            </a>
            <a onClick={this.handleDateSort} href="#">
              Дата {dateSort && !nameSort ? (dateSort == "up" ? "⇑" : "⇓") : ""}
            </a>
          </div>
          {isFetching ? <div>Загрузка...</div> : null}
          {isFetched ? <div>Загрузка завершена!</div> : null}
          {error ? <div>Ошибка загрузки {error.toString()}</div> : null}
        </div>
        <div className="episods__list">{EpisodsDom}</div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    episods: store.episods
  };
};

const mapDispatchToProps = {
  filmsRequest: filmsRequest,
  nameSort: nameSort,
  dateSort: dateSort
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episods);
