import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Form, Grid } from 'semantic-ui-react';
import {loginUser} from '../../actions/peopleActions';

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.loginUser(this.state).then((auth) => {
      if(auth.error) {
        console.log(auth.error.message)
        this.setState({error: true})
      } else {
        this.props.handleLogin(auth)
        this.props.history.push('/profile')
      }
    })
  }

  render() {
    return (
        <Grid stackable container columns={1} >

            <Grid.Column>
                <Form onSubmit={this.handleSubmit}>
                    <h1>Login into your account</h1>

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
  loginUser: user => dispatch(loginUser(user))
})

export default connect(null, mapDispatchToProps)(Login);