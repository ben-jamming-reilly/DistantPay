import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";

// Login & SignUp
import Login from "./Login";
import SignUp from "./SignUp";

// Bootstrap and styling
import { ButtonGroup, Button, Row, Col } from "react-bootstrap";

const Auth = ({ isAuthenticated }) => {
  const [isLogin, setAuthType] = useState(true);

  if (isAuthenticated) {
    return <Redirect to='/hub' />;
  }

  return (
    <Fragment>
      <Col xs='1' />
      <Col>
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <ButtonGroup toggle>
            <Button onClick={() => setAuthType(true)}>Login</Button>
            <Button onClick={() => setAuthType(false)}>Signup</Button>
          </ButtonGroup>
        </Row>
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          {isLogin ? <Login /> : <SignUp />}
        </Row>
      </Col>
      <Col xs='1' />
    </Fragment>
  );
};

Auth.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Auth);
