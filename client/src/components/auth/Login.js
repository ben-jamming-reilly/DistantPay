import React, {Fragment, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { connect } from "react-redux";

const Login = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        password: "",
    });
    
    const onChange = (e) => 
        setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        // Login function
    };

    return (
        <Fragment>
        </Fragment>
    );
};

Login.propTypes = {
    login: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({

})

export default connect({ login })(Login);