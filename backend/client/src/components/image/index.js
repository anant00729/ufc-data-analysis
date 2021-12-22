import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// export const PlayerProfileImage = styled.img`
//   width: 90px;
//   height: 90px;
//   background-color: #d20909;
//   object-fit: contain;
//   border-radius: 50%;
//   border: 4px solid white;
//   box-shadow: 0 3px 10px rgb(0 0 0 / 0.09);
// `;

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
      errored: false,
    };
  }

  onError = () => {
    if (!this.state.errored) {
      this.setState({
        src: this.props.fallbackSrc,
        errored: true,
      });
    }
  };

  render() {
    const { src } = this.state;
    const { src: _1, fallbackSrc: _2, ...props } = this.props;

    return <img src={src} onError={this.onError} {...props} />;
  }
}

Image.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string,
};

export default Image;
