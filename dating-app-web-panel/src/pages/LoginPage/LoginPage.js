import React, { Component } from 'react';

import './LoginPage.css'

import {
    TextField,
    Button,
    Grid,
    Paper
} from '@material-ui/core';

import AccessPanel from '../../layouts/AccessPanel/AccessPanel';

import Card from "./../../components/Card/Card";
import CardHeader from "./../../components/Card/CardHeader/CardHeader";
import CardBody from '../../components/Card/CardBody/CardBody';

class LoginPage extends Component {
    state = {}
    render() {
        return (
            <AccessPanel>
                <div className="LoginPage">
                    <Grid container
                        spacing={0}
                        justify={`center`}
                    >
                        <Grid item xs={4}>
                            <form noValidate autoComplete="off">
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
                                        />
                                        <TextField
                                            fullWidth
                                            id="password"
                                            label="Password"
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <Button fullWidth color="prmary">
                                            LOGIN
                                        </Button>
                                    </CardBody>
                                </Card>
                            </form>
                        </Grid>
                    </Grid>
                </div>
            </AccessPanel >
        );
    }
}

export default LoginPage;