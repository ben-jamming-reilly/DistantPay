import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions
import { login } from "../../actions/auth";

// Styling
import { Form, Col, InputGroup, Button } from "react-bootstrap";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(formData);
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
            <InputGroup>
              <Form.Control
                name='password'
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => onChange(e)}
                placeholder='Password'
                minLength='6'
                required
              />
              <InputGroup.Append>
                <Button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Button block type='submit'>
              Login
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { login })(Login);
