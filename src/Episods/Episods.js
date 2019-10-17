import React, { Component } from "react";
import { connect } from "react-redux";
import "./Episods.scss";
import EpisodItem from "../EpisodItem/EpisodItem";

class Episods extends Component {
  render() {
    const { episods } = this.props;

    const EpisodsList = episods.map((v, k) => {
      return <EpisodItem item={v} key={k} />;
    });

    return <div className="episods">{EpisodsList}</div>;
  }
}

const mapStateToProps = store => {
  return {
    episods: store.episods
  };
};

export default connect(mapStateToProps)(Episods);
