import React, { Fragment } from "react";
import PropTypes from "prop-types";
import connect from "react-redux";

import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";

const Hub = () => {
  return (
    <Fragment>
      <Row>
        <Col
          xs='12'
          style={{
            alignContent: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "200px",
              textAlign: "center",
              margin: "auto",
              alignContent: "center",
            }}
          >
            About Me
          </div>
        </Col>
        <Col xs='12'>
          <div
            style={{
              width: "200px",
              height: "200px",
              textAlign: "center",
              margin: "auto",
              alignContent: "center",
            }}
          >
            Orders
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs='12'>
          <div
            style={{
              width: "200px",
              height: "200px",
              textAlign: "center",
              margin: "auto",
              alignContent: "center",
            }}
          >
            Menu
          </div>
        </Col>
        <Col xs='12'>
          <div
            style={{
              width: "200px",
              height: "200px",
              textAlign: "center",
              margin: "auto",
              alignContent: "center",
            }}
          >
            Users
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Hub;
