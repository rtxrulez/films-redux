import React, { Component } from "react";
import { connect } from "react-redux";
import "./Episods.scss";
import EpisodItem from "../EpisodItem/EpisodItem";
import {
  filmsRequest,
  nameSort
} from "../store/actions/fetchFilms/fetchFilmsActions";

class Episods extends Component {
  componentDidMount() {
    this.props.filmsRequest();
  }

  handleNameSort = e => {
    const { nameSort } = this.props;
    nameSort();
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
            <a href="#">
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
  nameSort: nameSort
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episods);
