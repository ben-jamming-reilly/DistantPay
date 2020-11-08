import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

import { removeAlarm } from "../../actions/alarm";

const Alarm = ({ alarms, removeAlarm }) => {
  return (
    <Fragment>
      {alarms == null || alarms.length == 0
        ? ""
        : alarms.map((alarm) => (
            <Alert
              variant={alarm.type}
              onClose={() => removeAlarm(alarm.id)}
              dismissible
            >
              <p>{alarm.msg}</p>
            </Alert>
          ))}
    </Fragment>
  );
};

Alarm.propTypes = {
  alarms: PropTypes.array.isRequired,
  removeAlarm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alarms: state.alarm,
});

export default connect(mapStateToProps, { removeAlarm })(Alarm);
