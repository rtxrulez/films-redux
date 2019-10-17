import React, { Component } from "react";
import { connect } from "react-redux";
import "./Episods.scss";
import EpisodItem from "../EpisodItem/EpisodItem";
import { filmsRequest } from "../store/actions/fetchFilms/fetchFilmsActions";

class Episods extends Component {
  componentDidMount() {
    this.props.filmsRequest();
  }
  render() {
    const { episodList, isFetching } = this.props.episods;

    const EpisodsDom = episodList.map((v, k) => {
      return <EpisodItem item={v} key={k} />;
    });

    return (
      <div className="episods">
        {isFetching ? <div>Загрузка...</div> : null}
        {EpisodsDom}
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
  filmsRequest: filmsRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episods);
