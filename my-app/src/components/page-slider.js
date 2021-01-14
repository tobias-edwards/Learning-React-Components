import React from "react";
import PropTypes from "prop-types";

const PageSlider = ({ onClick, children }) => (
  <button className="btn btn-secondary" type="button" onClick={onClick}>
    {children}
  </button>
);

PageSlider.propTypes = {
  onClick: PropTypes.func,
};

export default PageSlider;
