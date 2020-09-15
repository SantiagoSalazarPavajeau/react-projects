import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Form, Grid } from 'semantic-ui-react';
import {createUser} from '../../actions/peopleActions';

class Signup extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createUser(this.state)
    this.props.history.push('/profile')
  }

  render() {
    return (
        <Grid stackable container columns={1} >

            <Grid.Column>
                <Form onSubmit={this.handleSubmit}>
                    <h1>Sign Up For An Account</h1>

                    <label>Username</label>
                    <Form.Input
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    /><br/>

                    <label>Password</label>
                    <Form.Input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    /><br/>
                    <br/>

                    <input type='submit'/>
            </Form>
        </Grid.Column>
      </Grid>

    )
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user))
})

export default connect(null, mapDispatchToProps)(Signup);