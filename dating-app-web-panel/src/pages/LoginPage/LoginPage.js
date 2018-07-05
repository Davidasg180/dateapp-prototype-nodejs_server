import React, { Component } from 'react';
import {
    TextField,
    Button
} from '@material-ui/core';

class LoginView extends Component {
    state = {}
    render() {
        return (
            <div>
                <TextField
                    hintText="Username"
                    floatingLanelText="Username"
                    onChange={(event, newValue) => {
                        this.setState({ username: newValue })
                    }}
                />
                <TextField
                    hintText="Username"
                    floatingLanelText="Username"
                    onChange={(event, newValue) => {
                        this.setState({ username: newValue });
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
  
                >
                Login
                </Button>
            </div>
        );
    }
}

export default LoginView;