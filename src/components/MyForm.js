//https://github.com/davidkpiano/react-redux-form
import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';

class MyForm extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }

  render() {
    return (
      <Form model="user" onSubmit={(user) => this.handleSubmit(user)}>
        <label>Your name?</label>
        <Control.text model="user.name" />
        <button>Submit!</button>
      </Form>
    );
  }
}

MyForm.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};


export default MyForm;
