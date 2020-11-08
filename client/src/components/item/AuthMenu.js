import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { getItems } from "../../actions/item";
import { connect } from "react-redux";

import AddItem from "./AddItem";

const AuthMenu = ({ getItems }) => {
  return (
    <Fragment>
      <AddItem />
    </Fragment>
  );
};

AuthMenu.propTypes = {
  getItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getItems })(AuthMenu);
