import React, { Component } from 'react';

import './LoginPage.css'

import {
    TextField,
    Button,
    Grid
} from '@material-ui/core';

import AccessPanel from '../../layouts/AccessPanel/AccessPanel';

import Card from "./../../components/Card/Card";
import CardHeader from "./../../components/Card/CardHeader/CardHeader";
import CardBody from '../../components/Card/CardBody/CardBody';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const GET_LOGIN = gql`
  mutation addTodo($email: String,$password: String) {
    userLogIn(email:$email,password:$password) {
        token
        user {
            _id
            email
            password
        }
    }
  }
`;

class LoginPage extends Component {
    state = {
        email: `dev@correo.com`,
        password: `dev@correo.com`
    }
    render() {
        return (
            <AccessPanel>
                <div className="LoginPage">
                    <Grid container
                        spacing={0}
                        justify={`center`}
                    >
                        <Grid item xs={4}>
                            <Mutation mutation={GET_LOGIN}
                                update={(cache, { data: { userLogIn } }) => {
                                    localStorage.setItem('token', userLogIn.token);
                                }}
                            >
                                {(signin, { data }) => (
                                    <div>
                                        <form noValidate autoComplete="off"
                                            onSubmit={e => {
                                                e.preventDefault();
                                                signin({ variables: { email: this.state.email, password: this.state.password } });
                                            }}
                                        >
                                            <Card>
                                                <CardHeader color="primary">
                                                    <h3 style={{ textAlign: 'center', margin: '0' }}>Login</h3>
                                                </CardHeader>
                                                <CardBody>
                                                    <TextField
                                                        fullWidth
                                                        id="email"
                                                        label="Email"
                                                        margin="normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        value={this.state.password}
                                                        onChange={event => this.setState({ email: event.target.value })}
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        id="password"
                                                        label="Password"
                                                        margin="normal"
                                                        type="password"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        value={this.state.password}
                                                        onChange={event => this.setState({ password: event.target.value })}
                                                    />
                                                    <Button type="submit" fullWidth color="primary">
                                                        LOGIN
                                        </Button>
                                                </CardBody>
                                            </Card>
                                        </form>
                                    </div>
                                )}
                            </Mutation>
                        </Grid>
                    </Grid>
                </div>
            </AccessPanel >
        );
    }
}

export default LoginPage;