import React from 'react';
// semantic-ui
import { Form, Button } from 'semantic-ui-react';
// Validator for email check
import Validator from 'validator';
// submit function proptype required
import PropTypes from 'prop-types';

import InlineError from '../messages/InlineError';

// LoginForm has states, so use class
class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value }
    });
  }

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({
      errors
    });
    // after validation, pass the data onSubmit
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  }

  validate = (sth) => {
    const errors = {}; //empty object
    if (!Validator.isEmail(sth.email)) {
      errors.email = "Invalid email";
    }
    if (!sth.password) {
      errors.password = "Cant be blank password";
    }
    return errors;
  }

  render() {
    // Destructuring assignment
    const {data,errors} = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email" 
            value={data.email}
            onChange={this.onChange}
          />
        </Form.Field>
        {errors.email && <InlineError text={errors.email} />}
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password" 
            value={data.password}
            onChange={this.onChange}
          />
        </Form.Field>
        {errors.password && <InlineError text={errors.password} />}
        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;
