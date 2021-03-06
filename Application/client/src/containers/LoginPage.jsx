import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <div className="container">
        <LoginForm
          onSubmit={this.props.onSubmit}
          onChange={this.props.onChange}
          errors={this.props.errors}
          user={this.props.user}
        />
        <Card className="container">
          <CardText>Need to make an account? <Link to='/signup' onClick={this.props.resetErrors}>Sign Up</Link></CardText>
        </Card>

        {this.props.signedIn && <Redirect to='/dashboard' />}
      </div>
    );
  }

}

export default LoginPage;