import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
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
    const { registerUser } = this.props;
    const {
      name, email, password, passwordConfirmation,
    } = this.state;
    const user = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };
    registerUser(user);
  }

  render() {
    const {
      name, email, password, passwordConfirmation,
    } = this.state;
    return (
      <div className="signup-wrap">
        <form onSubmit={this.handleSubmit}>
          <h3 className="signup-heading">Sign up</h3>
          <input
            className="name-input"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            required
          />
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
            className="password-input"
            type="password"
            name="passwordConfirmation"
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            onChange={this.handleChange}
            required
          />
          <input
            type="submit"
            value="Sign up"
            className="signup-btn"
          />
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user)),
});

export default connect(null, mapDispatchToProps)(Signup);
