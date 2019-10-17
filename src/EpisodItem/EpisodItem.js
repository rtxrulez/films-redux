import React, { Component } from "react";
import propTypes from "prop-types";
import "./EpisodItem.scss";

class EpisodItem extends Component {
  render() {
    console.log("ppp", this.props);
    const { name, pathImg, desc, rating } = this.props.item;

    return (
      <div className="EpisodItem">
        <div className="EpisodItem__photo">
          <img src={pathImg} alt={name} />
        </div>
        <div className="EpisodItem__content">
          <h3 className="EpisodItem__name">{name}</h3>
          <div className="EpisodItem__desc">{desc}</div>
          <div className="EpisodItem__rating">{rating}</div>
        </div>
      </div>
    );
  }
}

EpisodItem.propTypes = {
  item: propTypes.object.isRequired
};

export default EpisodItem;
