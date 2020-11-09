import React, { Fragment } from "react";
import PropTypes from "prop-types";
import connect from "react-redux";

import { useHistory } from "react-router-dom";

import { Row, Col, Button } from "react-bootstrap";

const Hub = () => {
  const history = useHistory();

  return (
    <Fragment>
      <Row>
        <Col
          xs='12'
          style={{
            padding: "5px",
          }}
          className='text-center'
        >
          <Button
            variant='secondary'
            style={{
              width: "250px",
              height: "250px",
              textAlign: "center",
              margin: "auto",
              fontWeight: "bolder",
            }}
            onClick={() => history.push("/")}
          >
            About Me
          </Button>
        </Col>
        <Col
          xs='12'
          style={{
            padding: "5px",
          }}
          className='text-center'
        >
          <Button
            variant='secondary'
            style={{
              width: "250px",
              height: "250px",
              textAlign: "center",
              margin: "auto",
              fontWeight: "bolder",
            }}
            onClick={() => history.push("/")}
          >
            Orders
          </Button>
        </Col>
      </Row>
      <Row>
        <Col
          xs='12'
          style={{
            padding: "5px",
          }}
          className='text-center'
        >
          <Button
            variant='secondary'
            style={{
              width: "250px",
              height: "250px",
              textAlign: "center",
              margin: "auto",
              fontWeight: "bolder",
            }}
            onClick={() => history.push("/")}
          >
            Menu
          </Button>
        </Col>
        <Col
          xs='12'
          style={{
            padding: "5px",
          }}
          className='text-center'
        >
          <Button
            variant='secondary'
            style={{
              width: "250px",
              height: "250px",
              textAlign: "center",
              margin: "auto",
              fontWeight: "bolder",
            }}
            onClick={() => history.push("/")}
          >
            Users
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Hub;
