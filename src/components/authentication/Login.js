import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loginUser } from '../../actions/auth';
import '../../styles/login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { loginUser, history } = this.props;
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    loginUser(user);
    this.setState = {
      email: '',
      password: '',
    };
    history.push('/');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-wrap">
        <form onSubmit={this.handleSubmit}>
          <input
            className="email-input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <input
            className="password-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <input
            type="submit"
            className="login-btn"
            value="Login"
          />
        </form>
      </div>
    );
  }
}

/* eslint-disable react/forbid-prop-types */

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
