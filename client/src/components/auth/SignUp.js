import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions
import { signup } from "../../actions/auth";

// Styling
import { Form, Col, InputGroup, Button } from "react-bootstrap";

const SignUp = ({ signup }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    password1: "",
    password2: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (formData.password1 !== formData.password2) {
      // Put Alarm here
      console.log("Passwords do not match.");
      return;
    }

    const userData = {
      user_name: formData.user_name,
      password: formData.password1,
    };

    console.log(userData);
    // signup(userData);
  };

  return (
    <Fragment>
      <Form
        onSubmit={(e) => onSubmit(e)}
        style={{
          padding: "5px",
        }}
      >
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              name='user_name'
              value={formData.user_name}
              onChange={(e) => onChange(e)}
              placeholder='Username'
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              name='password1'
              type={"password"}
              value={formData.password1}
              onChange={(e) => onChange(e)}
              placeholder='Password'
              minLength='6'
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              name='password2'
              type={"password"}
              value={formData.password2}
              onChange={(e) => onChange(e)}
              placeholder='Confirm Password'
              minLength='6'
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Button block type='submit'>
              SignUp
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </Fragment>
  );
};

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { signup })(SignUp);
