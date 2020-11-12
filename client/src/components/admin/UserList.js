import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getUsers } from "../../actions/users";

import { ListGroup } from "react-bootstrap";

const User = ({}) => {
  return <ListGroup.Item></ListGroup.Item>;
};

const UserList = ({ getUsers }) => {
  const [Users, setUsers] = useState(initialState);
  return (
    <Fragment>
      <ListGroup></ListGroup>
    </Fragment>
  );
};

UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.user.users,
});

export default connect(mapStateToProps, { getUsers })(UserList);
